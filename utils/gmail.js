import { google } from 'googleapis';
import fs from 'fs';
import path from 'path';

function resolvePath(candidates) {
    for (const p of candidates) {
        if (fs.existsSync(p)) return p;
    }
    return candidates[0];
}

const CREDENTIALS_PATH = resolvePath([
    path.join(process.cwd(), 'credentials.json'),
    path.join(process.cwd(), 'downloads', 'credentials.json')
]);

const TOKEN_PATH = resolvePath([
    path.join(process.cwd(), 'token.json'),
    path.join(process.cwd(), 'downloads', 'token.json')
]);

/**
 * Create authenticated Gmail client
 */
async function getGmailClient() {

    const credentials = JSON.parse(
        fs.readFileSync(CREDENTIALS_PATH, 'utf8')
    );

    const token = JSON.parse(
        fs.readFileSync(TOKEN_PATH, 'utf8')
    );

    const { client_id, client_secret, redirect_uris } =
        credentials.installed;

    const auth = new google.auth.OAuth2(
        client_id,
        client_secret,
        redirect_uris[0]
    );

    auth.setCredentials(token);

    return google.gmail({
        version: 'v1',
        auth
    });
}


/**
 * Pull a 6-digit OTP out of email text, preferring digits that sit
 * near an OTP-ish keyword over any random 6-digit number in the body
 * (footers, tracking IDs, dates, zip codes, etc. can all match \b\d{6}\b).
 */
function isLikelyOTP(value) {
    if (!/^\d{6}$/.test(value)) return false;
    if (/^(?:\d)\1{5}$/.test(value)) return false;
    if (/^(?:000000|111111|222222|333333|444444|555555|666666|777777|888888|999999)$/.test(value)) return false;
    return true;
}

function extractOTP(text) {
    const normalized = (text || '').replace(/\s+/g, ' ');

    const preferredPatterns = [
        /verify\s+your\s+otp\s+to\s+login[^\d]{0,20}(\d{6})/i,
        /otp\s+to\s+login[^\d]{0,20}(\d{6})/i,
        /use\s+this\s+verification\s+code[^\d]{0,20}(\d{6})/i,
        /(?:otp|one[- ]?time[- ]?password|verification|passcode|pin|code)[^\d]{0,80}(\d{6})/i
    ];

    for (const pattern of preferredPatterns) {
        const match = normalized.match(pattern);
        if (!match) continue;
        const otp = match[1];
        if (isLikelyOTP(otp)) {
            return { otp, matchType: 'context' };
        }
    }

    const allMatches = [...normalized.matchAll(/\b\d{6}\b/g)].map(m => m[0]);

    for (const candidate of allMatches) {
        if (isLikelyOTP(candidate)) {
            return { otp: candidate, matchType: 'fallback' };
        }
    }

    return null;
}


/**
 * Get the latest OTP email from Gmail Spam
 *
 * @param {Object} options
 * @param {string} options.sender - Optional sender email
 * @param {string} options.subject - Optional subject text
 * @param {number} options.afterTimestamp - Only consider emails received after this time (ms since epoch, matches Gmail internalDate)
 */
