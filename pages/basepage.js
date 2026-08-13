
export class Basepage {

  constructor(page) 
  {
    this.page = page;
    this.emailInput = page.locator('//*[@id="body"]/app-root/div/app-gud-sign-in/div/div/form/div[1]/div/label');
    this.passwordInput = page.locator("#password");
    this.signInButton = page.getByRole("button", { name: "Sign In" }).first();
    this.forgotPasswordLink = page.getByText("Forgot Password?");
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

   async textlselectionlist(placeholderLocator, selectorvisibility, listlocator, visibleText) {

   await placeholderLocator.click();
    await this.page.waitForSelector(selectorvisibility, { state: 'visible' });
    //const options = this.page.locator(optionsSelector);
    const total = await listlocator.count();
    for (let index = 0; index < total; index++) {
      const element = listlocator.nth(index);
      const text = await element.innerText();
      if (text.includes(visibleText)) {
        await element.click();
        break;
      }
    }
    //throw new Error(`Option "${visibleText}" not found using ${optionsSelector}`);
  }

}