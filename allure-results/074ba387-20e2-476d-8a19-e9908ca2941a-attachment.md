# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: admanagement/admanagement.spec.js >> Functional Testing >> TC-33: verify when the ad status is active and deactive is showing correctly
- Location: tests/admanagement/admanagement.spec.js:150:3

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('//span[normalize-space()=\'[object Promise]\']/following::mat-icon[@class=\'mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color\'][3]')

```

# Page snapshot

```yaml
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
                  - row "1 Test1786683003668 Web https://admin-staginggs.vplayed.com/vplayedqa/super-admin/ad-management?tab=0 Both Portrait Inactive" [ref=e284]:
                    - cell "1" [ref=e285]
                    - cell "Test1786683003668" [ref=e286]:
                      - heading "Test1786683003668" [level=5] [ref=e289]:
                        - generic [ref=e290]: Test1786683003668
                    - cell "Web" [ref=e291]
                    - cell "https://admin-staginggs.vplayed.com/vplayedqa/super-admin/ad-management?tab=0" [ref=e292]:
                      - generic [ref=e293]: https://admin-staginggs.vplayed.com/vplayedqa/super-admin/ad-management?tab=0
                    - cell "Both" [ref=e294]:
                      - generic [ref=e295]: Both
                    - cell "Portrait" [ref=e296]:
                      - generic [ref=e297]: Portrait
                    - cell "Inactive" [ref=e298]:
                      - generic [ref=e300]: Inactive
                    - cell [ref=e301]:
                      - generic [ref=e303]:
                        - img [ref=e307] [cursor=pointer]: edit
                        - img [ref=e311] [cursor=pointer]: delete
                        - img [ref=e315] [cursor=pointer]: visibility
                  - row "2 Test1786682969006 Web https://admin-staginggs.vplayed.com/vplayedqa/super-admin/ad-management?tab=0 Both Portrait Inactive" [ref=e316]:
                    - cell "2" [ref=e317]
                    - cell "Test1786682969006" [ref=e318]:
                      - heading "Test1786682969006" [level=5] [ref=e321]:
                        - generic [ref=e322]: Test1786682969006
                    - cell "Web" [ref=e323]
                    - cell "https://admin-staginggs.vplayed.com/vplayedqa/super-admin/ad-management?tab=0" [ref=e324]:
                      - generic [ref=e325]: https://admin-staginggs.vplayed.com/vplayedqa/super-admin/ad-management?tab=0
                    - cell "Both" [ref=e326]:
                      - generic [ref=e327]: Both
                    - cell "Portrait" [ref=e328]:
                      - generic [ref=e329]: Portrait
                    - cell "Inactive" [ref=e330]:
                      - generic [ref=e332]: Inactive
                    - cell [ref=e333]:
                      - generic [ref=e335]:
                        - img [ref=e339] [cursor=pointer]: edit
                        - img [ref=e343] [cursor=pointer]: delete
                        - img [ref=e347] [cursor=pointer]: visibility
                  - row "3 Test1786682929254 Web https://admin-staginggs.vplayed.com/vplayedqa/super-admin/ad-management?tab=0 Both Portrait Active On Aug 14, 2026" [ref=e348]:
                    - cell "3" [ref=e349]
                    - cell "Test1786682929254" [ref=e350]:
                      - heading "Test1786682929254" [level=5] [ref=e353]:
                        - generic [ref=e354]: Test1786682929254
                    - cell "Web" [ref=e355]
                    - cell "https://admin-staginggs.vplayed.com/vplayedqa/super-admin/ad-management?tab=0" [ref=e356]:
                      - generic [ref=e357]: https://admin-staginggs.vplayed.com/vplayedqa/super-admin/ad-management?tab=0
                    - cell "Both" [ref=e358]:
                      - generic [ref=e359]: Both
                    - cell "Portrait" [ref=e360]:
                      - generic [ref=e361]: Portrait
                    - cell "Active On Aug 14, 2026" [ref=e362]:
                      - generic [ref=e363]:
                        - generic [ref=e364]: Active
                        - text: On Aug 14, 2026
                    - cell [ref=e365]:
                      - generic [ref=e367]:
                        - img [ref=e371] [cursor=pointer]: edit
                        - img [ref=e375] [cursor=pointer]: delete
                        - img [ref=e379] [cursor=pointer]: visibility
                  - row "4 Test1786682767427 Web https://admin-staginggs.vplayed.com/vplayedqa/super-admin/ad-management?tab=0 Both Portrait Active On Aug 14, 2026" [ref=e380]:
                    - cell "4" [ref=e381]
                    - cell "Test1786682767427" [ref=e382]:
                      - heading "Test1786682767427" [level=5] [ref=e385]:
                        - generic [ref=e386]: Test1786682767427
                    - cell "Web" [ref=e387]
                    - cell "https://admin-staginggs.vplayed.com/vplayedqa/super-admin/ad-management?tab=0" [ref=e388]:
                      - generic [ref=e389]: https://admin-staginggs.vplayed.com/vplayedqa/super-admin/ad-management?tab=0
                    - cell "Both" [ref=e390]:
                      - generic [ref=e391]: Both
                    - cell "Portrait" [ref=e392]:
                      - generic [ref=e393]: Portrait
                    - cell "Active On Aug 14, 2026" [ref=e394]:
                      - generic [ref=e395]:
                        - generic [ref=e396]: Active
                        - text: On Aug 14, 2026
                    - cell [ref=e397]:
                      - generic [ref=e399]:
                        - img [ref=e403] [cursor=pointer]: edit
                        - img [ref=e407] [cursor=pointer]: delete
                        - img [ref=e411] [cursor=pointer]: visibility
                  - row "5 Test1786682025220 Web https://admin-staginggs.vplayed.com/vplayedqa/super-admin/ad-management?tab=0 Both Portrait Active On Aug 14, 2026" [ref=e412]:
                    - cell "5" [ref=e413]
                    - cell "Test1786682025220" [ref=e414]:
                      - heading "Test1786682025220" [level=5] [ref=e417]:
                        - generic [ref=e418]: Test1786682025220
                    - cell "Web" [ref=e419]
                    - cell "https://admin-staginggs.vplayed.com/vplayedqa/super-admin/ad-management?tab=0" [ref=e420]:
                      - generic [ref=e421]: https://admin-staginggs.vplayed.com/vplayedqa/super-admin/ad-management?tab=0
                    - cell "Both" [ref=e422]:
                      - generic [ref=e423]: Both
                    - cell "Portrait" [ref=e424]:
                      - generic [ref=e425]: Portrait
                    - cell "Active On Aug 14, 2026" [ref=e426]:
                      - generic [ref=e427]:
                        - generic [ref=e428]: Active
                        - text: On Aug 14, 2026
                    - cell [ref=e429]:
                      - generic [ref=e431]:
                        - img [ref=e435] [cursor=pointer]: edit
                        - img [ref=e439] [cursor=pointer]: delete
                        - img [ref=e443] [cursor=pointer]: visibility
                  - row "6 Test1786631481107 Web https://admin-staginggs.vplayed.com/vplayedqa/super-admin/ad-management?tab=0 Both Portrait Active On Aug 14, 2026" [ref=e444]:
                    - cell "6" [ref=e445]
                    - cell "Test1786631481107" [ref=e446]:
                      - heading "Test1786631481107" [level=5] [ref=e449]:
                        - generic [ref=e450]: Test1786631481107
                    - cell "Web" [ref=e451]
                    - cell "https://admin-staginggs.vplayed.com/vplayedqa/super-admin/ad-management?tab=0" [ref=e452]:
                      - generic [ref=e453]: https://admin-staginggs.vplayed.com/vplayedqa/super-admin/ad-management?tab=0
                    - cell "Both" [ref=e454]:
                      - generic [ref=e455]: Both
                    - cell "Portrait" [ref=e456]:
                      - generic [ref=e457]: Portrait
                    - cell "Active On Aug 14, 2026" [ref=e458]:
                      - generic [ref=e459]:
                        - generic [ref=e460]: Active
                        - text: On Aug 14, 2026
                    - cell [ref=e461]:
                      - generic [ref=e463]:
                        - img [ref=e467] [cursor=pointer]: edit
                        - img [ref=e471] [cursor=pointer]: delete
                        - img [ref=e475] [cursor=pointer]: visibility
                  - row "7 Test1786630977195 Web https://admin-staginggs.vplayed.com/vplayedqa/super-admin/ad-management?tab=0 Both Portrait Active On Aug 13, 2026" [ref=e476]:
                    - cell "7" [ref=e477]
                    - cell "Test1786630977195" [ref=e478]:
                      - heading "Test1786630977195" [level=5] [ref=e481]:
                        - generic [ref=e482]: Test1786630977195
                    - cell "Web" [ref=e483]
                    - cell "https://admin-staginggs.vplayed.com/vplayedqa/super-admin/ad-management?tab=0" [ref=e484]:
                      - generic [ref=e485]: https://admin-staginggs.vplayed.com/vplayedqa/super-admin/ad-management?tab=0
                    - cell "Both" [ref=e486]:
                      - generic [ref=e487]: Both
                    - cell "Portrait" [ref=e488]:
                      - generic [ref=e489]: Portrait
                    - cell "Active On Aug 13, 2026" [ref=e490]:
                      - generic [ref=e491]:
                        - generic [ref=e492]: Active
                        - text: On Aug 13, 2026
                    - cell [ref=e493]:
                      - generic [ref=e495]:
                        - img [ref=e499] [cursor=pointer]: edit
                        - img [ref=e503] [cursor=pointer]: delete
                        - img [ref=e507] [cursor=pointer]: visibility
                  - row "8 Test1786630794968 Web https://admin-staginggs.vplayed.com/vplayedqa/super-admin/ad-management?tab=0 Both Portrait Active On Aug 13, 2026" [ref=e508]:
                    - cell "8" [ref=e509]
                    - cell "Test1786630794968" [ref=e510]:
                      - heading "Test1786630794968" [level=5] [ref=e513]:
                        - generic [ref=e514]: Test1786630794968
                    - cell "Web" [ref=e515]
                    - cell "https://admin-staginggs.vplayed.com/vplayedqa/super-admin/ad-management?tab=0" [ref=e516]:
                      - generic [ref=e517]: https://admin-staginggs.vplayed.com/vplayedqa/super-admin/ad-management?tab=0
                    - cell "Both" [ref=e518]:
                      - generic [ref=e519]: Both
                    - cell "Portrait" [ref=e520]:
                      - generic [ref=e521]: Portrait
                    - cell "Active On Aug 13, 2026" [ref=e522]:
                      - generic [ref=e523]:
                        - generic [ref=e524]: Active
                        - text: On Aug 13, 2026
                    - cell [ref=e525]:
                      - generic [ref=e527]:
                        - img [ref=e531] [cursor=pointer]: edit
                        - img [ref=e535] [cursor=pointer]: delete
                        - img [ref=e539] [cursor=pointer]: visibility
                  - row "9 Test1786630371313 Web https://admin-staginggs.vplayed.com/vplayedqa/super-admin/ad-management?tab=0 Both Portrait Active On Aug 13, 2026" [ref=e540]:
                    - cell "9" [ref=e541]
                    - cell "Test1786630371313" [ref=e542]:
                      - heading "Test1786630371313" [level=5] [ref=e545]:
                        - generic [ref=e546]: Test1786630371313
                    - cell "Web" [ref=e547]
                    - cell "https://admin-staginggs.vplayed.com/vplayedqa/super-admin/ad-management?tab=0" [ref=e548]:
                      - generic [ref=e549]: https://admin-staginggs.vplayed.com/vplayedqa/super-admin/ad-management?tab=0
                    - cell "Both" [ref=e550]:
                      - generic [ref=e551]: Both
                    - cell "Portrait" [ref=e552]:
                      - generic [ref=e553]: Portrait
                    - cell "Active On Aug 13, 2026" [ref=e554]:
                      - generic [ref=e555]:
                        - generic [ref=e556]: Active
                        - text: On Aug 13, 2026
                    - cell [ref=e557]:
                      - generic [ref=e559]:
                        - img [ref=e563] [cursor=pointer]: edit
                        - img [ref=e567] [cursor=pointer]: delete
                        - img [ref=e571] [cursor=pointer]: visibility
                  - row "10 Test1786629774690 Web https://admin-staginggs.vplayed.com/vplayedqa/super-admin/ad-management?tab=0 Both Portrait Active On Aug 13, 2026" [ref=e572]:
                    - cell "10" [ref=e573]
                    - cell "Test1786629774690" [ref=e574]:
                      - heading "Test1786629774690" [level=5] [ref=e577]:
                        - generic [ref=e578]: Test1786629774690
                    - cell "Web" [ref=e579]
                    - cell "https://admin-staginggs.vplayed.com/vplayedqa/super-admin/ad-management?tab=0" [ref=e580]:
                      - generic [ref=e581]: https://admin-staginggs.vplayed.com/vplayedqa/super-admin/ad-management?tab=0
                    - cell "Both" [ref=e582]:
                      - generic [ref=e583]: Both
                    - cell "Portrait" [ref=e584]:
                      - generic [ref=e585]: Portrait
                    - cell "Active On Aug 13, 2026" [ref=e586]:
                      - generic [ref=e587]:
                        - generic [ref=e588]: Active
                        - text: On Aug 13, 2026
                    - cell [ref=e589]:
                      - generic [ref=e591]:
                        - img [ref=e595] [cursor=pointer]: edit
                        - img [ref=e599] [cursor=pointer]: delete
                        - img [ref=e603] [cursor=pointer]: visibility
          - tabpanel "Internal Ad's" [ref=e604]
