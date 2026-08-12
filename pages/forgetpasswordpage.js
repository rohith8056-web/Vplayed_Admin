import { SigninPage } from "./loginpage.js";
export class forgetpassword extends SigninPage {

  constructor(page) 
  {
    super(page);
    this.forgotPasswordLink = page.getByText("Forgot Password?");
    this.forgotPasswordHeading = page.getByText("Forgot your password?");
    this.forgotPasswordInstructions = page.locator("//p[@class='sign-in-desc']");
    this.forgotPasswordHeading = page.getByText("Forgot your password?");
    this.forgotPasswordInstructions = page.locator("//p[@class='sign-in-desc']");
    this.emailInputfield = page.locator("//label[@for='phoneEmail']");
    this.emailInputfieldfill = page.locator("//input[@type='email']");
    this.sendVerificationCodeBtn = page.locator("//button[@type='submit']");
    this.emptyemailvalidationerror = page.locator("//div[normalize-space(text())='Email Address is required']");
    this.invalidemailvalidationerror = page.locator("//div[normalize-space(text())='Please enter a valid email address']");
    this.unregisteredEmailError = page.locator("//div[normalize-space(@id)='toast-container']");
    this.otpsuccess = page.locator("//div[normalize-space(@id)='toast-container']");
    this.checkyouremailtoast = page.locator("//h2[normalize-space(text())]");
    this.checkyouremailtoastinfo = page.locator("//p[normalize-space(text())]").nth(2);
    this.otppageheading = page.locator("//h1[normalize-space()='Enter 6 digit code']");
    this.otppageheadinginfo = page.locator("//p[@class='sign-in-desc']")
    this.resendcode = page.locator("//p[normalize-space(@class)='resend-timer ng-star-inserted']");
    this.gobacktosignin = page.locator("//p[normalize-space(@class)='back-to text-center']");
    this.forgetpasswordsigninclick = page.locator("//span[@class='cursor forgot-pass underline']");

  }

  async openLoginPage() {
    await this.page.goto("https://admin-staginggs.vplayed.com");
  }

  async resendcodeclick() {
    await this.resendcode.click();
  }

  async forgetpasswordsubmit(email) {
    await this.forgotPasswordLink.click();
    await this.emailInputfield.click();
    await this.emailInputfieldfill.fill(email);
    await this.sendVerificationCodeBtn.click();
  }

  async enterEmail(email) {
    await this.emailInputfield.click();
    await this.emailInputfieldfill.fill(email);
  }

  async getEmailValue() {
    return this.emailInputfieldfill.inputValue();
  }

  async clickSendVerificationCode() {
    await this.sendVerificationCodeBtn.click();
  }

  async forgetpasswordpagesigninclick() {
    await this.forgetpasswordsigninclick.click();
  }
  
}