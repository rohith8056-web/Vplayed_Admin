# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: customerlogin/userlogin.spec.js >> Login with OTP for customer
- Location: tests/customerlogin/userlogin.spec.js:18:1

# Error details

```
Error: page.waitForTimeout: Target page, context or browser has been closed
```

# Test source

```ts
  1  | import { expect } from '@playwright/test';
  2  | import { waitForLatestOTP } from './gmail.js';
  3  | 
  4  | export class storagestate {
  5  | 
  6  |   constructor(browser) 
  7  |   {
  8  |     this.browser = browser;
  9  |   }
  10 | 
  11 |   async setstoragestateforcontext(url,email) {
  12 |     const contextjson = await this.browser.newContext();
  13 |       const storagestatepage = await contextjson.newPage();
  14 |     
  15 |       await storagestatepage.goto(url);
  16 |       await storagestatepage.waitForTimeout(3000);
  17 |       await storagestatepage.locator('//*[@id="fixedheader"]/div/div[2]/div[7]/a/span/ngx-avatars/div/div').hover();
  18 |     
  19 |       await storagestatepage.getByRole('button', { name: /sign in|log in/i }).click();
  20 |     
  21 |       await storagestatepage.locator('input[type="email"]').first().fill(email);
  22 |       await storagestatepage.getByRole('button', { name: /continue/i }).click();
> 23 |       await storagestatepage.waitForTimeout(7000);
     |                              ^ Error: page.waitForTimeout: Target page, context or browser has been closed
  24 |     
  25 |       const otpRequestTime = Date.now();
  26 |     
  27 |       console.log('OTP requested...');
  28 |     
  29 |       const otp = await waitForLatestOTP({
  30 |         sender: 'developer.vplay@gmail.com',
  31 |         subject: 'Vplayed-One Time Password (OTP) Confirmation',
  32 |         afterTimestamp: otpRequestTime,
  33 |         timeout: 60000,
  34 |         pollingInterval: 5000
  35 |       });
  36 |     
  37 |       console.log(`OTP received: ${otp}`);
  38 |     
  39 |       expect(otp, 'OTP was not received from Gmail').toMatch(/^\d{6}$/);
  40 |     
  41 |       const boxes = storagestatepage.locator('input.single-otp-input');
  42 |       await expect(boxes).toHaveCount(6);
  43 |     
  44 |       for (let i = 0; i < otp.length; i++) {
  45 |         await boxes.nth(i).pressSequentially(otp[i], { delay: 50 });
  46 |       }
  47 |     
  48 |       await storagestatepage.getByRole('button', { name: /continue/i }).click();
  49 |       await storagestatepage.waitForTimeout(3000);
  50 |       //await storagestatepage.waitForLoadState('networkidle');
  51 |       await contextjson.storageState({ path: 'state.json' });
  52 |       await storagestatepage.close();
  53 |       await contextjson.close();
  54 |       const contextstate = await this.browser.newContext({ storageState: 'state.json' });
  55 |     return contextstate;
  56 |   }
  57 | 
  58 | }
```