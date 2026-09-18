# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: customerlogin/example.spec.js >> Login with OTP
- Location: tests/customerlogin/example.spec.js:4:1

# Error details

```
Error: page.waitForTimeout: Target page, context or browser has been closed
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { waitForLatestOTP } from '../../utils/gmail.js';
  3  | 
  4  | test('Login with OTP', async ({ page }) => {
  5  | 
  6  |   await page.goto('https://staginggs.vplayed.com/');
  7  |   await page.waitForTimeout(5000);
  8  |   await page.locator('//*[@id="fixedheader"]/div/div[2]/div[7]/a/span/ngx-avatars/div/div').hover();
  9  | 
  10 |   await page.getByRole('button', { name: /sign in|log in/i }).click();
  11 | 
  12 |   await page.locator('input[type="email"]').first().fill('rohith8056@gmail.com');
  13 |   await page.getByRole('button', { name: /continue/i }).click();
> 14 |   await page.waitForTimeout(10000);
     |              ^ Error: page.waitForTimeout: Target page, context or browser has been closed
  15 | 
  16 |   const otpRequestTime = Date.now();
  17 | 
  18 |   console.log('OTP requested...');
  19 | 
  20 |   const otp = await waitForLatestOTP({
  21 |     sender: 'developer.vplay@gmail.com',
  22 |     subject: 'Vplayed-One Time Password (OTP) Confirmation',
  23 |     afterTimestamp: otpRequestTime,
  24 |     timeout: 60000,
  25 |     pollingInterval: 5000
  26 |   });
  27 | 
  28 |   console.log(`OTP received: ${otp}`);
  29 | 
  30 |   expect(otp, 'OTP was not received from Gmail').toMatch(/^\d{6}$/);
  31 | 
  32 |   const boxes = page.locator('input.single-otp-input');
  33 |   await expect(boxes).toHaveCount(6);
  34 | 
  35 |   for (let i = 0; i < otp.length; i++) {
  36 |   //await boxes.nth(i).click();
  37 |   await boxes.nth(i).pressSequentially(otp[i], { delay: 50 });
  38 |   //await boxes.nth(i).press('Tab'); // helps trigger validation
  39 | }
  40 | 
  41 |   await page.getByRole('button', { name: /continue/i }).click();
  42 |   await page.waitForTimeout(5000);
  43 | 
  44 | });
  45 | 
```