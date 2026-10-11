# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: customerlogin/userlogin.spec.js >> Login with OTP for customer
- Location: tests/customerlogin/userlogin.spec.js:19:1

# Error details

```
TypeError: page.context is not a function
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e3]:
    - paragraph [ref=e5]:
      - text: All the content displayed in this domain is purely for demo purpose only.
      - button "Close Demo Strip" [ref=e6] [cursor=pointer]:
        - img [ref=e7]
    - banner [ref=e10]:
      - generic [ref=e11]:
        - generic [ref=e13]:
          - link "Vplayed" [ref=e14] [cursor=pointer]:
            - /url: /
            - img "Vplayed" [ref=e15]
          - link "Movies" [ref=e16] [cursor=pointer]:
            - /url: /category/movies
          - generic [ref=e17] [cursor=pointer]:
            - text: Series
            - img [ref=e19]
          - link "Promos" [ref=e21] [cursor=pointer]:
            - /url: /promos
          - link "Channels" [ref=e22] [cursor=pointer]:
            - /url: /studio/all/studios
          - link "Genre" [ref=e23] [cursor=pointer]:
            - /url: /more
          - generic [ref=e24] [cursor=pointer]:
            - text: Streaming
            - img [ref=e26]
        - generic [ref=e28]:
          - generic "Open search" [ref=e29]:
            - generic [ref=e36]:
              - generic:
                - textbox "Search"
              - button [ref=e39] [cursor=pointer]:
                - img [ref=e42]
          - generic [ref=e46] [cursor=pointer]:
            - img [ref=e47]
            - generic [ref=e49]: Subscribe
          - generic [ref=e50]:
            - generic [ref=e52] [cursor=pointer]:
              - img [ref=e53]
              - text: "0"
            - img [ref=e57] [cursor=pointer]
          - img [ref=e100] [cursor=pointer]
          - generic [ref=e104] [cursor=pointer]:
            - generic [ref=e109]: R
            - img [ref=e110]
            - generic:
              - img
    - generic [ref=e115]:
      - generic [ref=e116]:
        - text: Vplayed uses cookies to ensure you get the best experience on our website.
        - link "COOKIES_POPUP.LEARN_MORE_ARIA" [ref=e117] [cursor=pointer]:
          - /url: /privacy-policy/web
          - text: Learn More
      - button "Got it" [ref=e118] [cursor=pointer]:
        - generic [ref=e119]: Got it
      - button "Accept cookies" [ref=e120] [cursor=pointer]:
        - img [ref=e121]
  - generic [ref=e126]:
    - generic [ref=e129]:
      - heading "Movies" [level=1] [ref=e130]
      - heading "Explore all Movies exclusively for you" [level=4] [ref=e131]
    - generic [ref=e134]:
      - generic [ref=e135]:
        - img "Automation Video Title - 0656" [ref=e143] [cursor=pointer]
        - heading "Automation Video Title - 0656" [level=4] [ref=e144] [cursor=pointer]
      - generic [ref=e145]:
        - generic [ref=e146]:
          - generic [ref=e149]: Coming Soon
          - img "Rapunzel - Arabic Language" [ref=e156] [cursor=pointer]
        - heading "Rapunzel - Arabic Language" [level=4] [ref=e157] [cursor=pointer]
      - generic [ref=e158]:
        - img "QA Video Title - 2773" [ref=e166] [cursor=pointer]
        - heading "QA Video Title - 2773" [level=4] [ref=e167] [cursor=pointer]
      - generic [ref=e168]:
        - generic [ref=e169]:
          - generic [ref=e171]:
            - generic [ref=e172]: ₹
            - generic [ref=e173]: "500"
          - img "Stage Test Push" [ref=e180] [cursor=pointer]
        - heading "Stage Test Push" [level=4] [ref=e181] [cursor=pointer]
      - generic [ref=e182]:
        - img "Coolie Promo" [ref=e190] [cursor=pointer]
        - heading "Coolie Promo" [level=4] [ref=e191] [cursor=pointer]
      - generic [ref=e192]:
        - generic [ref=e193]:
          - generic [ref=e195]:
            - generic [ref=e196]: ₹
            - generic [ref=e197]: "100"
          - img "Release video" [ref=e204] [cursor=pointer]
        - heading "Release video" [level=4] [ref=e205] [cursor=pointer]
      - generic [ref=e206]:
        - img "Automation Video Title - 58594612" [ref=e214] [cursor=pointer]
        - heading "Automation Video Title - 58594612" [level=4] [ref=e215] [cursor=pointer]
      - generic [ref=e216]:
        - img "Automation Video Title - 58478373" [ref=e224] [cursor=pointer]
        - heading "Automation Video Title - 58478373" [level=4] [ref=e225] [cursor=pointer]
      - generic [ref=e226]:
        - generic [ref=e227]:
          - img [ref=e230]
          - img "Automation Video Title - 58392976" [ref=e239] [cursor=pointer]
        - heading "Automation Video Title - 58392976" [level=4] [ref=e240] [cursor=pointer]
      - generic [ref=e241]:
        - img "Automation_Video_0001" [ref=e249] [cursor=pointer]
        - heading "Automation_Video_0001" [level=4] [ref=e250] [cursor=pointer]
      - generic [ref=e251]:
        - img "Automation Video Title - 56858259" [ref=e259] [cursor=pointer]
        - heading "Automation Video Title - 56858259" [level=4] [ref=e260] [cursor=pointer]
      - generic [ref=e261]:
        - generic [ref=e262]:
          - img [ref=e265]
          - img "Automation Video Title - 56788225" [ref=e274] [cursor=pointer]
        - heading "Automation Video Title - 56788225" [level=4] [ref=e275] [cursor=pointer]
      - generic [ref=e276]:
        - generic [ref=e277]:
          - img [ref=e280]
          - img "Automation Video Title - 15035427" [ref=e289] [cursor=pointer]
        - heading "Automation Video Title - 15035427" [level=4] [ref=e290] [cursor=pointer]
      - generic [ref=e291]:
        - img "This 3 Minute Motivational Video Will Change Yo" [ref=e299] [cursor=pointer]
        - heading "This 3 Minute Motivational Video Will Change Yo" [level=4] [ref=e300] [cursor=pointer]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { storagestate } from '../../utils/storagestate.js';
  3  | 
  4  | let contextwithstate;
  5  | let storageState;
  6  | let page;
  7  | 
  8  | test.beforeAll(async ({ browser }) => {
  9  |   test.setTimeout(100000);
  10 |   storageState = new storagestate(browser);
  11 |   contextwithstate = await storageState.setstoragestateforcontext('https://staginggs.vplayed.com', 'jackel1275@gmail.com');
  12 | });
  13 | 
  14 | test.beforeEach(async () => {
  15 |   page = await contextwithstate.newPage();
  16 | });
  17 | 
  18 | //user login
  19 | test('Login with OTP for customer', async () => {
  20 | await page.goto('https://staginggs.vplayed.com/category/movies');
  21 | await page.waitForTimeout(3000);
> 22 | expect(page.url()).toHaveURL('https://staginggs.vplayed.com/category/movies');
     |                    ^ TypeError: page.context is not a function
  23 | 
  24 | });
  25 | 
```