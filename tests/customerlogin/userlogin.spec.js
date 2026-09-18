import { test, expect } from '@playwright/test';
import { waitForLatestOTP } from '../../utils/gmail.js';

//user login
test('Login with OTP for customer', async ({ page }) => {

  await page.goto('https://staginggs.vplayed.com/');
  await page.waitForTimeout(3000);
  await page.locator('//*[@id="fixedheader"]/div/div[2]/div[7]/a/span/ngx-avatars/div/div').hover();

  await page.getByRole('button', { name: /sign in|log in/i }).click();

  await page.locator('input[type="email"]').first().fill('rohith8056@gmail.com');
  await page.getByRole('button', { name: /continue/i }).click();
  await page.waitForTimeout(7000);

  const otpRequestTime = Date.now();

  console.log('OTP requested...');

  const otp = await waitForLatestOTP({
    sender: 'developer.vplay@gmail.com',
    subject: 'Vplayed-One Time Password (OTP) Confirmation',
    afterTimestamp: otpRequestTime,
    timeout: 60000,
    pollingInterval: 5000
  });

  console.log(`OTP received: ${otp}`);

  expect(otp, 'OTP was not received from Gmail').toMatch(/^\d{6}$/);

  const boxes = page.locator('input.single-otp-input');
  await expect(boxes).toHaveCount(6);

  for (let i = 0; i < otp.length; i++) {
  //await boxes.nth(i).click();
  await boxes.nth(i).pressSequentially(otp[i], { delay: 50 });
  //await boxes.nth(i).press('Tab'); // helps trigger validation
}

  await page.getByRole('button', { name: /continue/i }).click();
  await page.waitForTimeout(2000);

});
