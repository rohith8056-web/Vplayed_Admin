import { expect } from "@playwright/test";
import { SigninPage } from "../../pages/loginpage.js";
import { test } from "../../fixtures/data.fixture.js";

let signinPage; 

test.beforeEach(async ({ page }) => {
    signinPage = new SigninPage(page);
    await signinPage.openLoginPage();
  });

test.describe("Functional Testing", () => {
  
  test("TC-01: Displays the login page heading", async ({ page, logindatafixture }) => {
    await expect(signinPage.loginPageHeading).toContainText(logindatafixture.TC01.assert);
  });

  test("TC-02: Displays the sign-in intro text", async ({ page, logindatafixture }) => {
    await expect(signinPage.signInIntroText).toContainText(logindatafixture.TC02.assert);
  });

  test("TC-03: Displays the forgot password link", async ({ page, logindatafixture }) => {
    await expect(signinPage.forgotPasswordLink).toContainText(logindatafixture.TC03.assert);
  });

  test("TC-04: Displays the email field placeholder", async ({ page, logindatafixture }) => {
    await expect(signinPage.emailInput).toContainText(logindatafixture.TC04.assert);
  });

  test("TC-05: Displays the password field placeholder", async ({ page, logindatafixture }) => {
    await expect(signinPage.passwordPlaceholder).toContainText(logindatafixture.TC05.assert);
  });

  test("TC-06: Verify validation errors for empty email and password", async ({ page, logindatafixture }) => {
    await signinPage.submit();
    await expect(signinPage.emailRequiredMessage).toContainText(logindatafixture.TC06.assert1);
    await expect(signinPage.passwordRequiredMessage).toContainText(logindatafixture.TC06.assert2);
  });

  test("TC-07: Verify email validation when password is provided and email is empty", async ({ page, logindatafixture }) => {
    await signinPage.fillPassword(logindatafixture.TC07.password);
    await signinPage.submit();
    await expect(signinPage.emailRequiredMessage).toContainText(logindatafixture.TC07.assert);
  });

  test("TC-08: Verify password validation when password is empty", async ({ page, logindatafixture }) => {
    await signinPage.fillEmail(logindatafixture.TC08.email);
    await signinPage.submit();
    await expect(signinPage.passwordRequiredMessage).toContainText(logindatafixture.TC08.assert)
  });

  test("TC-09: Rejects login for an unregistered email", async ({ page, logindatafixture }) => {
    await signinPage.login(logindatafixture.TC09.email, logindatafixture.TC09.password);
    await expect(signinPage.toastContainer).toContainText(logindatafixture.TC09.assert);
  });

  test("TC-10: Rejects login with invalid credentials", async ({ page, logindatafixture }) => {
    await signinPage.login(logindatafixture.TC10.email, logindatafixture.TC10.password);
    await expect(signinPage.toastContainer).toContainText(logindatafixture.TC10.assert);
  });

  test("TC-11: Verify validation for an invalid email format", async ({ page, logindatafixture }) => {
    await signinPage.login(logindatafixture.TC11.email, logindatafixture.TC11.password);
    await expect(signinPage.invalidEmailMessage).toContainText(logindatafixture.TC11.assert);
  });

  test("TC-12: Verify validation for an incorrectly formatted email", async ({ page, logindatafixture }) => {
    await signinPage.fillEmail(logindatafixture.TC12.email);
    await expect(signinPage.invalidEmailFormatMessage).toContainText(logindatafixture.TC12.assert);
  });

  test("TC-13: Logs in successfully with valid credentials", async ({ page, logindatafixture }) => {
    await signinPage.login(logindatafixture.TC13.email, logindatafixture.TC13.password);
    await page.waitForTimeout(7000);
    await expect(signinPage.successToast).toContainText(logindatafixture.TC13.assert);
  });

  test("TC-14: Toggles password visibility with the eye icon", async ({ page, logindatafixture }) => {
    await signinPage.fillEmail(logindatafixture.TC14.email);
    await signinPage.fillPassword(logindatafixture.TC14.password);
    await signinPage.togglePasswordVisibility();
    await expect(signinPage.passwordInput).toHaveAttribute("type", "text");
    await signinPage.hidePasswordVisibility();
    await expect(signinPage.passwordInput).toHaveAttribute("type", "password");
  });

});


