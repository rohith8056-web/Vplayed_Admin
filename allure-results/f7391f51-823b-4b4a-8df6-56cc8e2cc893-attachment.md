# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: customerlogin/userlogin.spec.js >> Login with OTP for customer
- Location: tests/customerlogin/userlogin.spec.js:5:1

# Error details

```
Error: locator.hover: Target page, context or browser has been closed
Call log:
  - waiting for locator('//*[@id="fixedheader"]/div/div[2]/div[7]/a/span/ngx-avatars/div/div')

```

# Test source

```ts
  1  | import { test, expect, chromium } from '@playwright/test';
  2  | import { waitForLatestOTP } from '../../utils/gmail.js';
  3  | 
  4  | //user login
  5  | test('Login with OTP for customer', async () => {
  6  |   const browser = await chromium.launch({ headless: false });
  7  |   const context = await browser.newContext();
  8  |   const page = await context.newPage();
  9  | 
  10 |   await page.goto('https://staginggs.vplayed.com/');
  11 |   await page.waitForTimeout(3000);
> 12 |   await page.locator('//*[@id="fixedheader"]/div/div[2]/div[7]/a/span/ngx-avatars/div/div').hover();
     |                                                                                             ^ Error: locator.hover: Target page, context or browser has been closed
  13 | 
  14 |   await page.getByRole('button', { name: /sign in|log in/i }).click();
  15 | 
  16 |   await page.locator('input[type="email"]').first().fill('rohith8056@gmail.com');
  17 |   await page.getByRole('button', { name: /continue/i }).click();
  18 |   await page.waitForTimeout(7000);
  19 | 
  20 |   const otpRequestTime = Date.now();
  21 | 
  22 |   console.log('OTP requested...');
  23 | 
  24 |   const otp = await waitForLatestOTP({
  25 |     sender: 'developer.vplay@gmail.com',
  26 |     subject: 'Vplayed-One Time Password (OTP) Confirmation',
  27 |     afterTimestamp: otpRequestTime,
  28 |     timeout: 60000,
  29 |     pollingInterval: 5000
  30 |   });
  31 | 
  32 |   console.log(`OTP received: ${otp}`);
  33 | 
  34 |   expect(otp, 'OTP was not received from Gmail').toMatch(/^\d{6}$/);
  35 | 
  36 |   const boxes = page.locator('input.single-otp-input');
  37 |   await expect(boxes).toHaveCount(6);
  38 | 
  39 |   for (let i = 0; i < otp.length; i++) {
  40 |     await boxes.nth(i).pressSequentially(otp[i], { delay: 50 });
  41 |   }
  42 | 
  43 |   await page.getByRole('button', { name: /continue/i }).click();
  44 |   await page.waitForTimeout(2000);
  45 | 
  46 |   await browser.close();
  47 | });
  48 | 
```