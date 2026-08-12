
export class Basepage {

  constructor(page) 
  {
    this.page = page;
    this.emailInput = page.locator('//*[@id="body"]/app-root/div/app-gud-sign-in/div/div/form/div[1]/div/label');
    this.passwordInput = page.locator("#password");
    this.signInButton = page.getByRole("button", { name: "Sign In" }).first();
  }

  async openLoginPage() {
    await this.page.goto("https://admin-staginggs.vplayed.com");
  }

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

}