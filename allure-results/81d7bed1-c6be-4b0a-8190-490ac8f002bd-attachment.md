# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: admanagement/admanagement.spec.js >> Functional Testing >> TC-34: verify ad management heading is displaying at correct design
- Location: tests/admanagement/admanagement.spec.js:171:3

# Error details

```
Error: expect(locator).toHaveCSS(expected) failed

Locator:  locator('xpath=(//h4[normalize-space()=\'Ad Management\'])[1]')
Expected: "25.875px"
Received: "24.15px"
Timeout:  5000ms

Call log:
  - Expect "toHaveCSS" with timeout 5000ms
  - waiting for locator('xpath=(//h4[normalize-space()=\'Ad Management\'])[1]')
    14 × locator resolved to <h4 _ngcontent-serverapp-c239="" class="flex align-items-center"> Ad Management </h4>
       - unexpected value "24.15px"

```

```yaml
- heading "Ad Management" [level=4]
```

# Test source

```ts
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
  177 |    console.log('Heading bounding box:', box);
  178 |    await expect(box.x).toBeCloseTo(255.203125, 1);
  179 |    await expect(box.y).toBeCloseTo(95.1953125, 1);
  180 |    await expect(box.width).toBeCloseTo(160.125, 1);
  181 |    await expect(box.height).toBeCloseTo(24.1484375, 1);
  182 |    await expect(adManagementPage.heading).toHaveText(admanagementdatafixture[0].assert1);
  183 |    await expect(adManagementPage.heading).toHaveCSS('font-family', '"IBM Plex Sans", sans-serif');
  184 |    await expect(adManagementPage.heading).toHaveCSS('font-size', '21px');
  185 |    await expect(adManagementPage.heading).toHaveCSS('font-weight', '700');
> 186 |    await expect(adManagementPage.heading).toHaveCSS('line-height', '25.875px', 2); //25.875px actually but its coming 24 so i added it to make test pass
      |                                           ^ Error: expect(locator).toHaveCSS(expected) failed
  187 |    await expect(adManagementPage.heading).toHaveCSS('color', 'rgb(17, 18, 23)');
  188 |    await expect(adManagementPage.heading).toHaveCSS('align-items', 'center');
  189 | 
  190 |    });
  191 | 
  192 |   
  193 | });
```