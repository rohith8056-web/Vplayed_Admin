import { expect } from '@playwright/test';
import { waitForLatestOTP } from './gmail.js';

export class storagestate {

  constructor(browser) 
  {
    this.browser = browser;
  }

  async setstoragestateforcontext(url,email) {
    const contextjson = await this.browser.newContext();
      const storagestatepage = await contextjson.newPage();
    
      await storagestatepage.goto(url);
      await storagestatepage.waitForTimeout(3000);
      await storagestatepage.locator('//*[@id="fixedheader"]/div/div[2]/div[7]/a/span/ngx-avatars/div/div').hover();
    
      await storagestatepage.getByRole('button', { name: /sign in|log in/i }).click();
    
      await storagestatepage.locator('input[type="email"]').first().fill(email);
      const otpRequestTime = Date.now();
      await storagestatepage.getByRole('button', { name: /continue/i }).click();
      await storagestatepage.waitForTimeout(7000);
    
      console.log('OTP requested...', new Date(otpRequestTime).toISOString());
    
      const otp = await waitForLatestOTP({
        sender: 'developer.vplay@gmail.com',
        subject: 'Vplayed-One Time Password (OTP) Confirmation',
        afterTimestamp: otpRequestTime,
        timeout: 60000,
        pollingInterval: 5000
      });
    
      console.log(`OTP received: ${otp}`);
    
      expect(otp, 'OTP was not received from Gmail').toMatch(/^\d{6}$/);
    
      const boxes = storagestatepage.locator('input.single-otp-input');
      await expect(boxes).toHaveCount(6);
    
      for (let i = 0; i < otp.length; i++) {
        await boxes.nth(i).pressSequentially(otp[i], { delay: 50 });
      }
    
      await storagestatepage.getByRole('button', { name: /continue/i }).click();
      await storagestatepage.waitForTimeout(3000);
      //await storagestatepage.waitForLoadState('networkidle');
      await contextjson.storageState({ path: 'state.json' });
      await storagestatepage.close();
      await contextjson.close();
      const contextstate = await this.browser.newContext({ storageState: 'state.json' });
    return contextstate;
  }

}