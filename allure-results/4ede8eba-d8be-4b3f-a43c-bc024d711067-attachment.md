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
  - waiting for locator('xpath=(//input[@id=\'mat-input-12\'])[1]')

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
          - button "New Ad" [active] [ref=e220] [cursor=pointer]:
            - generic [ref=e221]:
              - img [ref=e222]: add
              - text: New Ad
          - button "Ad Configuration" [ref=e223] [cursor=pointer]:
            - generic [ref=e224]:
              - img [ref=e225]: settings
              - text: Ad Configuration
      - generic [ref=e230]:
        - generic [ref=e231]:
          - heading "Create New Ads" [level=3] [ref=e232]
          - generic [ref=e233]: Add multimedia VAST ads source here, The added ads will be playing as preroll, midroll, post roll
        - region "scrollable content" [ref=e239]:
          - generic [ref=e240]:
            - generic [ref=e244]:
              - heading "Create Ad" [level=4] [ref=e246]
              - generic [ref=e248]:
                - generic [ref=e249]:
                  - heading "AD Name*" [level=4] [ref=e251]
                  - textbox "Name of the Ad" [ref=e257]
                - generic [ref=e258]:
                  - heading "AD Url*" [level=4] [ref=e260]
                  - textbox "Enter Ad URL" [ref=e266]
                - generic [ref=e267]:
                  - heading "Support Platform*" [level=4] [ref=e269]
                  - combobox "Support Platform" [ref=e276] [cursor=pointer]:
                    - generic [ref=e278]: Support Platform
                - generic [ref=e281]:
                  - heading "Orientation*" [level=4] [ref=e283]
                  - combobox "Orientation Type" [ref=e290] [cursor=pointer]:
                    - generic [ref=e292]: Orientation Type
            - generic [ref=e297]:
              - button "Cancel" [ref=e298] [cursor=pointer]:
                - generic [ref=e299]: Cancel
              - button "Save" [ref=e300] [cursor=pointer]:
                - generic [ref=e301]: Save
      - generic [ref=e302]:
        - tablist [ref=e305]:
          - generic [ref=e306]:
            - tab "External Ad's" [selected] [ref=e307] [cursor=pointer]:
              - generic [ref=e310]: External Ad's
            - tab "Internal Ad's" [ref=e311] [cursor=pointer]:
              - generic [ref=e314]: Internal Ad's
        - generic [ref=e315]:
          - tabpanel "External Ad's" [ref=e316]:
            - region "scrollable content" [ref=e324]:
              - table [ref=e326]:
                - rowgroup [ref=e327]:
                  - row "# AD Name Domain Type AD Url Support Platform Orientation Type Status Action" [ref=e328]:
                    - columnheader "#" [ref=e329]:
                      - generic [ref=e330]: "#"
                    - columnheader "AD Name" [ref=e331]:
                      - button "AD Name" [ref=e332] [cursor=pointer]:
                        - generic [ref=e335]: AD Name
                    - columnheader "Domain Type" [ref=e342]:
                      - generic [ref=e344]: Domain Type
                    - columnheader "AD Url" [ref=e345]:
                      - generic [ref=e347]: AD Url
                    - columnheader "Support Platform" [ref=e348]:
                      - generic [ref=e350]: Support Platform
                    - columnheader "Orientation Type" [ref=e351]:
                      - generic [ref=e353]: Orientation Type
                    - columnheader "Status" [ref=e354]:
                      - generic [ref=e356]: Status
                    - columnheader "Action" [ref=e357]:
                      - generic [ref=e358]: Action
                - rowgroup [ref=e359]:
                  - row "1 Stage New Web https://gsvp-qa.s3.ap-south-1.amazonaws.com/vplayed-ads/1784450007607-advertisement.xml Both Landscape Active On Jul 21, 2026" [ref=e360]:
                    - cell "1" [ref=e361]
                    - cell "Stage New" [ref=e362]:
                      - heading "Stage New" [level=5] [ref=e365]:
                        - generic [ref=e366]: Stage New
                    - cell "Web" [ref=e367]
                    - cell "https://gsvp-qa.s3.ap-south-1.amazonaws.com/vplayed-ads/1784450007607-advertisement.xml" [ref=e368]:
                      - generic [ref=e369]: https://gsvp-qa.s3.ap-south-1.amazonaws.com/vplayed-ads/1784450007607-advertisement.xml
                    - cell "Both" [ref=e370]:
                      - generic [ref=e371]: Both
                    - cell "Landscape" [ref=e372]:
                      - generic [ref=e373]: Landscape
                    - cell "Active On Jul 21, 2026" [ref=e374]:
                      - generic [ref=e375]:
                        - generic [ref=e376]: Active
                        - text: On Jul 21, 2026
                    - cell [ref=e377]:
                      - generic [ref=e379]:
                        - img [ref=e383] [cursor=pointer]: edit
                        - img [ref=e387] [cursor=pointer]: delete
                        - img [ref=e391] [cursor=pointer]: visibility
                  - row "2 adsjihfiruhfiuhfiu Web hrifhirhfiruhfirhjkrhk Both Landscape Inactive" [ref=e392]:
                    - cell "2" [ref=e393]
                    - cell "adsjihfiruhfiuhfiu" [ref=e394]:
                      - heading "adsjihfiruhfiuhfiu" [level=5] [ref=e397]:
                        - generic [ref=e398]: adsjihfiruhfiuhfiu
                    - cell "Web" [ref=e399]
                    - cell "hrifhirhfiruhfirhjkrhk" [ref=e400]:
                      - generic [ref=e401]: hrifhirhfiruhfirhjkrhk
                    - cell "Both" [ref=e402]:
                      - generic [ref=e403]: Both
                    - cell "Landscape" [ref=e404]:
                      - generic [ref=e405]: Landscape
                    - cell "Inactive" [ref=e406]:
                      - generic [ref=e408]: Inactive
                    - cell [ref=e409]:
                      - generic [ref=e411]:
                        - img [ref=e415] [cursor=pointer]: edit
                        - img [ref=e419] [cursor=pointer]: delete
                        - img [ref=e423] [cursor=pointer]: visibility
                  - row "3 The new ad Web sdfsdfsdfsdf Both Landscape Inactive" [ref=e424]:
                    - cell "3" [ref=e425]
                    - cell "The new ad" [ref=e426]:
                      - heading "The new ad" [level=5] [ref=e429]:
                        - generic [ref=e430]: The new ad
                    - cell "Web" [ref=e431]
                    - cell "sdfsdfsdfsdf" [ref=e432]:
                      - generic [ref=e433]: sdfsdfsdfsdf
                    - cell "Both" [ref=e434]:
                      - generic [ref=e435]: Both
                    - cell "Landscape" [ref=e436]:
                      - generic [ref=e437]: Landscape
                    - cell "Inactive" [ref=e438]:
                      - generic [ref=e440]: Inactive
                    - cell [ref=e441]:
                      - generic [ref=e443]:
                        - img [ref=e447] [cursor=pointer]: edit
                        - img [ref=e451] [cursor=pointer]: delete
                        - img [ref=e455] [cursor=pointer]: visibility
                  - row "4 Chocolate bar Web https://pubads.g.doubleclick.net/gampad/ads?iu=/22633693712/annathe&description_url=https%3A%2F%2Fvplayed.com&tfcd=0&npa=0&sz=400x300&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=&vad_type=linear Both Landscape Inactive" [ref=e456]:
                    - cell "4" [ref=e457]
                    - cell "Chocolate bar" [ref=e458]:
                      - heading "Chocolate bar" [level=5] [ref=e461]:
                        - generic [ref=e462]: Chocolate bar
                    - cell "Web" [ref=e463]
                    - cell "https://pubads.g.doubleclick.net/gampad/ads?iu=/22633693712/annathe&description_url=https%3A%2F%2Fvplayed.com&tfcd=0&npa=0&sz=400x300&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=&vad_type=linear" [ref=e464]:
                      - generic [ref=e465]: https://pubads.g.doubleclick.net/gampad/ads?iu=/22633693712/annathe&description_url=https%3A%2F%2Fvplayed.com&tfcd=0&npa=0&sz=400x300&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=&vad_type=linear
                    - cell "Both" [ref=e466]:
                      - generic [ref=e467]: Both
                    - cell "Landscape" [ref=e468]:
                      - generic [ref=e469]: Landscape
                    - cell "Inactive" [ref=e470]:
                      - generic [ref=e472]: Inactive
                    - cell [ref=e473]:
                      - generic [ref=e475]:
                        - img [ref=e479] [cursor=pointer]: edit
                        - img [ref=e483] [cursor=pointer]: delete
                        - img [ref=e487] [cursor=pointer]: visibility
                  - row "5 Disney Web https://pubads.g.doubleclick.net/gampad/ads?iu=/22633693712/annathe&description_url=https%3A%2F%2Fvplayed.com&tfcd=0&npa=0&sz=400x300&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=&vad_type=linear Both Landscape Active On Jul 16, 2026" [ref=e488]:
                    - cell "5" [ref=e489]
                    - cell "Disney" [ref=e490]:
                      - heading "Disney" [level=5] [ref=e493]:
                        - generic [ref=e494]: Disney
                    - cell "Web" [ref=e495]
                    - cell "https://pubads.g.doubleclick.net/gampad/ads?iu=/22633693712/annathe&description_url=https%3A%2F%2Fvplayed.com&tfcd=0&npa=0&sz=400x300&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=&vad_type=linear" [ref=e496]:
                      - generic [ref=e497]: https://pubads.g.doubleclick.net/gampad/ads?iu=/22633693712/annathe&description_url=https%3A%2F%2Fvplayed.com&tfcd=0&npa=0&sz=400x300&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=&vad_type=linear
                    - cell "Both" [ref=e498]:
                      - generic [ref=e499]: Both
                    - cell "Landscape" [ref=e500]:
                      - generic [ref=e501]: Landscape
                    - cell "Active On Jul 16, 2026" [ref=e502]:
                      - generic [ref=e503]:
                        - generic [ref=e504]: Active
                        - text: On Jul 16, 2026
                    - cell [ref=e505]:
                      - generic [ref=e507]:
                        - img [ref=e511] [cursor=pointer]: edit
                        - img [ref=e515] [cursor=pointer]: delete
                        - img [ref=e519] [cursor=pointer]: visibility
          - tabpanel "Internal Ad's" [ref=e520]