test.describe("Positive Cases", () => {
  
  test("TC-01: Displays the login page heading", async ({ page, logindatafixture }) => {
    await expect(signinPage.loginPageHeading).toContainText(logindatafixture.TC01.assert);
  });

  test("TC-02: Displays the sign-in intro text", async ({ page, logindatafixture }) => {
    await expect(signinPage.signInIntroText).toContainText(logindatafixture.TC02.assert);
  });

  test("TC-03: Displays the forgot password link", async ({ page, logindatafixture }) => {
    await expect(signinPage.forgotPasswordLink).toContainText(logindatafixture.TC03.assert);
  });

  test("TC-04: Displays the email field placeholder", async ({ page, logindatafixture }) => {
    await expect(signinPage.emailInput).toContainText(logindatafixture.TC04.assert);
  });

  test("TC-05: Displays the password field placeholder", async ({ page, logindatafixture }) => {
    await expect(signinPage.passwordPlaceholder).toContainText(logindatafixture.TC05.assert);
  });

  test("TC-13: Logs in successfully with valid credentials", async ({ page, logindatafixture }) => {
    await signinPage.login(logindatafixture.TC13.email, logindatafixture.TC13.password);
    await page.waitForTimeout(7000);
    await expect(signinPage.successToast).toContainText(logindatafixture.TC13.assert);
  });

  test("TC-14: Toggles password visibility with the eye icon", async ({ page, logindatafixture }) => {
    await signinPage.fillEmail(logindatafixture.TC14.email);
    await signinPage.fillPassword(logindatafixture.TC14.password);
    await signinPage.togglePasswordVisibility();
    await expect(signinPage.passwordInput).toHaveAttribute("type", "text");
    await signinPage.hidePasswordVisibility();
    await expect(signinPage.passwordInput).toHaveAttribute("type", "password");
  });

});


test.describe("Negative Cases", () => {
  
  test("TC-06: Verify validation errors for empty email and password", async ({ page, logindatafixture }) => {
    await signinPage.submit();
    await expect(signinPage.emailRequiredMessage).toContainText(logindatafixture.TC06.assert1);
    await expect(signinPage.passwordRequiredMessage).toContainText(logindatafixture.TC06.assert2);
  });

  test("TC-07: Verify email validation when password is provided and email is empty", async ({ page, logindatafixture }) => {
    await signinPage.fillPassword(logindatafixture.TC07.password);
    await signinPage.submit();
    await expect(signinPage.emailRequiredMessage).toContainText(logindatafixture.TC07.assert);
  });

  test("TC-08: Verify password validation when password is empty", async ({ page, logindatafixture }) => {
    await signinPage.fillEmail(logindatafixture.TC08.email);
    await signinPage.submit();
    await expect(signinPage.passwordRequiredMessage).toContainText(logindatafixture.TC08.assert)
  });

  test("TC-09: Rejects login for an unregistered email", async ({ page, logindatafixture }) => {
    await signinPage.login(logindatafixture.TC09.email, logindatafixture.TC09.password);
    await expect(signinPage.toastContainer).toContainText(logindatafixture.TC09.assert);
  });

  test("TC-10: Rejects login with invalid credentials", async ({ page, logindatafixture }) => {
    await signinPage.login(logindatafixture.TC10.email, logindatafixture.TC10.password);
    await expect(signinPage.toastContainer).toContainText(logindatafixture.TC10.assert);
  });

  test("TC-11: Verify validation for an invalid email format", async ({ page, logindatafixture }) => {
    await signinPage.login(logindatafixture.TC11.email, logindatafixture.TC11.password);
    await expect(signinPage.invalidEmailMessage).toContainText(logindatafixture.TC11.assert);
  });

  test("TC-12: Verify validation for an incorrectly formatted email", async ({ page, logindatafixture }) => {
    await signinPage.fillEmail(logindatafixture.TC12.email);
    await expect(signinPage.invalidEmailFormatMessage).toContainText(logindatafixture.TC12.assert);
  });

});