import { Basepage } from "./basepage.js";
export class admanagement extends Basepage {

  constructor(page) 
  {

    super(page);
    this.page = page;
    this.superadminbtn = page.locator("(//a[normalize-space()='Super Admin'])[1]");
    this.addmanagementbtn = page.locator("//a[normalize-space()='Ad Management']");
    this.heading = page.locator("(//h4[normalize-space()='Ad Management'])[1]");
    this.newadbtn = page.locator("//button[@class='mat-focus-indicator mat-ripple flex hover-shadow button is-icon blue small is-space mat-button mat-button-base ng-star-inserted']//span[@class='mat-button-wrapper']");
    this.createnewadsheading = page.locator("//h3[normalize-space()='Create New Ads']");
    this.createnewadsubheading = page.locator("(//h4[normalize-space()='Create Ad'])[1]");
    this.creatednewadssubtext = page.locator("//span[@class='normal']");
    this.adnameheading = page.locator("(//h4[normalize-space()='AD Name*'])[1]");
    // Use a stable relative locator for the AD Name input instead of dynamic IDs
    this.adnameplaceholder = page.locator("//h4[normalize-space()='AD Name*']/following::input[1]");
    this.adurlheading = page.locator("(//h4[normalize-space()='AD Url*'])[1]");
    // Use a relative locator for the AD Url textarea to avoid relying on dynamic IDs
    this.adurlplaceholder = page.locator("//h4[normalize-space()='AD Url*']/following::textarea[1]");
    this.supportplatformheading = page.locator("(//h4[normalize-space()='Support Platform*'])[1]");
    // Use a relative locator for the support platform placeholder to avoid brittle class/index selectors
    this.adsupportplatformplaceholder = page.locator("//h4[normalize-space()='Support Platform*']/following::span[contains(@class,'mat-select-placeholder')][1]");
    this.supportplatformlist = page.locator("//span[@class='mat-option-text']");  //support platform list
    this.orientationheading = page.locator("(//h4[normalize-space()='Orientation*'])[1]");
    // Use a relative locator for the orientation placeholder to avoid brittle class/index selectors
    this.adorientationplaceholder = page.locator("//h4[normalize-space()='Orientation*']/following::span[contains(@class,'mat-select-placeholder')][1]");
    this.orientationlist = page.locator("//span[@class='mat-option-text']");  //orientation list
    this.savebtn = page.locator("//span[normalize-space()='Save']");
    this.adnameerror = page.locator("//span[normalize-space()='Ad Name is required']");
    this.adurlerror = page.locator("//span[normalize-space()='Ad Url is required']");
    this.supportplatformerror = page.locator("//span[normalize-space()='Support platform is required']");
    this.orientationerror = page.locator("//span[normalize-space()='Orientation Type is required']");
    this.adsuccessmsg = page.locator("//div[@role='alertdialog']");
  }

  async superadminclick() {
    await this.superadminbtn.click();
  }

  async adnameplaceholderclick() {
    await this.adnameplaceholder.click();
  }

  async adurlplaceholderclick() {
    await this.adurlplaceholder.click();
  }

  async newadclick() {
    await this.newadbtn.click();
    // Wait for the Create New Ads heading to appear to avoid flaky visibility assertions
    //await this.page.waitForSelector("//h3[normalize-space()='Create New Ads']", { state: 'visible', timeout: 10000 });
  }

  async savebtnclick() {
    await this.savebtn.click();
  }

  async adnamefill(adname) {
    await this.adnameplaceholder.fill(adname);
  }

  async adurlfill(url) {
    await this.adurlplaceholder.fill(url);
  }

  async supportplatformfill(platform) {

   await this.adsupportplatformplaceholder.click();
   await this.page.waitForSelector("//span[@class='mat-option-text']", { state: 'visible' });
    const total = await this.supportplatformlist.count();
    for (let index = 0; index < total; index++) {
      const element = this.supportplatformlist.nth(index);
      const text = await element.innerText();
      console.log("Support Platform Options: " + text);
      if (text.includes(platform)) {
        await element.click();
        break;
      }
    } 


  }

  async orientationfill(orientation) {

   await this.adorientationplaceholder.click();
   await this.page.waitForSelector("//span[@class='mat-option-text']", { state: 'visible' });
    const total = await this.orientationlist.count();
    for (let index = 0; index < total; index++) {
      const element = this.orientationlist.nth(index);
      const text = await element.innerText();
      console.log("Orientation Options: " + text);
      if (text.includes(orientation)) {
        await element.click();
        break;
      }
    } 

  }
  


}