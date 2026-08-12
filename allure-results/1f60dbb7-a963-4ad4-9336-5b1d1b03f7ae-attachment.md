# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: admanagement.spec.js >> Functional Testing >> TC-27: Verify when user click on newadbtn then create new add page is displayed
- Location: tests/admanagement.spec.js:25:3

# Error details

```
Test timeout of 30000ms exceeded while running "beforeEach" hook.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('xpath=(//a[normalize-space()=\'Super Admin\'])[1]')
    - waiting for" https://admin-staginggs.vplayed.com/" navigation to finish...
    - navigated to "https://admin-staginggs.vplayed.com/"

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
  17 |     this.adnameplaceholder = page.locator("//h4[contains(text(), 'AD Name')]/following::input[@class='mat-input-element mat-form-field-autofill-control ng-tns-c20-61 ng-untouched ng-pristine ng-invalid cdk-text-field-autofill-monitored']");
  18 |     this.adurlheading = page.locator("(//h4[normalize-space()='AD Url*'])[1]");
  19 |     this.adurlplaceholder = page.locator("//h4[contains(text(), 'AD Url')]/following::textarea[@data-placeholder='Enter Ad URL']");
  20 |     this.supportplatformheading = page.locator("(//h4[normalize-space()='Support Platform*'])[1]");
  21 |     this.adsupportplatformplaceholder = page.locator("//h4[contains(text(), 'Support Platform')]/following::span[@class='mat-select-placeholder mat-select-min-line ng-tns-c21-64 ng-star-inserted']");
  22 |     this.orientationheading = page.locator("(//h4[normalize-space()='Orientation*'])[1]");
  23 |     this.adorientationplaceholder = page.locator("//h4[contains(text(), 'Orientation')]/following::span[@class='mat-select-placeholder mat-select-min-line ng-tns-c21-66 ng-star-inserted']");
  24 |   }
  25 | 
  26 |   async superadminclick() {
> 27 |     await this.superadminbtn.click();
     |                              ^ Error: locator.click: Test timeout of 30000ms exceeded.
  28 |   }
  29 | 
  30 |   async newadclick() {
  31 |     await this.newadbtn.click();
  32 |   }
  33 |   
  34 | 
  35 | 
  36 | }
```