# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: admanagement/admanagement.spec.js >> Functional Testing >> TC-34: verify ad management heading is displaying at correct design
- Location: tests/admanagement/admanagement.spec.js:171:3

# Error details

```
Error: toHaveCSS can be only used with Locator object, was called with 255.203125
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
    - generic [ref=e45]:
      - region "scrollable content" [ref=e51]:
        - list [ref=e53]:
          - listitem [ref=e54]:
            - link "Channels" [ref=e55] [cursor=pointer]:
              - /url: /vplayedqa/super-admin/studio-management
              - img [ref=e57]
              - text: Channels
          - listitem [ref=e60]:
            - link "Fast Channel" [ref=e61] [cursor=pointer]:
              - /url: /vplayedqa/super-admin/fast-channel
              - img [ref=e63]
              - text: Fast Channel
          - listitem [ref=e65]:
            - link "Analytics" [ref=e66] [cursor=pointer]:
              - /url: /vplayedqa/super-admin/analytics-management
              - img [ref=e68]
              - text: Analytics
          - listitem [ref=e73]:
            - link "Customers" [ref=e74] [cursor=pointer]:
              - /url: /vplayedqa/super-admin/customer-management
              - img [ref=e76]
              - text: Customers
          - listitem [ref=e79]:
            - link "Titles" [ref=e80] [cursor=pointer]:
              - /url: /vplayedqa/super-admin/title-management
              - img [ref=e82]
              - text: Titles
          - listitem [ref=e85]:
            - generic [ref=e86]:
              - img [ref=e88]
              - text: Transactions
              - img [ref=e91]
          - listitem [ref=e93]:
            - link "Subscription" [ref=e94] [cursor=pointer]:
              - /url: /vplayedqa/super-admin/plan-management
              - img [ref=e96]
              - text: Subscription
          - listitem [ref=e102]:
            - link "Coins" [ref=e103] [cursor=pointer]:
              - /url: /vplayedqa/super-admin/topup-management
              - img [ref=e105]
              - text: Coins
          - listitem [ref=e111]:
            - link "Rewards Management" [ref=e112] [cursor=pointer]:
              - /url: /vplayedqa/super-admin/rewards-management
              - img [ref=e114]
              - text: Rewards Management
          - listitem [ref=e117]:
            - link "Banners" [ref=e118] [cursor=pointer]:
              - /url: /vplayedqa/super-admin/banner-management
              - img [ref=e120]
              - text: Banners
          - listitem [ref=e123]:
            - link "Row management" [ref=e124] [cursor=pointer]:
              - /url: /vplayedqa/super-admin/row-management
              - img [ref=e126]
              - text: Row management
          - listitem [ref=e128]:
            - link "Ad Management" [ref=e129] [cursor=pointer]:
              - /url: /vplayedqa/super-admin/ad-management
              - img [ref=e131]
              - text: Ad Management
          - listitem [ref=e134]:
            - link "Coupon Management" [ref=e135] [cursor=pointer]:
              - /url: /vplayedqa/super-admin/coupon-management
              - img [ref=e137]
              - text: Coupon Management
          - listitem [ref=e139]:
            - link "Language Management" [ref=e140] [cursor=pointer]:
              - /url: /vplayedqa/super-admin/language-management
              - img [ref=e142]
              - text: Language Management
          - listitem [ref=e146]:
            - link "Genre Management" [ref=e147] [cursor=pointer]:
              - /url: /vplayedqa/super-admin/genre-management
              - img [ref=e149]
              - text: Genre Management
          - listitem [ref=e152]:
            - generic [ref=e153]:
              - img [ref=e155]
              - text: Teams
              - img [ref=e166]
          - listitem [ref=e168]:
            - link "Logo Management" [ref=e169] [cursor=pointer]:
              - /url: /vplayedqa/super-admin/logo-management
              - img [ref=e171]
              - text: Logo Management
          - listitem [ref=e173] [cursor=pointer]:
            - generic [ref=e174]:
              - img [ref=e176]
              - text: Cms
              - img [ref=e178]
          - listitem [ref=e180]:
            - link "Customize Platform" [ref=e181] [cursor=pointer]:
              - /url: /vplayedqa/super-admin/custom-platform
              - img [ref=e183]
              - text: Customize Platform
      - generic [ref=e193]:
        - generic [ref=e195]:
          - heading "Ad Management" [level=4] [ref=e197]
          - generic [ref=e198]:
            - generic [ref=e199]:
              - text: Status
              - combobox "All" [ref=e204] [cursor=pointer]:
                - generic [ref=e207]: All
            - generic [ref=e215]:
              - img [ref=e217]
              - textbox "Discover by ad name" [ref=e219]
              - generic:
                - generic: Discover by ad name
            - button "New Ad" [ref=e220] [cursor=pointer]:
              - generic [ref=e221]:
                - img [ref=e222]: add
                - text: New Ad
            - button "Ad Configuration" [ref=e223] [cursor=pointer]:
              - generic [ref=e224]:
                - img [ref=e225]: settings
                - text: Ad Configuration
        - generic [ref=e226]:
          - tablist [ref=e229]:
            - generic [ref=e230]:
              - tab "External Ad's" [selected] [ref=e231] [cursor=pointer]:
                - generic [ref=e234]: External Ad's
              - tab "Internal Ad's" [ref=e235] [cursor=pointer]:
                - generic [ref=e238]: Internal Ad's
          - generic [ref=e239]:
            - tabpanel "External Ad's" [ref=e240]:
              - region "scrollable content" [ref=e248]:
                - table [ref=e250]:
                  - rowgroup [ref=e251]:
                    - row "# AD Name Domain Type AD Url Support Platform Orientation Type Status Action" [ref=e252]:
                      - columnheader "#" [ref=e253]:
                        - generic [ref=e254]: "#"
                      - columnheader "AD Name" [ref=e255]:
                        - button "AD Name" [ref=e256] [cursor=pointer]:
                          - generic [ref=e259]: AD Name
                      - columnheader "Domain Type" [ref=e266]:
                        - generic [ref=e268]: Domain Type
                      - columnheader "AD Url" [ref=e269]:
                        - generic [ref=e271]: AD Url
                      - columnheader "Support Platform" [ref=e272]:
                        - generic [ref=e274]: Support Platform
                      - columnheader "Orientation Type" [ref=e275]:
                        - generic [ref=e277]: Orientation Type
                      - columnheader "Status" [ref=e278]:
                        - generic [ref=e280]: Status
                      - columnheader "Action" [ref=e281]:
                        - generic [ref=e282]: Action
                  - rowgroup [ref=e283]:
                    - row [ref=e284]:
                      - cell [ref=e285]
                      - cell [ref=e289]
                      - cell [ref=e293]
                      - cell [ref=e297]
                      - cell [ref=e301]
                      - cell [ref=e305]
                      - cell [ref=e309]
                      - cell [ref=e313]
                    - row [ref=e317]:
                      - cell [ref=e318]
                      - cell [ref=e322]
                      - cell [ref=e326]
                      - cell [ref=e330]
                      - cell [ref=e334]
                      - cell [ref=e338]
                      - cell [ref=e342]
                      - cell [ref=e346]
                    - row [ref=e350]:
                      - cell [ref=e351]
                      - cell [ref=e355]
                      - cell [ref=e359]
                      - cell [ref=e363]
                      - cell [ref=e367]
                      - cell [ref=e371]
                      - cell [ref=e375]
                      - cell [ref=e379]
                    - row [ref=e383]:
                      - cell [ref=e384]
                      - cell [ref=e388]
                      - cell [ref=e392]
                      - cell [ref=e396]
                      - cell [ref=e400]
                      - cell [ref=e404]
                      - cell [ref=e408]
                      - cell [ref=e412]
                    - row [ref=e416]:
                      - cell [ref=e417]
                      - cell [ref=e421]
                      - cell [ref=e425]
                      - cell [ref=e429]
                      - cell [ref=e433]
                      - cell [ref=e437]
                      - cell [ref=e441]
                      - cell [ref=e445]
                    - row [ref=e449]:
                      - cell [ref=e450]
                      - cell [ref=e454]
                      - cell [ref=e458]
                      - cell [ref=e462]
                      - cell [ref=e466]
                      - cell [ref=e470]
                      - cell [ref=e474]
                      - cell [ref=e478]
                    - row [ref=e482]:
                      - cell [ref=e483]
                      - cell [ref=e487]
                      - cell [ref=e491]
                      - cell [ref=e495]
                      - cell [ref=e499]
                      - cell [ref=e503]
                      - cell [ref=e507]
                      - cell [ref=e511]
                    - row [ref=e515]:
                      - cell [ref=e516]
                      - cell [ref=e520]
                      - cell [ref=e524]
                      - cell [ref=e528]
                      - cell [ref=e532]
                      - cell [ref=e536]
                      - cell [ref=e540]
                      - cell [ref=e544]
                    - row [ref=e548]:
                      - cell [ref=e549]
                      - cell [ref=e553]
                      - cell [ref=e557]
                      - cell [ref=e561]
                      - cell [ref=e565]
                      - cell [ref=e569]
                      - cell [ref=e573]
                      - cell [ref=e577]
                    - row [ref=e581]:
                      - cell [ref=e582]
                      - cell [ref=e586]
                      - cell [ref=e590]
                      - cell [ref=e594]
                      - cell [ref=e598]
                      - cell [ref=e602]
                      - cell [ref=e606]
                      - cell [ref=e610]
            - tabpanel "Internal Ad's" [ref=e614]
  - generic [ref=e616]:
    - button "Close" [ref=e617] [cursor=pointer]
    - alertdialog "Good, You have logged in successfully" [ref=e618]
```

# Test source

```ts
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
  129 |    await expect(adManagementPage.adsuccessmsg).toBeVisible();
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
  177 |    const x = box.x;
  178 |    await expect(Heading).toBeVisible();
> 179 |    await expect(x).toHaveCSS('x', '255.203125px');
      |                    ^ Error: toHaveCSS can be only used with Locator object, was called with 255.203125
  180 | 
  181 |    console.log('Heading bounding box:', box.x);
  182 | 
  183 |    });
  184 | 
  185 |   
  186 | });
```