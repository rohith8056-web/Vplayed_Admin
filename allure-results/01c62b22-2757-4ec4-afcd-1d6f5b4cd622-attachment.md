# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: customerlogin/userlogin.spec.js >> Login with OTP for customer
- Location: tests/customerlogin/userlogin.spec.js:19:1

# Error details

```
ReferenceError: waitForLatestOTP is not defined
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic:
    - paragraph [ref=e4]:
      - text: All the content displayed in this domain is purely for demo purpose only.
      - button "Close Demo Strip" [ref=e5] [cursor=pointer]:
        - img [ref=e6]
    - banner [ref=e9]:
      - generic [ref=e10]:
        - generic [ref=e12]:
          - link "Vplayed" [ref=e13] [cursor=pointer]:
            - /url: /
            - img "Vplayed" [ref=e14]
          - link "Movies" [ref=e15] [cursor=pointer]:
            - /url: /category/movies
          - generic [ref=e16] [cursor=pointer]:
            - text: Series
            - img [ref=e18]
          - link "Promos" [ref=e20] [cursor=pointer]:
            - /url: /promos
          - link "Channels" [ref=e21] [cursor=pointer]:
            - /url: /studio/all/studios
          - link "Genre" [ref=e22] [cursor=pointer]:
            - /url: /more
          - generic [ref=e23] [cursor=pointer]:
            - text: Streaming
            - img [ref=e25]
        - generic [ref=e27]:
          - generic "Open search" [ref=e28]:
            - generic [ref=e35]:
              - generic:
                - textbox "Search"
              - button [ref=e38] [cursor=pointer]:
                - img [ref=e41]
          - generic [ref=e45] [cursor=pointer]:
            - img [ref=e46]
            - generic [ref=e48]: Subscribe
          - generic [ref=e49]:
            - generic [ref=e51] [cursor=pointer]:
              - img [ref=e52]
              - text: "0"
            - img [ref=e56] [cursor=pointer]
          - img [ref=e99] [cursor=pointer]
          - generic [ref=e103] [cursor=pointer]:
            - generic [ref=e108]: G
            - img [ref=e109]
            - generic:
              - img
    - generic [ref=e111]:
      - button "Close overlay" [ref=e112] [cursor=pointer]
      - generic [ref=e113]:
        - button "Close popup" [ref=e114] [cursor=pointer]:
          - img [ref=e115]
        - generic [ref=e119]:
          - heading "Explore your world of entertainment" [level=4] [ref=e120]
          - paragraph [ref=e121]: Enjoy the ultimate streaming experience!
        - generic [ref=e123]:
          - img "Vplayed" [ref=e124]
          - heading "Verify your email" [level=3] [ref=e125]
          - paragraph [ref=e126]: Enter the OTP sent to your email rohith8056@gmail.com
          - generic [ref=e130] [cursor=pointer]:
            - textbox [active] [ref=e131]
            - textbox [ref=e132]
            - textbox [ref=e133]
            - textbox [ref=e134]
            - textbox [ref=e135]
            - textbox [ref=e136]
          - button "Continue":
            - generic: Continue
          - generic [ref=e137]:
            - paragraph [ref=e138]: Didn’t get a code?
            - generic [ref=e140]: Request a new code in55 Sec
          - paragraph [ref=e141]:
            - button "Go to step 0" [ref=e142] [cursor=pointer]: Change your Email
    - generic [ref=e145]:
      - generic [ref=e146]:
        - text: Vplayed uses cookies to ensure you get the best experience on our website.
        - link "COOKIES_POPUP.LEARN_MORE_ARIA" [ref=e147] [cursor=pointer]:
          - /url: /privacy-policy/web
          - text: Learn More
      - button "Got it" [ref=e148] [cursor=pointer]:
        - generic [ref=e149]: Got it
      - button "Accept cookies" [ref=e150] [cursor=pointer]:
        - img [ref=e151]
  - list [ref=e159]:
    - listitem [ref=e160] [cursor=pointer]:
      - link "Serie addd" [ref=e161]:
        - /url: javascript:void(0)
        - img "Serie addd" [ref=e165]
    - listitem:
      - link "This 3 Minute Motivational Video Will Change Yo":
        - /url: javascript:void(0)
        - generic:
          - generic:
            - generic:
              - img "This 3 Minute Motivational Video Will Change Yo"
    - listitem:
      - link "Stage Test Push":
        - /url: javascript:void(0)
        - generic:
          - generic:
            - generic:
              - img "Stage Test Push"
    - listitem:
      - link "Schedule Web series":
        - /url: javascript:void(0)
        - generic:
          - generic:
            - generic:
              - img "Schedule Web series"
    - listitem:
      - link "Offline Download Series":
        - /url: javascript:void(0)
        - generic:
          - generic:
            - generic:
              - img "Offline Download Series"
    - listitem:
      - 'link "Fall Promo _ Streaming Now _ #HotstarSpecials"':
        - /url: javascript:void(0)
        - generic:
          - generic:
            - generic:
              - 'img "Fall Promo _ Streaming Now _ #HotstarSpecials"'
    - listitem:
      - link "NewMountains":
        - /url: javascript:void(0)
        - generic:
          - generic:
            - generic:
              - img "NewMountains"
    - listitem:
      - link "Avatar The Way Of Water 20 sec Promo Tamil 77":
        - /url: javascript:void(0)
        - generic:
          - generic:
            - generic:
              - img "Avatar The Way Of Water 20 sec Promo Tamil 77"
    - listitem:
      - link "The Story of Snow White And The Seven Dwarfs":
        - /url: javascript:void(0)
        - generic:
          - generic:
            - generic:
              - img "The Story of Snow White And The Seven Dwarfs"
```

