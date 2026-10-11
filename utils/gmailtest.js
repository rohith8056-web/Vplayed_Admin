import test from 'node:test';
import assert from 'node:assert/strict';
import { buildGmailQuery, resolveGmailAuthConfig } from './gmail.js';

test('resolveGmailAuthConfig prefers GitHub Actions env secrets', () => {
  process.env.GMAIL_CLIENT_ID = 'ci-client-id';
  process.env.GMAIL_CLIENT_SECRET = 'ci-client-secret';
  process.env.GMAIL_REFRESH_TOKEN = 'ci-refresh-token';
  process.env.GMAIL_ACCESS_TOKEN = 'ci-access-token';

  const config = resolveGmailAuthConfig();

  assert.equal(config.clientId, 'ci-client-id');
  assert.equal(config.clientSecret, 'ci-client-secret');
  assert.equal(config.refreshToken, 'ci-refresh-token');
  assert.equal(config.accessToken, 'ci-access-token');

  delete process.env.GMAIL_CLIENT_ID;
  delete process.env.GMAIL_CLIENT_SECRET;
  delete process.env.GMAIL_REFRESH_TOKEN;
  delete process.env.GMAIL_ACCESS_TOKEN;
});

test('buildGmailQuery uses a broader OTP subject match for CI', () => {
  const query = buildGmailQuery({
    sender: 'developer.vplay@gmail.com',
    subject: 'Vplayed-One Time Password (OTP) Confirmation',
    afterTimestamp: 1000
  });

  assert.match(query, /in:anywhere/);
  assert.match(query, /after:\d+/);
  assert.match(query, /from:developer\.vplay@gmail\.com/);
  assert.match(query, /subject:OTP/i);
});
