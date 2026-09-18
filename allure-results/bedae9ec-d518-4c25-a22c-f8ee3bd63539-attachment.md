# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: admanagement/admanagement.spec.js >> Functional Testing >> TC-32: when the user enter the adname,url,support platform and orientation click on save then add should be saved and success should be displayed
- Location: tests/admanagement/admanagement.spec.js:115:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('//div[@role=\'alertdialog\']')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('//div[@role=\'alertdialog\']')

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
  - textbox "Name of the Ad": Test1789628261304
  - heading "AD Url*" [level=4]
  - textbox "Enter Ad URL" [invalid]: https://admin-staginggs.vplayed.com/vplayedqa/super-admin/ad-management?tab=0
  - text: 77 / 1000 invalid url format
  - heading "Support Platform*" [level=4]
  - combobox "Both"
  - heading "Orientation*" [level=4]
  - combobox "Portrait"
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
        - row "1 QAExtAdDeleteSrcdabnpp Web https://gsvp-qa.s3.ap-south-1.amazonaws.com/vplayed-ads/1753689790968-advertisement.xml Web Landscape Active On Sep 17, 2026":
          - cell "1"
          - cell "QAExtAdDeleteSrcdabnpp":
            - heading "QAExtAdDeleteSrcdabnpp" [level=5]
          - cell "Web"
          - cell "https://gsvp-qa.s3.ap-south-1.amazonaws.com/vplayed-ads/1753689790968-advertisement.xml"
          - cell "Web"
          - cell "Landscape"
          - cell "Active On Sep 17, 2026"
          - cell
        - row "2 QAIntstdymcor Web https://qa-automation.vplayed.test/updated/6532854022 Web Landscape Active On Sep 16, 2026":
          - cell "2"
          - cell "QAIntstdymcor":
            - heading "QAIntstdymcor" [level=5]
          - cell "Web"
          - cell "https://qa-automation.vplayed.test/updated/6532854022"
          - cell "Web"
          - cell "Landscape"
          - cell "Active On Sep 16, 2026"
          - cell
        - row "3 QAVastmbibmr Web https://gsvp-qa.s3.ap-south-1.amazonaws.com/vplayed-ads/1753689790968-advertisement.xml Web Landscape Active On Sep 16, 2026":
          - cell "3"
          - cell "QAVastmbibmr":
            - heading "QAVastmbibmr" [level=5]
          - cell "Web"
          - cell "https://gsvp-qa.s3.ap-south-1.amazonaws.com/vplayed-ads/1753689790968-advertisement.xml"
          - cell "Web"
          - cell "Landscape"
          - cell "Active On Sep 16, 2026"
          - cell
        - row "4 QAExtAdDeleteSrcnwgrya Web https://gsvp-qa.s3.ap-south-1.amazonaws.com/vplayed-ads/1753689790968-advertisement.xml Web Landscape Active On Sep 10, 2026":
          - cell "4"
          - cell "QAExtAdDeleteSrcnwgrya":
            - heading "QAExtAdDeleteSrcnwgrya" [level=5]
          - cell "Web"
          - cell "https://gsvp-qa.s3.ap-south-1.amazonaws.com/vplayed-ads/1753689790968-advertisement.xml"
          - cell "Web"
          - cell "Landscape"
          - cell "Active On Sep 10, 2026"
          - cell
        - row "5 QAIntstwagxhl Web https://qa-automation.vplayed.test/updated/5491142270 Web Landscape Active On Sep 10, 2026":
          - cell "5"
          - cell "QAIntstwagxhl":
            - heading "QAIntstwagxhl" [level=5]
          - cell "Web"
          - cell "https://qa-automation.vplayed.test/updated/5491142270"
          - cell "Web"
          - cell "Landscape"
          - cell "Active On Sep 10, 2026"
          - cell
        - row "6 QAVastwynikq Web https://gsvp-qa.s3.ap-south-1.amazonaws.com/vplayed-ads/1753689790968-advertisement.xml Web Landscape Active On Sep 10, 2026":
          - cell "6"
          - cell "QAVastwynikq":
            - heading "QAVastwynikq" [level=5]
          - cell "Web"
          - cell "https://gsvp-qa.s3.ap-south-1.amazonaws.com/vplayed-ads/1753689790968-advertisement.xml"
          - cell "Web"
          - cell "Landscape"
          - cell "Active On Sep 10, 2026"
          - cell
        - row "7 QAExtAdDeleteSrcjczvrw Web https://gsvp-qa.s3.ap-south-1.amazonaws.com/vplayed-ads/1753689790968-advertisement.xml Web Landscape Active On Sep 9, 2026":
          - cell "7"
          - cell "QAExtAdDeleteSrcjczvrw":
            - heading "QAExtAdDeleteSrcjczvrw" [level=5]
          - cell "Web"
          - cell "https://gsvp-qa.s3.ap-south-1.amazonaws.com/vplayed-ads/1753689790968-advertisement.xml"
          - cell "Web"
          - cell "Landscape"
          - cell "Active On Sep 9, 2026"
          - cell
        - row "8 QAIntsticsigd Web https://qa-automation.vplayed.test/updated/5028891393 Web Landscape Active On Sep 9, 2026":
          - cell "8"
          - cell "QAIntsticsigd":
            - heading "QAIntsticsigd" [level=5]
          - cell "Web"
          - cell "https://qa-automation.vplayed.test/updated/5028891393"
          - cell "Web"
          - cell "Landscape"
          - cell "Active On Sep 9, 2026"
          - cell
        - row "9 QAVastgwgfhy Web https://gsvp-qa.s3.ap-south-1.amazonaws.com/vplayed-ads/1753689790968-advertisement.xml Web Landscape Active On Sep 9, 2026":
          - cell "9"
          - cell "QAVastgwgfhy":
            - heading "QAVastgwgfhy" [level=5]
          - cell "Web"
          - cell "https://gsvp-qa.s3.ap-south-1.amazonaws.com/vplayed-ads/1753689790968-advertisement.xml"
          - cell "Web"
          - cell "Landscape"
          - cell "Active On Sep 9, 2026"
          - cell
        - row "10 Test1987231788382619371 iOS https://admin-staginggs.vplayed.com/vplayedqa/super-admin/ad-management Mobile Landscape Active On Sep 3, 2026":
          - cell "10"
          - cell "Test1987231788382619371":
            - heading "Test1987231788382619371" [level=5]
          - cell "iOS"
          - cell "https://admin-staginggs.vplayed.com/vplayedqa/super-admin/ad-management"
          - cell "Mobile"
          - cell "Landscape"
          - cell "Active On Sep 3, 2026"
          - cell
