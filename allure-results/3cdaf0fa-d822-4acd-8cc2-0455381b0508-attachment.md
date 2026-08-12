# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: admanagement.spec.js >> Functional Testing >> TC-27: Verify when user click on newadbtn then create new add page is displayed
- Location: tests/admanagement.spec.js:25:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('//input[@id=\'mat-input-20\']')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('//input[@id=\'mat-input-20\']')

```

```yaml
- banner:
  - img "Vplayed light logo"
  - list:
    - listitem: Super Admin
    - listitem: Dashboard
    - listitem: Channel
    - listitem: Titles
    - listitem: Live
    - listitem: Bulk Purchase
    - listitem: Insights
    - listitem: Reports
  - button:
    - img
  - button
  - img "Vplayed"
  - img
- region "scrollable content":
  - list:
    - listitem:
      - link "Channels":
        - /url: /vplayedqa/super-admin/studio-management
        - img
        - text: Channels
    - listitem:
      - link "Fast Channel":
        - /url: /vplayedqa/super-admin/fast-channel
        - img
        - text: Fast Channel
    - listitem:
      - link "Analytics":
        - /url: /vplayedqa/super-admin/analytics-management
        - img
        - text: Analytics
    - listitem:
      - link "Customers":
        - /url: /vplayedqa/super-admin/customer-management
        - img
        - text: Customers
    - listitem:
      - link "Titles":
        - /url: /vplayedqa/super-admin/title-management
        - img
        - text: Titles
    - listitem:
      - img
      - text: Transactions
      - img
    - listitem:
      - link "Subscription":
        - /url: /vplayedqa/super-admin/plan-management
        - img
        - text: Subscription
    - listitem:
      - link "Coins":
        - /url: /vplayedqa/super-admin/topup-management
        - img
        - text: Coins
    - listitem:
      - link "Rewards Management":
        - /url: /vplayedqa/super-admin/rewards-management
        - img
        - text: Rewards Management
    - listitem:
      - link "Banners":
        - /url: /vplayedqa/super-admin/banner-management
        - img
        - text: Banners
    - listitem:
      - link "Row management":
        - /url: /vplayedqa/super-admin/row-management
        - img
        - text: Row management
    - listitem:
      - link "Ad Management":
        - /url: /vplayedqa/super-admin/ad-management
        - img
        - text: Ad Management
    - listitem:
      - link "Coupon Management":
        - /url: /vplayedqa/super-admin/coupon-management
        - img
        - text: Coupon Management
    - listitem:
      - link "Language Management":
        - /url: /vplayedqa/super-admin/language-management
        - img
        - text: Language Management
    - listitem:
      - link "Genre Management":
        - /url: /vplayedqa/super-admin/genre-management
        - img
        - text: Genre Management
    - listitem:
      - img
      - text: Teams
      - img
    - listitem:
      - link "Logo Management":
        - /url: /vplayedqa/super-admin/logo-management
        - img
        - text: Logo Management
    - listitem:
      - img
      - text: Cms
      - img
    - listitem:
      - link "Customize Platform":
        - /url: /vplayedqa/super-admin/custom-platform
        - img
        - text: Customize Platform
- heading "Ad Management" [level=4]
- text: Status
- combobox "All"
- img
- textbox "Discover by ad name"
- text: Discover by ad name
- button "New Ad"
- button "Ad Configuration"
- heading "Create New Ads" [level=3]
- text: Add multimedia VAST ads source here, The added ads will be playing as preroll, midroll, post roll
- region "scrollable content":
  - heading "Create Ad" [level=4]
  - heading "AD Name*" [level=4]
  - textbox "Name of the Ad"
  - heading "AD Url*" [level=4]
  - textbox "Enter Ad URL"
  - heading "Support Platform*" [level=4]
  - combobox "Support Platform"
  - heading "Orientation*" [level=4]
  - combobox "Orientation Type"
  - button "Cancel"
  - button "Save"
- tablist:
  - tab "External Ad's" [selected]
  - tab "Internal Ad's"
