# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login/login.spec.js >> Functional Testing >> TC-03: Displays the forgot password link
- Location: tests/login/login.spec.js:22:3

# Error details

```
Error: toContainText can be only used with Locator object, was called with undefined
```

# Page snapshot

```yaml
- generic [ref=e6]:
  - img "Vplayed" [ref=e9]
  - heading "Log in to your Account" [level=1] [ref=e10]
  - paragraph [ref=e11]: Nice to see you! Sign in now & lets get started.
  - generic [ref=e12]:
    - generic [ref=e14]:
      - textbox "Email ID" [active] [ref=e15]
      - generic [ref=e16]: Email ID
    - generic [ref=e18]:
      - textbox "Password" [ref=e19]
      - generic [ref=e20]: Password
    - paragraph [ref=e21] [cursor=pointer]: Forgot Password?
    - button "Sign In" [ref=e24] [cursor=pointer]:
      - generic [ref=e25]: Sign In
```

# Test source

```ts
  1   | import { expect } from "@playwright/test";
  2   | import { SigninPage } from "../../pages/loginpage.js";
  3   | import { test } from "../../fixtures/data.fixture.js";
  4   | 
  5   | let signinPage; 
  6   | 
  7   | test.beforeEach(async ({ page }) => {
  8   |     signinPage = new SigninPage(page);
  9   |     await signinPage.openLoginPage();
  10  |   });
  11  | 
  12  | test.describe("Functional Testing", () => {
  13  |   
  14  |   test("TC-01: Displays the login page heading", async ({ page, logindatafixture }) => {
  15  |     await expect(signinPage.loginPageHeading).toContainText(logindatafixture.TC01.assert);
  16  |   });
  17  | 
  18  |   test("TC-02: Displays the sign-in intro text", async ({ page, logindatafixture }) => {
  19  |     await expect(signinPage.signInIntroText).toContainText(logindatafixture.TC02.assert);
  20  |   });
  21  | 
  22  |   test("TC-03: Displays the forgot password link", async ({ page, logindatafixture }) => {
> 23  |     await expect(signinPage.forgotPasswordLink).toContainText(logindatafixture.TC03.assert);
      |                                                 ^ Error: toContainText can be only used with Locator object, was called with undefined
  24  |   });
  25  | 
  26  |   test("TC-04: Displays the email field placeholder", async ({ page, logindatafixture }) => {
  27  |     await expect(signinPage.emailInput).toContainText(logindatafixture.TC04.assert);
  28  |   });
  29  | 
  30  |   test("TC-05: Displays the password field placeholder", async ({ page, logindatafixture }) => {
  31  |     await expect(signinPage.passwordPlaceholder).toContainText(logindatafixture.TC05.assert);
  32  |   });
  33  | 
  34  |   test("TC-06: Verify validation errors for empty email and password", async ({ page, logindatafixture }) => {
  35  |     await signinPage.submit();
  36  |     await expect(signinPage.emailRequiredMessage).toContainText(logindatafixture.TC06.assert1);
  37  |     await expect(signinPage.passwordRequiredMessage).toContainText(logindatafixture.TC06.assert2);
  38  |   });
  39  | 
  40  |   test("TC-07: Verify email validation when password is provided and email is empty", async ({ page, logindatafixture }) => {
  41  |     await signinPage.fillPassword(logindatafixture.TC07.password);
  42  |     await signinPage.submit();
  43  |     await expect(signinPage.emailRequiredMessage).toContainText(logindatafixture.TC07.assert);
  44  |   });
  45  | 
  46  |   test("TC-08: Verify password validation when password is empty", async ({ page, logindatafixture }) => {
  47  |     await signinPage.fillEmail(logindatafixture.TC08.email);
  48  |     await signinPage.submit();
  49  |     await expect(signinPage.passwordRequiredMessage).toContainText(logindatafixture.TC08.assert)
  50  |   });
  51  | 
  52  |   test("TC-09: Rejects login for an unregistered email", async ({ page, logindatafixture }) => {
  53  |     await signinPage.login(logindatafixture.TC09.email, logindatafixture.TC09.password);
  54  |     await expect(signinPage.toastContainer).toContainText(logindatafixture.TC09.assert);
  55  |   });
  56  | 
  57  |   test("TC-10: Rejects login with invalid credentials", async ({ page, logindatafixture }) => {
  58  |     await signinPage.login(logindatafixture.TC10.email, logindatafixture.TC10.password);
  59  |     await expect(signinPage.toastContainer).toContainText(logindatafixture.TC10.assert);
  60  |   });
  61  | 
  62  |   test("TC-11: Verify validation for an invalid email format", async ({ page, logindatafixture }) => {
  63  |     await signinPage.login(logindatafixture.TC11.email, logindatafixture.TC11.password);
  64  |     await expect(signinPage.invalidEmailMessage).toContainText(logindatafixture.TC11.assert);
  65  |   });
  66  | 
  67  |   test("TC-12: Verify validation for an incorrectly formatted email", async ({ page, logindatafixture }) => {
  68  |     await signinPage.fillEmail(logindatafixture.TC12.email);
  69  |     await expect(signinPage.invalidEmailFormatMessage).toContainText(logindatafixture.TC12.assert);
  70  |   });
  71  | 
  72  |   test("TC-13: Logs in successfully with valid credentials", async ({ page, logindatafixture }) => {
  73  |     await signinPage.login(logindatafixture.TC13.email, logindatafixture.TC13.password);
  74  |     await page.waitForTimeout(3000);
  75  |     await expect(signinPage.successToast).toContainText(logindatafixture.TC13.assert);
  76  |   });
  77  | 
  78  |   test("TC-14: Toggles password visibility with the eye icon", async ({ page, logindatafixture }) => {
  79  |     await signinPage.fillEmail(logindatafixture.TC14.email);
  80  |     await signinPage.fillPassword(logindatafixture.TC14.password);
  81  |     await signinPage.togglePasswordVisibility();
  82  |     await expect(signinPage.passwordInput).toHaveAttribute("type", "text");
  83  |     await signinPage.hidePasswordVisibility();
  84  |     await expect(signinPage.passwordInput).toHaveAttribute("type", "password");
  85  |   });
  86  | 
  87  | });
  88  | 
  89  | 
  90  | test.describe("Positive Cases", () => {
  91  |   
  92  |   test("TC-01: Displays the login page heading", async ({ page, logindatafixture }) => {
  93  |     await expect(signinPage.loginPageHeading).toContainText(logindatafixture.TC01.assert);
  94  |   });
  95  | 
  96  |   test("TC-02: Displays the sign-in intro text", async ({ page, logindatafixture }) => {
  97  |     await expect(signinPage.signInIntroText).toContainText(logindatafixture.TC02.assert);
  98  |   });
  99  | 
  100 |   test("TC-03: Displays the forgot password link", async ({ page, logindatafixture }) => {
  101 |     await expect(signinPage.forgotPasswordLink).toContainText(logindatafixture.TC03.assert);
  102 |   });
  103 | 
  104 |   test("TC-04: Displays the email field placeholder", async ({ page, logindatafixture }) => {
  105 |     await expect(signinPage.emailInput).toContainText(logindatafixture.TC04.assert);
  106 |   });
  107 | 
  108 |   test("TC-05: Displays the password field placeholder", async ({ page, logindatafixture }) => {
  109 |     await expect(signinPage.passwordPlaceholder).toContainText(logindatafixture.TC05.assert);
  110 |   });
  111 | 
  112 |   test("TC-13: Logs in successfully with valid credentials", async ({ page, logindatafixture }) => {
  113 |     await signinPage.login(logindatafixture.TC13.email, logindatafixture.TC13.password);
  114 |     await page.waitForTimeout(7000);
  115 |     await expect(signinPage.successToast).toContainText(logindatafixture.TC13.assert);
  116 |   });
  117 | 
  118 |   test("TC-14: Toggles password visibility with the eye icon", async ({ page, logindatafixture }) => {
  119 |     await signinPage.fillEmail(logindatafixture.TC14.email);
  120 |     await signinPage.fillPassword(logindatafixture.TC14.password);
  121 |     await signinPage.togglePasswordVisibility();
  122 |     await expect(signinPage.passwordInput).toHaveAttribute("type", "text");
  123 |     await signinPage.hidePasswordVisibility();
```