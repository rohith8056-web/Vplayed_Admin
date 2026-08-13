# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: admanagement/admanagement.spec.js >> Functional Testing >> TC-32: when the user enter the adname,url,support platform and orientation click on save then add should be saved and success should be displayed
- Location: tests/admanagement/admanagement.spec.js:114:3

# Error details

```
ReferenceError: adName is not defined
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
  37  |     //this.createddomaintype = page.locator("//span[normalize-space()='"+adName+"']/following::span[@class='sho-grids-title text-control fast-title-text ng-star-inserted'][1]");
> 38  |     this.createdadurl = page.locator("//span[normalize-space()='"+adName+"']/following::span[@class='mat-tooltip-trigger ng-star-inserted'][1]");
      |                                                                   ^ ReferenceError: adName is not defined
  39  |     this.createdsupportplatform = page.locator("//span[normalize-space()='"+adName+"']/following::span[@class='ng-star-inserted'][1]");
  40  |     this.createdorientation = page.locator("//span[normalize-space()='"+adName+"']/following::span[@class='ng-star-inserted'][3]");
  41  |   
  42  |   }
  43  | 
  44  |   async superadminclick() {
  45  |     await this.superadminbtn.click();
  46  |   }
  47  | 
  48  |   async adnameplaceholderclick() {
  49  |     await this.adnameplaceholder.click();
  50  |   }
  51  | 
  52  |   async adurlplaceholderclick() {
  53  |     await this.adurlplaceholder.click();
  54  |   }
  55  | 
  56  |   async newadclick() {
  57  |     await this.newadbtn.click();
  58  |     // Wait for the Create New Ads heading to appear to avoid flaky visibility assertions
  59  |     //await this.page.waitForSelector("//h3[normalize-space()='Create New Ads']", { state: 'visible', timeout: 10000 });
  60  |   }
  61  | 
  62  |   async savebtnclick() {
  63  |     await this.savebtn.click();
  64  |   }
  65  | 
  66  |   async adnamefill(adname) {
  67  |     await this.adnameplaceholder.fill(adname);
  68  |   }
  69  | 
  70  |   async adurlfill(url) {
  71  |     await this.adurlplaceholder.fill(url);
  72  |   }
  73  | 
  74  | 
  75  |   /*async supportplatformfill(platform) {
  76  | 
  77  |    await this.adsupportplatformplaceholder.click();
  78  |    await this.page.waitForSelector("//span[@class='mat-option-text']", { state: 'visible' });
  79  |     const total = await this.supportplatformlist.count();
  80  |     for (let index = 0; index < total; index++) {
  81  |       const element = this.supportplatformlist.nth(index);
  82  |       const text = await element.innerText();
  83  |       console.log("Support Platform Options: " + text);
  84  |       if (text.includes(platform)) {
  85  |         await element.click();
  86  |         break;
  87  |       }
  88  |     } 
  89  | 
  90  | 
  91  |   }*/
  92  | 
  93  |   /*async orientationfill(orientation) {
  94  | 
  95  |    await this.adorientationplaceholder.click();
  96  |    await this.page.waitForSelector("//span[@class='mat-option-text']", { state: 'visible' });
  97  |     const total = await this.orientationlist.count();
  98  |     for (let index = 0; index < total; index++) {
  99  |       const element = this.orientationlist.nth(index);
  100 |       const text = await element.innerText();
  101 |       console.log("Orientation Options: " + text);
  102 |       if (text.includes(orientation)) {
  103 |         await element.click();
  104 |         break;
  105 |       }
  106 |     } 
  107 | 
  108 |   }*/
  109 |   
  110 | 
  111 | 
  112 | }
```