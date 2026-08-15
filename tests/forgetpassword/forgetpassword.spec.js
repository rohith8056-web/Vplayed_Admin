import { expect } from "@playwright/test";
import { forgetpassword } from "../../pages/forgetpasswordpage.js";
import { test } from "../../fixtures/data.fixture.js";

let Forgetpassword;

  test.beforeEach(async ({ page }) => {
    Forgetpassword = new forgetpassword(page);
    await Forgetpassword.openLoginPage();
  });

test.describe("Forgot password page", () => {

  test('TC-15: Page loads with correct URL and heading', async ({ page }) => {
    await Forgetpassword.forgotPasswordLink.click();
    await expect(Forgetpassword.page).toHaveURL(/forgot-password/);
    await page.waitForTimeout(5000);
    await expect(Forgetpassword.forgotPasswordHeading).toBeVisible();
    await expect(Forgetpassword.forgotPasswordHeading).toHaveText('Forgot your password?');
  });


  test("TC-16: Displays the forgot password instructions", async ({ page, forgetpassdatafixture }) => {
    await Forgetpassword.forgotPasswordLink.click();
    await page.waitForTimeout(5000);
    await expect(Forgetpassword.forgotPasswordInstructions).toBeVisible();
    await expect(Forgetpassword.forgotPasswordInstructions).toContainText(forgetpassdatafixture.TC16.assert1);
    await expect(Forgetpassword.forgotPasswordInstructions).toContainText(forgetpassdatafixture.TC16.assert2);
  });

  test('TC17 - Email ID field and Send button are visible', async ({ page, forgetpassdatafixture }) => {
    await Forgetpassword.forgotPasswordLink.click();  
    await expect(Forgetpassword.emailInputfield).toBeVisible();
    await expect(Forgetpassword.emailInputfield).toHaveText(forgetpassdatafixture.TC17.assert1);
    await expect(Forgetpassword.sendVerificationCodeBtn).toBeVisible();
    await expect(Forgetpassword.sendVerificationCodeBtn).toBeEnabled();
    await expect(Forgetpassword.sendVerificationCodeBtn).toHaveText(forgetpassdatafixture.TC17.assert2);
  });

  test('TC18 - Email field accepts and reflects typed input', async ({ page, forgetpassdatafixture }) => {
    const testEmail = forgetpassdatafixture.TC18.Email;
    await Forgetpassword.forgotPasswordLink.click(); 
    await Forgetpassword.enterEmail(testEmail);
    await expect(await Forgetpassword.getEmailValue()).toBe(testEmail);
  });

  test('TC19 - Submitting with empty email shows validation error', async () => {
    await Forgetpassword.forgotPasswordLink.click();
    await Forgetpassword.clickSendVerificationCode();
    await expect(Forgetpassword.emptyemailvalidationerror).toHaveText('Email Address is required');
  });

  test('TC20 - Submitting with invalid email format shows validation error', async ({ page, forgetpassdatafixture }) => {
    await Forgetpassword.forgotPasswordLink.click();  
    await Forgetpassword.enterEmail(forgetpassdatafixture.TC20.Email);
    await Forgetpassword.clickSendVerificationCode(); 
    await expect(Forgetpassword.invalidemailvalidationerror).toHaveText('Please enter a valid email address');
  });

  test('TC21 - Submitting with a valid but unregistered email shows an error message', async ({ page, forgetpassdatafixture }) => {
    await Forgetpassword.forgotPasswordLink.click();
    await Forgetpassword.enterEmail(forgetpassdatafixture.TC21.Email);
    await Forgetpassword.clickSendVerificationCode();
    await expect(Forgetpassword.unregisteredEmailError).toHaveText('× This email is not registered');
  });
   
  test('TC22 - Submitting with a valid registered email shows success confirmation', async ({ page, forgetpassdatafixture }) => {
    await Forgetpassword.forgetpasswordsubmit(forgetpassdatafixture.TC22.Email);
    await expect(Forgetpassword.otpsuccess).toHaveText('× OTP Sent Successfully');
    await expect(Forgetpassword.checkyouremailtoast).toHaveText('Check your mail');
    await expect(Forgetpassword.checkyouremailtoastinfo).toHaveText('We have sent a password verification code to your mail');
  });

  test('TC23 - OTP page is displaying as per the expected', async ({ page, forgetpassdatafixture }) => {
    await Forgetpassword.forgetpasswordsubmit(forgetpassdatafixture.TC23.Email);
    await expect(Forgetpassword.otppageheading).toHaveText('Enter 6 digit code');
    await expect(Forgetpassword.otppageheadinginfo).toHaveText('Code was sent to admingsvplayed@gmail.com Edit ');
  });

  test('TC24 - Resend timer is running on Resend Code text', async ({ page, forgetpassdatafixture }) => {
    await Forgetpassword.forgetpasswordsubmit(forgetpassdatafixture.TC24.Email);
    await expect(Forgetpassword.resendcode).toHaveText('Resend Code in 59 Sec');
    const firstText = (await Forgetpassword.resendcode.textContent());
    console.log("First Text: ", firstText);
    await page.waitForTimeout(1500);
    const secondText = (await Forgetpassword.resendcode.textContent());
    console.log("Second Text: ", secondText);
    expect(secondText).not.toBe(firstText);
  });

  test('TC25 - Resend timer is running on Resend Code text', async ({ page, forgetpassdatafixture }) => {

    test.setTimeout(400000);
    await Forgetpassword.forgetpasswordsubmit(forgetpassdatafixture.TC25.Email);
    await page.waitForTimeout(61000);
    await expect(Forgetpassword.resendcode).toHaveText('Resend Code (1/5)');
    await Forgetpassword.resendcodeclick();
    await expect(Forgetpassword.otpsuccess).toHaveText('× OTP Sent Successfully');
    await expect(Forgetpassword.checkyouremailtoast).toHaveText(' Check your mail');
    await expect(Forgetpassword.checkyouremailtoastinfo).toHaveText('We have sent a password verification code to your mail');
    await page.waitForTimeout(61000);
    await expect(Forgetpassword.resendcode).toHaveText('Resend Code (2/5)');
    await Forgetpassword.resendcodeclick();
    await expect(Forgetpassword.otpsuccess).toHaveText('× OTP Sent Successfully');
    await expect(Forgetpassword.checkyouremailtoast).toHaveText(' Check your mail');
    await expect(Forgetpassword.checkyouremailtoastinfo).toHaveText('We have sent a password verification code to your mail');
    await page.waitForTimeout(61000);
    await expect(Forgetpassword.resendcode).toHaveText('Resend Code (3/5)');
  });


  test('TC26 - when the user click on the go back to sign in then sign in page is displayed', async ({ page, forgetpassdatafixture, logindatafixture }) => {

    await Forgetpassword.forgetpasswordsubmit(forgetpassdatafixture.TC25.Email);
    await expect(Forgetpassword.gobacktosignin).toHaveText('Go back to  Sign In');
    await Forgetpassword.forgetpasswordpagesigninclick();
    await page.waitForTimeout(3000);
    await expect(Forgetpassword.page).toHaveURL("/");
    await expect(Forgetpassword.loginPageHeading).toHaveText(logindatafixture.TC01.assert);
    await expect(Forgetpassword.signInIntroText).toHaveText(logindatafixture.TC02.assert);
    await expect(Forgetpassword.forgotPasswordLink).toHaveText(logindatafixture.TC03.assert);
    await expect(Forgetpassword.emailInput).toHaveText(logindatafixture.TC04.assert);
    await expect(Forgetpassword.passwordPlaceholder).toHaveText(logindatafixture.TC05.assert);


  });
  
});