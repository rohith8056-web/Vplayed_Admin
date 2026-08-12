# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: admanagement.spec.js >> Functional Testing >> TC-27: Verify when user click on newadbtn then create new add page is displayed
- Location: tests/admanagement.spec.js:25:3

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('//a[normalize-space()=\'Ad Management\']')
    - locator resolved to <a routerlinkactive="active" _ngcontent-serverapp-c278="" href="/vplayedqa/super-admin/ad-management">…</a>
  - attempting click action
    - waiting for element to be visible, enabled and stable
  - element was detached from the DOM, retrying

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - banner [ref=e3]:
    - generic [ref=e6]: "Current channel:"
    - generic [ref=e7]:
      - generic "Vplayed" [ref=e9]:
        - img "Vplayed light logo" [ref=e10]
      - list [ref=e11]:
        - listitem [ref=e12] [cursor=pointer]:
          - generic [ref=e13]: Dashboard
        - listitem [ref=e14] [cursor=pointer]:
          - generic [ref=e15]: Channel
        - listitem:
          - generic: Titles
        - listitem:
          - generic: Live
        - listitem:
          - generic: Bulk Purchase
        - listitem:
          - generic: Insights
        - listitem:
          - generic: Reports
      - generic [ref=e16]:
        - button [ref=e18] [cursor=pointer]:
          - img [ref=e21]
        - generic [ref=e27]:
          - button:
            - generic:
              - img: add
        - generic [ref=e28] [cursor=pointer]:
          - img "Vplayed" [ref=e29]
          - img [ref=e30]
  - paragraph [ref=e34]: Just a moment. We are processing your request.
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
  10 |     await adManagementPage.login("admingsvplayed@gmail.com", "Welcome@123");
  11 |     await adManagementPage.superadminclick();
  12 |   });
  13 | 
  14 | test.describe("Functional Testing", () => {
  15 |   
  16 | test("TC-26: Verify that admanagement page is displayed", async ({ page }) => {
  17 | 
  18 |     await adManagementPage.addmanagementbtn.click();
  19 |     //await page.waitForTimeout(5000);
  20 |     await expect(adManagementPage.page).toHaveURL("https://admin-staginggs.vplayed.com/vplayedqa/super-admin/ad-management");
  21 |     await expect(adManagementPage.heading).toBeVisible();
  22 |     await expect(adManagementPage.heading).toHaveText('Ad Management');
  23 |   });
  24 | 
  25 |   test("TC-27: Verify when user click on newadbtn then create new add page is displayed", async ({ page }) => {
  26 | 
> 27 |     await adManagementPage.addmanagementbtn.click();
     |                                             ^ Error: locator.click: Test timeout of 30000ms exceeded.
  28 |     //await page.waitForTimeout(5000);
  29 |     await adManagementPage.newadclick();
  30 |     await expect(adManagementPage.createnewadsheading).toBeVisible();
  31 |     await expect(adManagementPage.createnewadsheading).toHaveText('Create New Ads');
  32 |     await expect(adManagementPage.creatednewadssubtext).toBeVisible();
  33 |     await expect(adManagementPage.creatednewadssubtext).toHaveText('Add multimedia VAST ads source here, The added ads will be playing as preroll, midroll, post roll');
  34 |     await expect(adManagementPage.createnewadsubheading).toBeVisible();
  35 |     await expect(adManagementPage.createnewadsubheading).toHaveText('Create Ad');
  36 |     await expect(adManagementPage.adnameheading).toBeVisible();
  37 |     await expect(adManagementPage.adnameheading).toHaveText('AD Name*');
  38 |     //await expect(adManagementPage.adnameplaceholder).toBeVisible();
  39 |     //await expect(adManagementPage.adnameplaceholder).toHaveText('Name of the Ad');
  40 |     await expect(adManagementPage.adurlheading).toBeVisible();
  41 |     await expect(adManagementPage.adurlheading).toHaveText('AD Url*');
  42 |     await expect(adManagementPage.adurlplaceholder).toBeVisible();
  43 |     //await expect(adManagementPage.adurlplaceholder).toHaveText('Enter Ad URL');
  44 |     await expect(adManagementPage.supportplatformheading).toBeVisible();
  45 |     await expect(adManagementPage.supportplatformheading).toHaveText('Support Platform*');
  46 |     await expect(adManagementPage.adsupportplatformplaceholder).toBeVisible();
  47 |     await expect(adManagementPage.adsupportplatformplaceholder).toHaveText('Support Platform');
  48 |     await expect(adManagementPage.orientationheading).toBeVisible();
  49 |     await expect(adManagementPage.orientationheading).toHaveText('Orientation*');
  50 |     await expect(adManagementPage.adorientationplaceholder).toBeVisible();
  51 |     await expect(adManagementPage.adorientationplaceholder).toHaveText('Orientation');
  52 |   });
  53 | 
  54 | 
  55 | 
  56 |   
  57 |   
  58 | });
```