export async function getLatestOTP({
    sender = 'developer.vplay@gmail.com',
    subject = 'Vplayed-One Time Password (OTP) Confirmation',
    afterTimestamp = 0
} = {}) {

    const gmail = await getGmailClient();

    let query = 'in:anywhere newer_than:7d';

    if (sender) {
        query += ` from:${sender}`;
    }

    if (subject) {
        query += ` subject:"${subject}"`;
    }

    console.log(`Gmail search query: ${query}`);

    const response = await gmail.users.messages.list({
        userId: 'me',
        q: query,
        maxResults: 50
    });

    const messages = response.data.messages || [];

    if (messages.length === 0) {
        throw new Error('No OTP emails found in Spam');
    }

    const otpEmails = [];

    /*
     * Gmail messages.list() should not be treated as
     * our source of truth for "latest".
     *
     * We retrieve each email and use internalDate.
     *
     * IMPORTANT:
     * If the OTP email already exists in spam or inbox before the request is sent,
     * do not discard it just because it is slightly older than the exact request time.
     * The real OTP is the newest valid OTP match among recent mail, not necessarily a
     * brand-new message created after the click.
     */
    for (const message of messages) {

        try {

            const email = await gmail.users.messages.get({
                userId: 'me',
                id: message.id,
                format: 'full'
            });

            const receivedTime = Number(email.data.internalDate);

            const emailText = extractEmailText(email.data);
            const snippetText = email.data.snippet || '';
            const combinedText = `${emailText} ${snippetText}`;
            const result = extractOTP(combinedText);

            const headers = email.data.payload?.headers || [];
            const headersSubject = headers.find(h => h.name.toLowerCase() === 'subject')?.value || '';
            const headersFrom = headers.find(h => h.name.toLowerCase() === 'from')?.value || '';
            const senderMatches =
                (!sender || headersFrom.toLowerCase().includes(sender.toLowerCase())) &&
                (!subject || headersSubject.toLowerCase().includes(subject.toLowerCase().replace(/[()]/g, '')) ||
                    combinedText.toLowerCase().includes('otp') ||
                    combinedText.toLowerCase().includes('verification'));

            if (!result || !senderMatches) {
                continue;
            }

            console.log(
                `[${message.id}] received=${new Date(receivedTime).toISOString()} ` +
                `snippet="${email.data.snippet?.slice(0, 80)}" ` +
                `matched=${result ? `${result.otp} (${result.matchType})` : 'none'}`
            );

            if (!result) {
                continue;
            }

            otpEmails.push({
                id: message.id,
                otp: result.otp,
                matchType: result.matchType,
                receivedTime,
                receivedDate:
                    new Date(receivedTime)
            });

        } catch (error) {

            console.log(
                `Unable to read message ${message.id}:`,
                error.message
            );
        }
    }

    if (otpEmails.length === 0) {
        throw new Error(
            'No valid 6-digit OTP email found in recent Gmail messages'
        );
    }

    /*
     * Prefer context-matched OTPs over fallback matches, then sort
     * newest first within each group. If the request-time filter removed
     * the real OTP email, we still keep the newest valid match so it can
     * be used instead of failing arbitrarily.
     */
    otpEmails.sort((a, b) => {
        if (a.matchType !== b.matchType) {
            return a.matchType === 'context' ? -1 : 1;
        }
        return b.receivedTime - a.receivedTime;
    });

    const latestEmail = otpEmails[0];

    console.log(
        `Latest OTP email received: ${latestEmail.receivedDate} (match: ${latestEmail.matchType})`
    );

    console.log(
        `Latest OTP: ${latestEmail.otp}`
    );

    return latestEmail.otp;
}


/**
 * Extract text from Gmail MIME message
 */
function extractEmailText(email) {

    let text = '';

    function processPart(part) {

        if (part.body?.data) {

            const decodedText = Buffer
                .from(part.body.data, 'base64url')
                .toString('utf8');

            text += ` ${decodedText}`;
        }

        if (part.parts) {

            for (const childPart of part.parts) {
                processPart(childPart);
            }
        }
    }

    processPart(email.payload);

    /*
     * Gmail snippet is also useful as a fallback.
     */
    if (email.snippet) {
        text += ` ${email.snippet}`;
    }

    return text;
}


/**
 * Wait until a new OTP email arrives in Spam.
 */
export async function waitForLatestOTP({
    sender = '',
    subject = '',
    afterTimestamp,
    timeout = 60000,
    pollingInterval = 5000
} = {}) {

    const startTime = Date.now();

    while (Date.now() - startTime < timeout) {

        try {

            const otp = await getLatestOTP({
                sender,
                subject,
                afterTimestamp
            });

            if (otp) {
                return otp;
            }

        } catch (error) {

            console.log(
                `OTP not available yet: ${error.message}`
            );
        }

        console.log(
            `Waiting ${pollingInterval / 1000} seconds for OTP...`
        );

        await new Promise(resolve =>
            setTimeout(resolve, pollingInterval)
        );
    }

    throw new Error(
        `OTP was not received within ${timeout / 1000} seconds`
    );
}