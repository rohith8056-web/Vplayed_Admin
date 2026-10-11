# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: customerlogin/userlogin.spec.js >> Login with OTP for customer
- Location: tests/customerlogin/userlogin.spec.js:18:1

# Error details

```
"beforeAll" hook timeout of 30000ms exceeded.
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
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
            - generic [ref=e97] [cursor=pointer]:
              - img [ref=e99]
              - generic [ref=e105]:
                - img "No contents available" [ref=e106]
                - heading "Get Updates" [level=3] [ref=e107]
                - paragraph [ref=e108]: Never miss a thing! Get Instant notifications from our exciting Channels
                - generic [ref=e109]:
                  - button "Later" [ref=e110]:
                    - generic [ref=e111]: Later
                  - button "Yes, Notify me" [ref=e112]:
                    - generic [ref=e113]: Yes, Notify me
            - generic [ref=e114] [cursor=pointer]:
              - generic [ref=e119]: R
              - img [ref=e120]
              - generic:
                - img
      - generic [ref=e124]:
        - generic [ref=e125]:
          - text: Vplayed uses cookies to ensure you get the best experience on our website.
          - link "COOKIES_POPUP.LEARN_MORE_ARIA" [ref=e126] [cursor=pointer]:
            - /url: /privacy-policy/web
            - text: Learn More
        - button "Got it" [ref=e127] [cursor=pointer]:
          - generic [ref=e128]: Got it
        - button "Accept cookies" [ref=e129] [cursor=pointer]:
          - img [ref=e130]
    - list [ref=e138]:
      - listitem [ref=e139] [cursor=pointer]:
        - link "Serie addd" [ref=e140]:
          - /url: javascript:void(0)
          - generic "Serie addd" [ref=e142]
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
  - generic [ref=e163]:
    - generic [ref=e164]:
      - img "notification icon" [ref=e166]
      - generic [ref=e167]: Subscribe to our notifications for the latest news and updates. You can disable anytime.
    - generic [ref=e169]:
      - button "Subscribe" [ref=e170] [cursor=pointer]
      - button "Later" [ref=e171] [cursor=pointer]
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
> 8  | test.beforeAll(async ({ browser }) => {
     |      ^ "beforeAll" hook timeout of 30000ms exceeded.
  9  |   storageState = new storagestate(browser);
  10 |   contextwithstate = await storageState.setstoragestateforcontext('https://staginggs.vplayed.com', 'rohith8056@gmail.com');
  11 | });
  12 | 
  13 | test.beforeEach(async () => {
  14 |   page = await contextwithstate.newPage();
  15 | });
  16 | 
  17 | //user login
  18 | test('Login with OTP for customer', async () => {
  19 | await page.goto('https://staginggs.vplayed.com/category/movies');
  20 | expect(page.url()).toContain('https://staginggs.vplayed.com/category/movies');
  21 | 
  22 | });
  23 | 
```