```

# Test source

```ts
  1   | import { Basepage } from "./basepage.js";
  2   | export class admanagement extends Basepage {
  3   | 
  4   |   constructor(page) 
  5   |   {
  6   | 
  7   |     super(page);
  8   |     this.page = page;
  9   |     this.superadminbtn = page.locator("(//a[normalize-space()='Super Admin'])[1]");
  10  |     this.addmanagementbtn = page.locator("//a[normalize-space()='Ad Management']");
  11  |     this.heading = page.locator("(//h4[normalize-space()='Ad Management'])[1]");
  12  |     this.newadbtn = page.locator("//button[@class='mat-focus-indicator mat-ripple flex hover-shadow button is-icon blue small is-space mat-button mat-button-base ng-star-inserted']//span[@class='mat-button-wrapper']");
  13  |     this.createnewadsheading = page.locator("//h3[normalize-space()='Create New Ads']");
  14  |     this.createnewadsubheading = page.locator("(//h4[normalize-space()='Create Ad'])[1]");
  15  |     this.creatednewadssubtext = page.locator("//span[@class='normal']");
  16  |     this.adnameheading = page.locator("(//h4[normalize-space()='AD Name*'])[1]");
  17  |     // Use a stable relative locator for the AD Name input instead of dynamic IDs
  18  |     this.adnameplaceholder = page.locator("//h4[normalize-space()='AD Name*']/following::input[1]");
  19  |     this.adurlheading = page.locator("(//h4[normalize-space()='AD Url*'])[1]");
  20  |     // Use a relative locator for the AD Url textarea to avoid relying on dynamic IDs
  21  |     this.adurlplaceholder = page.locator("//h4[normalize-space()='AD Url*']/following::textarea[1]");
  22  |     this.supportplatformheading = page.locator("(//h4[normalize-space()='Support Platform*'])[1]");
  23  |     // Use a relative locator for the support platform placeholder to avoid brittle class/index selectors
  24  |     this.adsupportplatformplaceholder = page.locator("//h4[normalize-space()='Support Platform*']/following::span[contains(@class,'mat-select-placeholder')][1]");
  25  |     this.supportplatformlist = page.locator("//span[@class='mat-option-text']");  //support platform list
  26  |     this.orientationheading = page.locator("(//h4[normalize-space()='Orientation*'])[1]");
  27  |     // Use a relative locator for the orientation placeholder to avoid brittle class/index selectors
  28  |     this.adorientationplaceholder = page.locator("//h4[normalize-space()='Orientation*']/following::span[contains(@class,'mat-select-placeholder')][1]");
  29  |     this.orientationlist = page.locator("//span[@class='mat-option-text']");  //orientation list
  30  |     this.savebtn = page.locator("//span[normalize-space()='Save']");
  31  |     this.adnameerror = page.locator("//span[normalize-space()='Ad Name is required']");
  32  |     this.adurlerror = page.locator("//span[normalize-space()='Ad Url is required']");
  33  |     this.supportplatformerror = page.locator("//span[normalize-space()='Support platform is required']");
  34  |     this.orientationerror = page.locator("//span[normalize-space()='Orientation Type is required']");
  35  |     this.adsuccessmsg = page.locator("//div[@role='alertdialog']");
  36  |     this.createdadname = page.locator("//span[normalize-space()='AD Name']/following::span[@class='sho-grids-title text-control fast-title-text'][1]");
  37  |     // Use methods below to get locators for created ad entries by name (avoid referencing an undefined `adName` variable)
  38  |     //this.adstatusactivateanddeactivatebtn = page.locator("//span[normalize-space()='Test1786631481107']/following::mat-icon[@class='mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color'][3]");
  39  |     this.adsstatuspopupyesbtn = page.locator("(//span[normalize-space()='Yes'])[1]");
  40  |   
  41  |   }
  42  | 
  43  |   // Locator helpers that accept the ad name at runtime to avoid ReferenceError
  44  |   async createdAdUrl(adName) {
  45  |     return this.page.locator(`//span[normalize-space()='${adName}']/following::span[@class='mat-tooltip-trigger ng-star-inserted'][1]`);
  46  |   }
  47  | 
  48  |   async createdSupportPlatform(adName) {
  49  |     return this.page.locator(`//span[normalize-space()='${adName}']/following::span[@class='ng-star-inserted'][1]`);
  50  |   }
  51  | 
  52  |   async createdOrientation(adName) {
  53  |     return this.page.locator(`//span[normalize-space()='${adName}']/following::span[@class='ng-star-inserted'][3]`);
  54  |   }
  55  | 
  56  |   async createdAdstatus(adName) {
  57  |     return this.page.locator(`//span[normalize-space()='${adName}']/following::span[@class='upside label-published ng-star-inserted'][1]`);
  58  |   }
  59  | 
  60  |   async createdAddate(adName) {
  61  |     return this.page.locator(`//span[normalize-space()='${adName}']/following::span[@class='ng-star-inserted'][5]`);
  62  |   }
  63  | 
  64  |   async adstatusactivatedeactivate(adName) {
> 65  |     return this.page.locator(`//span[normalize-space()='${adName}']/following::mat-icon[@class='mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color'][3]`).click();
      |                                                                                                                                                                                ^ Error: locator.click: Test timeout of 30000ms exceeded.
  66  |   }
  67  | 
  68  |   async superadminclick() {
  69  |     await this.superadminbtn.click();
  70  |   }
  71  | 
  72  |   async adnameplaceholderclick() {
  73  |     await this.adnameplaceholder.click();
  74  |   }
  75  | 
  76  |   async adurlplaceholderclick() {
  77  |     await this.adurlplaceholder.click();
  78  |   }
  79  | 
  80  |   async newadclick() {
  81  |     await this.newadbtn.click();
  82  |     // Wait for the Create New Ads heading to appear to avoid flaky visibility assertions
  83  |     //await this.page.waitForSelector("//h3[normalize-space()='Create New Ads']", { state: 'visible', timeout: 10000 });
  84  |   }
  85  | 
  86  |   async savebtnclick() {
  87  |     await this.savebtn.click();
  88  |   }
  89  | 
  90  |   async adnamefill(adname) {
  91  |     await this.adnameplaceholder.fill(adname);
  92  |   }
  93  | 
  94  |   async adurlfill(url) {
  95  |     await this.adurlplaceholder.fill(url);
  96  |   }
  97  | 
  98  | 
  99  |   /*async supportplatformfill(platform) {
  100 | 
  101 |    await this.adsupportplatformplaceholder.click();
  102 |    await this.page.waitForSelector("//span[@class='mat-option-text']", { state: 'visible' });
  103 |     const total = await this.supportplatformlist.count();
  104 |     for (let index = 0; index < total; index++) {
  105 |       const element = this.supportplatformlist.nth(index);
  106 |       const text = await element.innerText();
  107 |       console.log("Support Platform Options: " + text);
  108 |       if (text.includes(platform)) {
  109 |         await element.click();
  110 |         break;
  111 |       }
  112 |     } 
  113 | 
  114 | 
  115 |   }*/
  116 | 
  117 |   /*async orientationfill(orientation) {
  118 | 
  119 |    await this.adorientationplaceholder.click();
  120 |    await this.page.waitForSelector("//span[@class='mat-option-text']", { state: 'visible' });
  121 |     const total = await this.orientationlist.count();
  122 |     for (let index = 0; index < total; index++) {
  123 |       const element = this.orientationlist.nth(index);
  124 |       const text = await element.innerText();
  125 |       console.log("Orientation Options: " + text);
  126 |       if (text.includes(orientation)) {
  127 |         await element.click();
  128 |         break;
  129 |       }
  130 |     } 
  131 | 
  132 |   }*/
  133 |   
  134 | 
  135 | 
  136 | }
```