# Test source

```ts
  1  | 
  2  | export class storagestate {
  3  | 
  4  |   constructor(browser) 
  5  |   {
  6  |     this.browser = browser;
  7  |   }
  8  | 
  9  |   async setstoragestateforcontext(url,email) {
  10 |     const contextjson = await this.browser.newContext();
  11 |       const storagestatepage = await contextjson.newPage();
  12 |     
  13 |       await storagestatepage.goto(url);
  14 |       await storagestatepage.waitForTimeout(3000);
  15 |       await storagestatepage.locator('//*[@id="fixedheader"]/div/div[2]/div[7]/a/span/ngx-avatars/div/div').hover();
  16 |     
  17 |       await storagestatepage.getByRole('button', { name: /sign in|log in/i }).click();
  18 |     
  19 |       await storagestatepage.locator('input[type="email"]').first().fill(email);
  20 |       await storagestatepage.getByRole('button', { name: /continue/i }).click();
  21 |       await storagestatepage.waitForTimeout(7000);
  22 |     
  23 |       const otpRequestTime = Date.now();
  24 |     
  25 |       console.log('OTP requested...');
  26 |     
> 27 |       const otp = await waitForLatestOTP({
     |                   ^ ReferenceError: waitForLatestOTP is not defined
  28 |         sender: 'developer.vplay@gmail.com',
  29 |         subject: 'Vplayed-One Time Password (OTP) Confirmation',
  30 |         afterTimestamp: otpRequestTime,
  31 |         timeout: 60000,
  32 |         pollingInterval: 5000
  33 |       });
  34 |     
  35 |       console.log(`OTP received: ${otp}`);
  36 |     
  37 |       expect(otp, 'OTP was not received from Gmail').toMatch(/^\d{6}$/);
  38 |     
  39 |       const boxes = storagestatepage.locator('input.single-otp-input');
  40 |       await expect(boxes).toHaveCount(6);
  41 |     
  42 |       for (let i = 0; i < otp.length; i++) {
  43 |         await boxes.nth(i).pressSequentially(otp[i], { delay: 50 });
  44 |       }
  45 |     
  46 |       await storagestatepage.getByRole('button', { name: /continue/i }).click();
  47 |       await page1.waitForLoadState("networkidle")
  48 |       await contextjson.storageState({ path: 'state.json' });
  49 |       await page1.close();
  50 |       await contextjson.close();
  51 |       const contextstate = await this.browser.newContext({ storageState: 'state.json' });
  52 |     return contextstate;
  53 |   }
  54 | 
  55 | }
```