```

# Test source

```ts
  1  | import { Basepage } from "./basepage.js";
  2  | export class admanagement extends Basepage {
  3  | 
  4  |   constructor(page) 
  5  |   {
  6  | 
  7  |     super(page);
  8  |     this.page = page;
  9  |     this.superadminbtn = page.locator("(//a[normalize-space()='Super Admin'])[1]");
  10 |     this.addmanagementbtn = page.locator("//a[normalize-space()='Ad Management']");
  11 |     this.heading = page.locator("(//h4[normalize-space()='Ad Management'])[1]");
  12 |     this.newadbtn = page.locator("//button[@class='mat-focus-indicator mat-ripple flex hover-shadow button is-icon blue small is-space mat-button mat-button-base ng-star-inserted']//span[@class='mat-button-wrapper']");
  13 |     this.createnewadsheading = page.locator("//h3[normalize-space()='Create New Ads']");
  14 |     this.createnewadsubheading = page.locator("(//h4[normalize-space()='Create Ad'])[1]");
  15 |     this.creatednewadssubtext = page.locator("//span[@class='normal']");
  16 |     this.adnameheading = page.locator("(//h4[normalize-space()='AD Name*'])[1]");
  17 |     this.adnameplaceholder = page.locator("(//input[@id='mat-input-12'])[1]");
  18 |     this.adurlheading = page.locator("(//h4[normalize-space()='AD Url*'])[1]");
  19 |     this.adurlplaceholder = page.locator("(//textarea[@id='mat-input-21'])[1]");
  20 |     this.supportplatformheading = page.locator("(//h4[normalize-space()='Support Platform*'])[1]");
  21 |     this.adsupportplatformplaceholder = page.locator("(//span[@class='mat-select-placeholder mat-select-min-line ng-tns-c21-64 ng-star-inserted'])[1]");
  22 |     this.orientationheading = page.locator("(//h4[normalize-space()='Orientation*'])[1]");
  23 |     this.adorientationplaceholder = page.locator("(//span[@class='mat-select-placeholder mat-select-min-line ng-tns-c21-66 ng-star-inserted'])[1]");
  24 |   }
  25 | 
  26 |   async superadminclick() {
  27 |     await this.superadminbtn.click();
  28 |   }
  29 | 
  30 |   async adnameplaceholderclick() {
> 31 |     await this.adnameplaceholder.click();
     |                                  ^ Error: locator.click: Test timeout of 30000ms exceeded.
  32 |   }
  33 | 
  34 |   async adurlplaceholderclick() {
  35 |     await this.adurlplaceholder.click();
  36 |   }
  37 | 
  38 |   async newadclick() {
  39 |     await this.newadbtn.click();
  40 |     // Wait for the Create New Ads heading to appear to avoid flaky visibility assertions
  41 |     await this.page.waitForSelector("//h3[normalize-space()='Create New Ads']", { state: 'visible' });
  42 |   }
  43 |   
  44 | 
  45 | 
  46 | }
```