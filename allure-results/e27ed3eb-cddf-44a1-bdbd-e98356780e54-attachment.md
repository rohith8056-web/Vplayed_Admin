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
    - list [ref=e45]:
      - listitem [ref=e46]:
        - generic [ref=e47]:
          - heading "Channel Performance" [level=2] [ref=e48]
          - list [ref=e49]:
            - listitem [ref=e50]:
              - generic [ref=e51]:
                - generic [ref=e54]:
                  - paragraph [ref=e55]:
                    - img [ref=e57]
                  - heading [level=3]
                - generic [ref=e61]:
                  - paragraph [ref=e62]:
                    - img [ref=e64]
                  - heading [level=3]
                - generic [ref=e68]:
                  - paragraph [ref=e69]:
                    - img [ref=e71]
                  - heading [level=3]
                - generic [ref=e75]:
                  - paragraph [ref=e76]:
                    - img [ref=e78]
                  - heading [level=3]
          - generic [ref=e81]:
            - combobox "Last 7 days" [ref=e90] [cursor=pointer]:
              - generic [ref=e93]: Last 7 days
            - generic [ref=e97]:
              - generic [ref=e98]: "Currency:"
              - combobox "₹ INR" [ref=e104] [cursor=pointer]:
                - generic [ref=e107]: ₹ INR
          - list [ref=e110]:
            - listitem [ref=e111]:
              - generic [ref=e112]:
                - generic [ref=e113]:
                  - paragraph [ref=e114]: Pay Per Views
                  - heading "₹0" [level=2] [ref=e115]
                  - generic [ref=e116]: From
                  - generic [ref=e117]: 0% Overall days
                - generic [ref=e118]:
                  - paragraph [ref=e119]: Donations
                  - heading "₹0" [level=2] [ref=e120]
                  - generic [ref=e121]: From
                  - generic [ref=e122]: 0% Overall days
                - generic [ref=e123]:
                  - paragraph [ref=e124]: Earned Coins
                  - heading "0" [level=2] [ref=e125]:
                    - img [ref=e127]
                    - text: "0"
                  - generic [ref=e131]: From
                  - generic [ref=e132]: 0% Overall days
                - generic [ref=e133]:
                  - paragraph [ref=e134]: Bulk Purchase
                  - heading "₹0" [level=2] [ref=e135]
                  - generic [ref=e136]: From
                  - generic [ref=e137]: 0% Overall days
          - list [ref=e138]:
            - listitem [ref=e139]:
              - generic [ref=e140]: Channel Views
              - generic [ref=e142]: "%"
            - listitem [ref=e143]:
              - generic [ref=e144]: Total Watchtime
              - generic [ref=e146]: 0%
            - listitem [ref=e147]:
              - generic [ref=e148]: Average Watchtime
              - generic [ref=e150]: "%"
            - listitem [ref=e151]:
              - generic [ref=e152]: Total Amount
              - generic [ref=e153]:
                - generic [ref=e154]: ₹ 0
                - generic [ref=e155]: "%"
            - listitem [ref=e156]:
              - generic [ref=e157]: Channel Shares
              - generic [ref=e159]: 0%
        - generic [ref=e160]:
          - heading "Promo Performance" [level=2] [ref=e161]
          - generic [ref=e162]:
            - img "placeholder" [ref=e164]
            - heading "No data found" [level=4] [ref=e166]
        - generic [ref=e167]:
          - heading "Device Based Transaction" [level=4] [ref=e168]
          - combobox "Last 7 days" [ref=e178] [cursor=pointer]:
            - generic [ref=e181]: Last 7 days
      - listitem [ref=e184]:
        - generic [ref=e185]:
          - heading "Content Performance Metrics" [level=2] [ref=e186]:
            - text: Content Performance Metrics
            - img [ref=e188]
          - heading "Titles" [level=3] [ref=e191]
          - generic [ref=e192]:
            - combobox "Last 7 days" [ref=e201] [cursor=pointer]:
              - generic [ref=e204]: Last 7 days
            - generic [ref=e208]:
              - generic [ref=e209]: "Currency:"
              - combobox "₹ INR" [ref=e215] [cursor=pointer]:
                - generic [ref=e218]: ₹ INR
          - list:
            - listitem
          - list [ref=e222]:
            - listitem [ref=e223]:
              - generic [ref=e224]: Total Watchtime
            - listitem [ref=e225]:
              - generic [ref=e226]: Average Watchtime
            - listitem [ref=e227]:
              - generic [ref=e228]: Comments
            - listitem [ref=e229]:
              - generic [ref=e230]: Promos Played
            - listitem [ref=e231]:
              - generic [ref=e232]: Ratings
            - listitem [ref=e233]:
              - generic [ref=e234]: Shares
        - generic [ref=e235]:
          - heading "Total Transactions" [level=2] [ref=e236]
          - combobox "Last 7 days" [ref=e248] [cursor=pointer]:
            - generic [ref=e251]: Last 7 days
          - list [ref=e254]:
            - listitem [ref=e255]:
              - generic [ref=e256]: Transaction Status
              - generic [ref=e257]: Count
          - list [ref=e260]:
            - listitem [ref=e261]:
              - generic [ref=e262]: Successful Transactions
              - generic [ref=e263]: "0"
            - listitem [ref=e264]:
              - generic [ref=e265]: Failed Transactions
              - generic [ref=e266]: "0"
      - listitem [ref=e267]:
        - generic [ref=e268]:
          - heading "Top 3 Contents" [level=2] [ref=e270]:
            - text: Top 3 Contents
            - img [ref=e272]
          - generic [ref=e274]:
            - combobox "Last 7 days" [ref=e283] [cursor=pointer]:
              - generic [ref=e286]: Last 7 days
            - combobox "Plays" [ref=e296] [cursor=pointer]:
              - generic [ref=e299]: Plays
          - generic [ref=e302]:
            - img "placeholder" [ref=e304]
            - heading "No data found" [level=4] [ref=e306]
        - generic [ref=e307]:
          - heading "Top 3 Genre" [level=2] [ref=e308]
          - generic [ref=e309]:
            - img "placeholder" [ref=e311]
            - generic [ref=e312]:
              - heading "No Genres Created" [level=4] [ref=e313]
              - generic [ref=e314]: Create new genre and add videos to genre to track data
              - button "Create Genre" [ref=e315] [cursor=pointer]:
                - generic [ref=e316]: Create Genre
        - generic [ref=e317]:
          - heading "Customer Activities" [level=2] [ref=e319]
          - combobox "Last 7 days" [ref=e331] [cursor=pointer]:
            - generic [ref=e334]: Last 7 days
          - list [ref=e337]:
            - listitem [ref=e338]:
              - generic [ref=e339]: Promos Watched
              - generic [ref=e341]: "0"
            - listitem [ref=e342]:
              - generic [ref=e343]: Ratings
              - generic [ref=e345]: "0"
            - listitem [ref=e346]:
              - generic [ref=e347]: Video Shares
              - generic [ref=e349]: "0"
            - listitem [ref=e350]:
              - generic [ref=e351]: Comments
              - generic [ref=e353]: "0"
  - generic [ref=e354]:
    - button "Close" [ref=e355] [cursor=pointer]
    - alertdialog "An invalid response was received from the upstream server" [ref=e356]
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
  38 |     await expect(adManagementPage.adnameplaceholder).toBeVisible();
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