- tabpanel "External Ad's":
  - region "scrollable content":
    - table:
      - rowgroup:
        - row "# AD Name Domain Type AD Url Support Platform Orientation Type Status Action":
          - columnheader "#"
          - columnheader "AD Name":
            - button "AD Name"
          - columnheader "Domain Type"
          - columnheader "AD Url"
          - columnheader "Support Platform"
          - columnheader "Orientation Type"
          - columnheader "Status"
          - columnheader "Action"
      - rowgroup:
        - row "1 Stage New Web https://gsvp-qa.s3.ap-south-1.amazonaws.com/vplayed-ads/1784450007607-advertisement.xml Both Landscape Active On Jul 21, 2026":
          - cell "1"
          - cell "Stage New":
            - heading "Stage New" [level=5]
          - cell "Web"
          - cell "https://gsvp-qa.s3.ap-south-1.amazonaws.com/vplayed-ads/1784450007607-advertisement.xml"
          - cell "Both"
          - cell "Landscape"
          - cell "Active On Jul 21, 2026"
          - cell
        - row "2 adsjihfiruhfiuhfiu Web hrifhirhfiruhfirhjkrhk Both Landscape Inactive":
          - cell "2"
          - cell "adsjihfiruhfiuhfiu":
            - heading "adsjihfiruhfiuhfiu" [level=5]
          - cell "Web"
          - cell "hrifhirhfiruhfirhjkrhk"
          - cell "Both"
          - cell "Landscape"
          - cell "Inactive"
          - cell
        - row "3 The new ad Web sdfsdfsdfsdf Both Landscape Inactive":
          - cell "3"
          - cell "The new ad":
            - heading "The new ad" [level=5]
          - cell "Web"
          - cell "sdfsdfsdfsdf"
          - cell "Both"
          - cell "Landscape"
          - cell "Inactive"
          - cell
        - row "4 Chocolate bar Web https://pubads.g.doubleclick.net/gampad/ads?iu=/22633693712/annathe&description_url=https%3A%2F%2Fvplayed.com&tfcd=0&npa=0&sz=400x300&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=&vad_type=linear Both Landscape Inactive":
          - cell "4"
          - cell "Chocolate bar":
            - heading "Chocolate bar" [level=5]
          - cell "Web"
          - cell "https://pubads.g.doubleclick.net/gampad/ads?iu=/22633693712/annathe&description_url=https%3A%2F%2Fvplayed.com&tfcd=0&npa=0&sz=400x300&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=&vad_type=linear"
          - cell "Both"
          - cell "Landscape"
          - cell "Inactive"
          - cell
        - row "5 Disney Web https://pubads.g.doubleclick.net/gampad/ads?iu=/22633693712/annathe&description_url=https%3A%2F%2Fvplayed.com&tfcd=0&npa=0&sz=400x300&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=&vad_type=linear Both Landscape Active On Jul 16, 2026":
          - cell "5"
          - cell "Disney":
            - heading "Disney" [level=5]
          - cell "Web"
          - cell "https://pubads.g.doubleclick.net/gampad/ads?iu=/22633693712/annathe&description_url=https%3A%2F%2Fvplayed.com&tfcd=0&npa=0&sz=400x300&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=&vad_type=linear"
          - cell "Both"
          - cell "Landscape"
          - cell "Active On Jul 16, 2026"
          - cell
- tabpanel "Internal Ad's"
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
  27 |     await adManagementPage.addmanagementbtn.click();
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
> 38 |     await expect(adManagementPage.adnameplaceholder).toBeVisible();
     |                                                      ^ Error: expect(locator).toBeVisible() failed
  39 |     await expect(adManagementPage.adnameplaceholder).toHaveText('Name of the Ad');
  40 |     await expect(adManagementPage.adurlheading).toBeVisible();
  41 |     await expect(adManagementPage.adurlheading).toHaveText('AD Url*');
  42 |     await expect(adManagementPage.adurlplaceholder).toBeVisible();
  43 |     await expect(adManagementPage.adurlplaceholder).toHaveText('Enter Ad URL');
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