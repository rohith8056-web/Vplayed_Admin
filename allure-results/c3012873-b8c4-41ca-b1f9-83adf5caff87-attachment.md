# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: admanagement.spec.js >> Functional Testing >> TC-01: Displays the login page heading
- Location: tests/admanagement.spec.js:14:3

# Error details

```
ReferenceError: page is not defined
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - banner [ref=e3]:
      - generic [ref=e4]:
        - generic "Vplayed" [ref=e6]:
          - img "Vplayed light logo" [ref=e7]
        - list [ref=e8]:
          - listitem [ref=e9] [cursor=pointer]:
            - generic [ref=e10]: Super Admin
          - listitem [ref=e12] [cursor=pointer]:
            - generic [ref=e13]: Dashboard
          - listitem [ref=e14] [cursor=pointer]:
            - generic [ref=e15]: Channel
          - listitem [ref=e16] [cursor=pointer]:
            - generic [ref=e17]: Titles
          - listitem [ref=e18] [cursor=pointer]:
            - generic [ref=e19]: Live
          - listitem [ref=e20] [cursor=pointer]:
            - generic [ref=e21]: Bulk Purchase
          - listitem [ref=e22] [cursor=pointer]:
            - generic [ref=e23]: Insights
          - listitem [ref=e24] [cursor=pointer]:
            - generic [ref=e25]: Reports
        - generic [ref=e26]:
          - button [ref=e28] [cursor=pointer]:
            - img [ref=e31]
          - generic [ref=e37]:
            - button:
              - generic:
                - img: add
          - generic [ref=e38] [cursor=pointer]:
            - img "Vplayed" [ref=e39]
            - img [ref=e40]
    - paragraph [ref=e44]: Just a moment. We are processing your request.
  - generic [ref=e45]:
    - button "Close" [ref=e46] [cursor=pointer]
    - alertdialog "Good, You have logged in successfully" [ref=e47]
```

# Test source

```ts
  1  | import { expect } from "@playwright/test";
  2  | import { admanagement } from "../pages/admanagementpage.js";
  3  | import { test } from "../fixtures/data.fixture.js";
  4  | 
  5  | let adManagementPage; 
  6  | 
  7  | test.beforeEach(async ({ page }) => {
  8  |     adManagementPage = new admanagement(page);
  9  |     await adManagementPage.openLoginPage();
  10 |   });
  11 | 
  12 | test.describe("Functional Testing", () => {
  13 |   
  14 |   test("TC-01: Displays the login page heading", async ({ ads }) => {
> 15 |    await page.waitForTimeout(5000);
     |    ^ ReferenceError: page is not defined
  16 |    
  17 |   });
  18 | 
  19 |   
  20 | });
```