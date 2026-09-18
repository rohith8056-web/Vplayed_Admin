import { authenticate } from '@google-cloud/local-auth';
import fs from 'fs';

const auth = await authenticate({
  scopes: ['https://www.googleapis.com/auth/gmail.readonly'],
   keyfilePath: './downloads/credentials.json',
});

fs.writeFileSync(
  'token.json',
  JSON.stringify(auth.credentials)
);

console.log('Token generated successfully');