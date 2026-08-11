
export class SigninPage {

  constructor(page) 
  {
    this.page = page;
    this.loginPageHeading = page.getByText("Log in to your Account");
    this.signInIntroText = page.getByText("Nice to see you! Sign in now & lets get started.");
    this.emailInput = page.locator('//*[@id="body"]/app-root/div/app-gud-sign-in/div/div/form/div[1]/div/label');
    this.passwordInput = page.locator("#password");
    this.passwordPlaceholder = page.getByText("Password").first();
    this.signInButton = page.getByRole("button", { name: "Sign In" }).first();
    this.emailRequiredMessage = page.getByText("Email Address is required");
    this.passwordRequiredMessage = page.getByText("Password is required");
    this.invalidEmailMessage = page.getByText("Email must be a valid email address");
    this.invalidEmailFormatMessage = page.getByText("Please enter a valid email address");
    this.toastContainer = page.locator("#toast-container");
    this.successToast = page.locator("//div[@class='ng-tns-c1-1 ng-star-inserted ng-trigger ng-trigger-flyInOut ngx-toastr toast-success']");
    this.passwordToggle = page.locator("//div[@Class='show-pass']");
    this.forgotPasswordLink = page.getByText("Forgot Password?");
    this.forgotPasswordHeading = page.getByText("Forgot your password?");
    this.forgotPasswordInstructions = page.locator("//p[@class='sign-in-desc']");
  }

  async openLoginPage() {
    await this.page.goto("https://admin-staginggs.vplayed.com");
  }

  /*async openForgotPasswordPage() {
    await this.page.goto("https://admin-staginggs.vplayed.com/forgot-password");
  } */

  async fillEmail(email) {
    await this.emailInput.fill(email);
  }

  async fillPassword(password) {
    await this.passwordInput.fill(password);
  }

  async submit() {
    await this.signInButton.waitFor({ state: "visible" });
    await this.signInButton.click();
  }

  async login(email, password) {
    await this.fillEmail(email);
    await this.fillPassword(password);
    await this.submit();
  }

  async togglePasswordVisibility() {
    await this.passwordToggle.first().click();
  }

  async hidePasswordVisibility() {
    await this.passwordToggle.last().click();
  }
}