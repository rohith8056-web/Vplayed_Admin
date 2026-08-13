# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: admanagement.spec.js >> Functional Testing >> TC-32: when the user enter the adname,url,support platform and orientation click on save then add should be saved and success should be displayed
- Location: tests/admanagement.spec.js:114:3

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('//h4[normalize-space()=\'Orientation*\']/following::span[contains(@class,\'mat-select-placeholder\')][1]')
    - locator resolved to <span class="mat-select-placeholder mat-select-min-line ng-tns-c21-37 ng-star-inserted">Orientation Type</span>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <span class="mat-option-text">Mobile </span> from <div class="cdk-overlay-container">…</div> subtree intercepts pointer events
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div class="cdk-overlay-backdrop cdk-overlay-transparent-backdrop cdk-overlay-backdrop-showing"></div> from <div class="cdk-overlay-container">…</div> subtree intercepts pointer events
    - retrying click action
      - waiting 100ms
    9 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div class="cdk-overlay-backdrop cdk-overlay-transparent-backdrop cdk-overlay-backdrop-showing"></div> from <div class="cdk-overlay-container">…</div> subtree intercepts pointer events
    - retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <span class="mat-option-text">Mobile </span> from <div class="cdk-overlay-container">…</div> subtree intercepts pointer events
    - retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div class="cdk-overlay-backdrop cdk-overlay-transparent-backdrop cdk-overlay-backdrop-showing"></div> from <div class="cdk-overlay-container">…</div> subtree intercepts pointer events
    - retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div class="cdk-overlay-backdrop cdk-overlay-transparent-backdrop cdk-overlay-backdrop-showing"></div> from <div class="cdk-overlay-container">…</div> subtree intercepts pointer events
    - retrying click action
      - waiting 500ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <div class="cdk-overlay-backdrop cdk-overlay-transparent-backdrop cdk-overlay-backdrop-showing"></div> from <div class="cdk-overlay-container">…</div> subtree intercepts pointer events
  - retrying click action
    - waiting 500ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <span class="mat-option-text">Mobile </span> from <div class="cdk-overlay-container">…</div> subtree intercepts pointer events
  - retrying click action
    - waiting 500ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <div class="cdk-overlay-backdrop cdk-overlay-transparent-backdrop cdk-overlay-backdrop-showing"></div> from <div class="cdk-overlay-container">…</div> subtree intercepts pointer events
  - retrying click action
    - waiting 500ms

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
                  - textbox "Name of the Ad" [ref=e257]: Test1786604880146
                - generic [ref=e258]:
                  - heading "AD Url*" [level=4] [ref=e260]
                  - generic [ref=e261]:
                    - textbox "Enter Ad URL" [ref=e266]: https://admin-staginggs.vplayed.com/vplayedqa/super-admin/ad-management?tab=0
                    - generic [ref=e268]: 77 / 1000
                - generic [ref=e269]:
                  - heading "Support Platform*" [level=4] [ref=e271]
                  - combobox "Support Platform" [expanded] [active] [ref=e278] [cursor=pointer]:
                    - generic [ref=e279]:
                      - generic [ref=e280]: Support Platform
                      - listbox [ref=e283]:
                        - region "scrollable content" [ref=e288]:
                          - generic [ref=e289]:
                            - option "Web" [ref=e290]:
                              - generic [ref=e291]: Web
                            - option "Mobile" [ref=e292]:
                              - generic [ref=e293]: Mobile
                            - option "Both" [ref=e294]:
                              - generic [ref=e295]: Both
                - generic [ref=e296]:
                  - heading "Orientation*" [level=4] [ref=e298]
                  - combobox "Orientation Type" [ref=e305] [cursor=pointer]:
                    - generic [ref=e307]: Orientation Type
            - generic [ref=e312]:
              - button "Cancel" [ref=e313] [cursor=pointer]:
                - generic [ref=e314]: Cancel
              - button "Save" [ref=e315] [cursor=pointer]:
                - generic [ref=e316]: Save
      - generic [ref=e317]:
        - tablist [ref=e320]:
          - generic [ref=e321]:
            - tab "External Ad's" [selected] [ref=e322] [cursor=pointer]:
              - generic [ref=e325]: External Ad's
            - tab "Internal Ad's" [ref=e326] [cursor=pointer]:
              - generic [ref=e329]: Internal Ad's
        - generic [ref=e330]:
          - tabpanel "External Ad's" [ref=e331]:
            - region "scrollable content" [ref=e339]:
              - table [ref=e341]:
                - rowgroup [ref=e342]:
                  - row "# AD Name Domain Type AD Url Support Platform Orientation Type Status Action" [ref=e343]:
                    - columnheader "#" [ref=e344]:
                      - generic [ref=e345]: "#"
                    - columnheader "AD Name" [ref=e346]:
                      - button "AD Name" [ref=e347] [cursor=pointer]:
                        - generic [ref=e350]: AD Name
                    - columnheader "Domain Type" [ref=e357]:
                      - generic [ref=e359]: Domain Type
                    - columnheader "AD Url" [ref=e360]:
                      - generic [ref=e362]: AD Url
                    - columnheader "Support Platform" [ref=e363]:
                      - generic [ref=e365]: Support Platform
                    - columnheader "Orientation Type" [ref=e366]:
                      - generic [ref=e368]: Orientation Type
                    - columnheader "Status" [ref=e369]:
                      - generic [ref=e371]: Status
                    - columnheader "Action" [ref=e372]:
                      - generic [ref=e373]: Action
                - rowgroup [ref=e374]:
                  - row "1 Test1786604459236 Web https://admin-staginggs.vplayed.com/vplayedqa/super-admin/ad-management?tab=0 Web Portrait Active On Aug 13, 2026" [ref=e375]:
                    - cell "1" [ref=e376]
                    - cell "Test1786604459236" [ref=e377]:
                      - heading "Test1786604459236" [level=5] [ref=e380]:
                        - generic [ref=e381]: Test1786604459236
                    - cell "Web" [ref=e382]
                    - cell "https://admin-staginggs.vplayed.com/vplayedqa/super-admin/ad-management?tab=0" [ref=e383]:
                      - generic [ref=e384]: https://admin-staginggs.vplayed.com/vplayedqa/super-admin/ad-management?tab=0
                    - cell "Web" [ref=e385]:
                      - generic [ref=e386]: Web
                    - cell "Portrait" [ref=e387]:
                      - generic [ref=e388]: Portrait
                    - cell "Active On Aug 13, 2026" [ref=e389]:
                      - generic [ref=e390]:
                        - generic [ref=e391]: Active
                        - text: On Aug 13, 2026
                    - cell [ref=e392]:
                      - generic [ref=e394]:
                        - img [ref=e398] [cursor=pointer]: edit
                        - img [ref=e402] [cursor=pointer]: delete
                        - img [ref=e406] [cursor=pointer]: visibility
                  - row "2 Stage New Web https://gsvp-qa.s3.ap-south-1.amazonaws.com/vplayed-ads/1784450007607-advertisement.xml Both Landscape Active On Jul 21, 2026" [ref=e407]:
                    - cell "2" [ref=e408]
                    - cell "Stage New" [ref=e409]:
                      - heading "Stage New" [level=5] [ref=e412]:
                        - generic [ref=e413]: Stage New
                    - cell "Web" [ref=e414]
                    - cell "https://gsvp-qa.s3.ap-south-1.amazonaws.com/vplayed-ads/1784450007607-advertisement.xml" [ref=e415]:
                      - generic [ref=e416]: https://gsvp-qa.s3.ap-south-1.amazonaws.com/vplayed-ads/1784450007607-advertisement.xml
                    - cell "Both" [ref=e417]:
                      - generic [ref=e418]: Both
                    - cell "Landscape" [ref=e419]:
                      - generic [ref=e420]: Landscape
                    - cell "Active On Jul 21, 2026" [ref=e421]:
                      - generic [ref=e422]:
                        - generic [ref=e423]: Active
                        - text: On Jul 21, 2026
                    - cell [ref=e424]:
                      - generic [ref=e426]:
                        - img [ref=e430] [cursor=pointer]: edit
                        - img [ref=e434] [cursor=pointer]: delete
                        - img [ref=e438] [cursor=pointer]: visibility
                  - row "3 adsjihfiruhfiuhfiu Web hrifhirhfiruhfirhjkrhk Both Landscape Inactive" [ref=e439]:
                    - cell "3" [ref=e440]
                    - cell "adsjihfiruhfiuhfiu" [ref=e441]:
                      - heading "adsjihfiruhfiuhfiu" [level=5] [ref=e444]:
                        - generic [ref=e445]: adsjihfiruhfiuhfiu
                    - cell "Web" [ref=e446]
                    - cell "hrifhirhfiruhfirhjkrhk" [ref=e447]:
                      - generic [ref=e448]: hrifhirhfiruhfirhjkrhk
                    - cell "Both" [ref=e449]:
                      - generic [ref=e450]: Both
                    - cell "Landscape" [ref=e451]:
                      - generic [ref=e452]: Landscape
                    - cell "Inactive" [ref=e453]:
                      - generic [ref=e455]: Inactive
                    - cell [ref=e456]:
                      - generic [ref=e458]:
                        - img [ref=e462] [cursor=pointer]: edit
                        - img [ref=e466] [cursor=pointer]: delete
                        - img [ref=e470] [cursor=pointer]: visibility
                  - row "4 The new ad Web sdfsdfsdfsdf Both Landscape Inactive" [ref=e471]:
                    - cell "4" [ref=e472]
                    - cell "The new ad" [ref=e473]:
                      - heading "The new ad" [level=5] [ref=e476]:
                        - generic [ref=e477]: The new ad
                    - cell "Web" [ref=e478]
                    - cell "sdfsdfsdfsdf" [ref=e479]:
                      - generic [ref=e480]: sdfsdfsdfsdf
                    - cell "Both" [ref=e481]:
                      - generic [ref=e482]: Both
                    - cell "Landscape" [ref=e483]:
                      - generic [ref=e484]: Landscape
                    - cell "Inactive" [ref=e485]:
                      - generic [ref=e487]: Inactive
                    - cell [ref=e488]:
                      - generic [ref=e490]:
                        - img [ref=e494] [cursor=pointer]: edit
                        - img [ref=e498] [cursor=pointer]: delete
                        - img [ref=e502] [cursor=pointer]: visibility
                  - row "5 Chocolate bar Web https://pubads.g.doubleclick.net/gampad/ads?iu=/22633693712/annathe&description_url=https%3A%2F%2Fvplayed.com&tfcd=0&npa=0&sz=400x300&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=&vad_type=linear Both Landscape Inactive" [ref=e503]:
                    - cell "5" [ref=e504]
                    - cell "Chocolate bar" [ref=e505]:
                      - heading "Chocolate bar" [level=5] [ref=e508]:
                        - generic [ref=e509]: Chocolate bar
                    - cell "Web" [ref=e510]
                    - cell "https://pubads.g.doubleclick.net/gampad/ads?iu=/22633693712/annathe&description_url=https%3A%2F%2Fvplayed.com&tfcd=0&npa=0&sz=400x300&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=&vad_type=linear" [ref=e511]:
                      - generic [ref=e512]: https://pubads.g.doubleclick.net/gampad/ads?iu=/22633693712/annathe&description_url=https%3A%2F%2Fvplayed.com&tfcd=0&npa=0&sz=400x300&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=&vad_type=linear
                    - cell "Both" [ref=e513]:
                      - generic [ref=e514]: Both
                    - cell "Landscape" [ref=e515]:
                      - generic [ref=e516]: Landscape
                    - cell "Inactive" [ref=e517]:
                      - generic [ref=e519]: Inactive
                    - cell [ref=e520]:
                      - generic [ref=e522]:
                        - img [ref=e526] [cursor=pointer]: edit
                        - img [ref=e530] [cursor=pointer]: delete
                        - img [ref=e534] [cursor=pointer]: visibility
                  - row "6 Disney Web https://pubads.g.doubleclick.net/gampad/ads?iu=/22633693712/annathe&description_url=https%3A%2F%2Fvplayed.com&tfcd=0&npa=0&sz=400x300&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=&vad_type=linear Both Landscape Active On Jul 16, 2026" [ref=e535]:
                    - cell "6" [ref=e536]
                    - cell "Disney" [ref=e537]:
                      - heading "Disney" [level=5] [ref=e540]:
                        - generic [ref=e541]: Disney
                    - cell "Web" [ref=e542]
                    - cell "https://pubads.g.doubleclick.net/gampad/ads?iu=/22633693712/annathe&description_url=https%3A%2F%2Fvplayed.com&tfcd=0&npa=0&sz=400x300&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=&vad_type=linear" [ref=e543]:
                      - generic [ref=e544]: https://pubads.g.doubleclick.net/gampad/ads?iu=/22633693712/annathe&description_url=https%3A%2F%2Fvplayed.com&tfcd=0&npa=0&sz=400x300&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=&vad_type=linear
                    - cell "Both" [ref=e545]:
                      - generic [ref=e546]: Both
                    - cell "Landscape" [ref=e547]:
                      - generic [ref=e548]: Landscape
                    - cell "Active On Jul 16, 2026" [ref=e549]:
                      - generic [ref=e550]:
                        - generic [ref=e551]: Active
                        - text: On Jul 16, 2026
                    - cell [ref=e552]:
                      - generic [ref=e554]:
                        - img [ref=e558] [cursor=pointer]: edit
                        - img [ref=e562] [cursor=pointer]: delete
                        - img [ref=e566] [cursor=pointer]: visibility
          - tabpanel "Internal Ad's" [ref=e567]
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
  35  |   }
  36  | 
  37  |   async superadminclick() {
  38  |     await this.superadminbtn.click();
  39  |   }
  40  | 
  41  |   async adnameplaceholderclick() {
  42  |     await this.adnameplaceholder.click();
  43  |   }
  44  | 
  45  |   async adurlplaceholderclick() {
  46  |     await this.adurlplaceholder.click();
  47  |   }
  48  | 
  49  |   async newadclick() {
  50  |     await this.newadbtn.click();
  51  |     // Wait for the Create New Ads heading to appear to avoid flaky visibility assertions
  52  |     //await this.page.waitForSelector("//h3[normalize-space()='Create New Ads']", { state: 'visible', timeout: 10000 });
  53  |   }
  54  | 
  55  |   async savebtnclick() {
  56  |     await this.savebtn.click();
  57  |   }
  58  | 
  59  |   async adnamefill(adname) {
  60  |     await this.adnameplaceholder.fill(adname);
  61  |   }
  62  | 
  63  |   async adurlfill(url) {
  64  |     await this.adurlplaceholder.fill(url);
  65  |   }
  66  | 
  67  |   async supportplatformfill(platform) {
  68  | 
  69  |    await this.adsupportplatformplaceholder.click();
  70  |    await this.page.waitForSelector("//span[@class='mat-option-text']", { state: 'visible' });
  71  |     const total = await this.supportplatformlist.count();
  72  |     for (let index = 0; index < total; index++) {
  73  |       const element = this.supportplatformlist.nth(index);
  74  |       const text = await element.innerText();
  75  |       console.log("Support Platform Options: " + text);
  76  |       if (text.includes(platform)) {
  77  |         await element.click();
  78  |         break;
  79  |       }
  80  |     } 
  81  | 
  82  | 
  83  |   }
  84  | 
  85  |   async orientationfill(orientation) {
  86  | 
> 87  |    await this.adorientationplaceholder.click();
      |                                        ^ Error: locator.click: Test timeout of 30000ms exceeded.
  88  |    await this.page.waitForSelector("//span[@class='mat-option-text']", { state: 'visible' });
  89  |     const total = await this.orientationlist.count();
  90  |     for (let index = 0; index < total; index++) {
  91  |       const element = this.orientationlist.nth(index);
  92  |       const text = await element.innerText();
  93  |       console.log("Orientation Options: " + text);
  94  |       if (text.includes(orientation)) {
  95  |         await element.click();
  96  |         break;
  97  |       }
  98  |     } 
  99  | 
  100 |   }
  101 |   
  102 | 
  103 | 
  104 | }
```