- tabpanel "Internal Ad's"
```

# Test source

```ts
  29  |     //await page.waitForTimeout(5000);
  30  |     await adManagementPage.newadclick();
  31  |     //await page.waitForTimeout(5000);
  32  |     await expect(adManagementPage.createnewadsheading).toBeVisible();
  33  |     await expect(adManagementPage.createnewadsheading).toHaveText('Create New Ads');
  34  |     await expect(adManagementPage.creatednewadssubtext).toBeVisible();
  35  |     await expect(adManagementPage.creatednewadssubtext).toHaveText('Add multimedia VAST ads source here, The added ads will be playing as preroll, midroll, post roll');
  36  |     await expect(adManagementPage.createnewadsubheading).toBeVisible();
  37  |     await expect(adManagementPage.createnewadsubheading).toHaveText('Create Ad');
  38  |     await expect(adManagementPage.adnameheading).toBeVisible();
  39  |     await expect(adManagementPage.adnameheading).toHaveText('AD Name*');
  40  |     await adManagementPage.adnameplaceholderclick();
  41  |     await expect(adManagementPage.adnameplaceholder).toBeVisible();
  42  |     await expect(adManagementPage.adnameplaceholder).toHaveAttribute('placeholder', 'Name of the Ad');
  43  |     await expect(adManagementPage.adurlheading).toBeVisible();
  44  |     await expect(adManagementPage.adurlheading).toHaveText('AD Url*');
  45  |     await adManagementPage.adurlplaceholderclick();
  46  |     await expect(adManagementPage.adurlplaceholder).toBeVisible();
  47  |     await expect(adManagementPage.adurlplaceholder).toHaveAttribute('placeholder', 'Enter Ad URL');
  48  |     await expect(adManagementPage.supportplatformheading).toBeVisible();
  49  |     await expect(adManagementPage.supportplatformheading).toHaveText('Support Platform*');
  50  |     await expect(adManagementPage.adsupportplatformplaceholder).toBeVisible();
  51  |     await expect(adManagementPage.adsupportplatformplaceholder).toHaveText('Support Platform');
  52  |     await expect(adManagementPage.orientationheading).toBeVisible();
  53  |     await expect(adManagementPage.orientationheading).toHaveText('Orientation*');
  54  |     await expect(adManagementPage.adorientationplaceholder).toBeVisible();
  55  |     await expect(adManagementPage.adorientationplaceholder).toHaveText('Orientation Type');
  56  |   });
  57  | 
  58  |   test("TC-28: Verify that error validatios is displaying when the user tap on the save button in create new ad page without entering the details", async ({ page, admanagementdatafixture }) => {
  59  | 
  60  |    await adManagementPage.addmanagementbtn.click();
  61  |    await adManagementPage.newadclick();
  62  |    await adManagementPage.savebtnclick();
  63  |    await expect(adManagementPage.adnameerror).toBeVisible();
  64  |    await expect(adManagementPage.adnameerror).toHaveText(admanagementdatafixture[1].assert1);
  65  |    await expect(adManagementPage.adurlerror).toBeVisible();
  66  |    await expect(adManagementPage.adurlerror).toHaveText(admanagementdatafixture[1].assert2);
  67  |    await expect(adManagementPage.supportplatformerror).toBeVisible();
  68  |    await expect(adManagementPage.supportplatformerror).toHaveText(admanagementdatafixture[1].assert3);
  69  |    await expect(adManagementPage.orientationerror).toBeVisible();
  70  |    await expect(adManagementPage.orientationerror).toHaveText(admanagementdatafixture[1].assert4);
  71  |   });
  72  | 
  73  |   test("TC-29: when the user enter the adname and click on save the error should show in remaining 3 feilds", async ({ page, admanagementdatafixture }) => {
  74  | 
  75  |    await adManagementPage.addmanagementbtn.click();
  76  |    await adManagementPage.newadclick();
  77  |    await adManagementPage.adnamefill(admanagementdatafixture[2].adname +Date.now());
  78  |    await adManagementPage.savebtnclick();
  79  |    await expect(adManagementPage.adurlerror).toBeVisible();
  80  |    await expect(adManagementPage.adurlerror).toHaveText(admanagementdatafixture[2].assert2);
  81  |    await expect(adManagementPage.supportplatformerror).toBeVisible();
  82  |    await expect(adManagementPage.supportplatformerror).toHaveText(admanagementdatafixture[2].assert3);
  83  |    await expect(adManagementPage.orientationerror).toBeVisible();
  84  |    await expect(adManagementPage.orientationerror).toHaveText(admanagementdatafixture[2].assert4);
  85  |    
  86  |   });
  87  | 
  88  |   test("TC-30: when the user enter the adname,url and click on save the error should show in remaining 2 feilds", async ({ page, admanagementdatafixture }) => {
  89  | 
  90  |    await adManagementPage.addmanagementbtn.click();
  91  |    await adManagementPage.newadclick();
  92  |    await adManagementPage.adnamefill(admanagementdatafixture[3].adname +Date.now());
  93  |    await adManagementPage.adurlfill(admanagementdatafixture[3].adurl);
  94  |    await adManagementPage.savebtnclick();
  95  |    await expect(adManagementPage.supportplatformerror).toBeVisible();
  96  |    await expect(adManagementPage.supportplatformerror).toHaveText(admanagementdatafixture[3].assert3);
  97  |    await expect(adManagementPage.orientationerror).toBeVisible();
  98  |    await expect(adManagementPage.orientationerror).toHaveText(admanagementdatafixture[3].assert4);
  99  |    
  100 |   });
  101 | 
  102 |   test("TC-31: when the user enter the adname,url,support platform and click on save the error should show in remaining 1 feilds", async ({ page, admanagementdatafixture }) => {
  103 | 
  104 |    await adManagementPage.addmanagementbtn.click();
  105 |    await adManagementPage.newadclick();
  106 |    await adManagementPage.adnamefill(admanagementdatafixture[4].adname +Date.now());
  107 |    await adManagementPage.adurlfill(admanagementdatafixture[4].adurl);
  108 |    await adManagementPage.textlselectionlist(adManagementPage.adsupportplatformplaceholder, "//span[@class='mat-option-text']",adManagementPage.supportplatformlist, admanagementdatafixture[4].supportplatform);
  109 |    await adManagementPage.savebtnclick();
  110 |    await expect(adManagementPage.orientationerror).toBeVisible();
  111 |    await expect(adManagementPage.orientationerror).toHaveText(admanagementdatafixture[4].assert4);
  112 |    
  113 |   });
  114 | 
  115 |   test("TC-32: when the user enter the adname,url,support platform and orientation click on save then add should be saved and success should be displayed", async ({ page, admanagementdatafixture }) => {
  116 | 
  117 |    await adManagementPage.addmanagementbtn.click();
  118 |    await adManagementPage.newadclick();
  119 |    const adName = admanagementdatafixture[5].adname + Date.now();
  120 |    await adManagementPage.adnamefill(adName);
  121 |    const adUrl = admanagementdatafixture[5].adurl;
  122 |    await adManagementPage.adurlfill(adUrl);
  123 |    const supportPlatform = admanagementdatafixture[5].supportplatform;
  124 |    await adManagementPage.textlselectionlist(adManagementPage.adsupportplatformplaceholder, "//span[@class='mat-option-text']",adManagementPage.supportplatformlist, supportPlatform);
  125 |    const Orientation = admanagementdatafixture[5].orientation;
  126 |    await adManagementPage.textlselectionlist(adManagementPage.adorientationplaceholder, "//span[@class='mat-option-text']",adManagementPage.orientationlist, Orientation);
  127 |    await adManagementPage.savebtnclick();
  128 |    await page.waitForTimeout(3000);
> 129 |    await expect(adManagementPage.adsuccessmsg).toBeVisible();
      |                                                ^ Error: expect(locator).toBeVisible() failed
  130 |    await expect(adManagementPage.adsuccessmsg).toHaveText(admanagementdatafixture[5].assert1);
  131 |    await expect(adManagementPage.createdadname).toBeVisible();
  132 |    await expect(adManagementPage.createdadname).toHaveText(`${adName}`);
  133 |    await expect(await adManagementPage.createdAdUrl(adName)).toHaveText(`${adUrl}`);
  134 |    await expect(await adManagementPage.createdSupportPlatform(adName)).toHaveText(`${supportPlatform}`);
  135 |    await expect(await adManagementPage.createdOrientation(adName)).toHaveText(`${Orientation}`);
  136 |   await expect(await adManagementPage.createdAdstatus(adName)).toHaveText(admanagementdatafixture[5].assert2);
  137 |   // Verify the created ad date contains today's day and year (format-agnostic)
  138 |   const createdDateLocator = await adManagementPage.createdAddate(adName);
  139 |   const createdDateText = await createdDateLocator.innerText();
  140 |   //const day = getDayString();
  141 |   //const year = getYearString();
  142 |   const month = getMonthShort();
  143 |   const { day, year } = getDayAndYear();
  144 |   expect(createdDateText).toContain(day);
  145 |   expect(createdDateText).toContain(year);
  146 |   expect(createdDateText).toContain(month);
  147 |   expect(createdDateText).toContain(admanagementdatafixture[5].assert3);
  148 |   });
  149 | 
  150 |   test("TC-33: verify when the ad status is active and deactive is showing correctly", async ({ page, admanagementdatafixture }) => {
  151 | 
  152 |    await adManagementPage.addmanagementbtn.click();
  153 |    //await adManagementPage.newadclick();
  154 |   const adName = await adManagementPage.createdadname.innerText();
  155 |   const statusLocator = await adManagementPage.createdAdstatus(adName); 
  156 |   const statusText = await statusLocator.innerText();
  157 |   //const statusText = await adManagementPage.createdAdstatus(adName).innerText(); we can not use this if we used async function for createdAdstatus because it will return a promise and we can not use innerText on promise so we need to use await for createdAdstatus and then use innerText on that locator so we used like aboce if we didnt used async function for createdAdstatus then we can use like this
  158 | 
  159 |   if (statusText === 'Active') {
  160 |    await adManagementPage.adstatusactivatedeactivate(adName);
  161 |    await adManagementPage.adsstatuspopupyesbtn.click();
  162 |    await expect(await adManagementPage.createdAdstatus(adName)).toHaveText('Inactive');
  163 |   } else {
  164 |    await adManagementPage.adstatusactivatedeactivate(adName);
  165 |    await adManagementPage.adsstatuspopupyesbtn.click();
  166 |    await expect(await adManagementPage.createdAdstatus(adName)).toHaveText('Active');
  167 |   }
  168 | 
  169 |   });
  170 | 
  171 |   test("TC-34: verify ad management heading is displaying at correct design", async ({ page, admanagementdatafixture }) => {
  172 | 
  173 |    await adManagementPage.addmanagementbtn.click();
  174 |    await expect(adManagementPage.heading).toBeVisible();
  175 |    const Heading = adManagementPage.heading; // or page.locator('h1')
  176 |    const box = await Heading.boundingBox();
  177 |    console.log('Heading bounding box:', box);
  178 |    await expect(box.x).toBeCloseTo(252.546875, 5); //here where the 1 is the tolerance value, you can adjust it as needed
  179 |    await expect(box.y).toBeCloseTo(95.1953125, 1);
  180 |    await expect(box.width).toBeCloseTo(160.125, 1);
  181 |    await expect(box.height).toBeCloseTo(24.1484375, 1);
  182 |    await expect(adManagementPage.heading).toHaveText(admanagementdatafixture[0].assert1);
  183 |    await expect(adManagementPage.heading).toHaveCSS('font-family', '"IBM Plex Sans", sans-serif');
  184 |    await expect(adManagementPage.heading).toHaveCSS('font-size', '21px');
  185 |    await expect(adManagementPage.heading).toHaveCSS('font-weight', '700');
  186 |    await expect(adManagementPage.heading).toHaveCSS('line-height', '24.15px'); //25.875px actually but its coming 24 so i added it to make test pass
  187 |    await expect(adManagementPage.heading).toHaveCSS('color', 'rgb(17, 18, 23)');
  188 |    await expect(adManagementPage.heading).toHaveCSS('align-items', 'center');
  189 | 
  190 |    });
  191 | 
  192 |   
  193 | });
```