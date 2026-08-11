# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: forgetpassword.spec.js >> Forgot password page >> TC25 - Resend timer is running on Resend t
- Location: tests/forgetpassword.spec.js:112:3

# Error details

```
TypeError: expect(...).tohaveurl is not a function
```

# Page snapshot

```yaml
- generic [ref=e1]:
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
  - generic [ref=e26]:
    - button "Close" [ref=e27] [cursor=pointer]
    - alertdialog "OTP Sent Successfully" [ref=e28]
```

# Test source

```ts
  18  |     await expect(Forgetpassword.forgotPasswordHeading).toBeVisible();
  19  |     await expect(Forgetpassword.forgotPasswordHeading).toHaveText('Forgot your password?');
  20  |   });
  21  | 
  22  | 
  23  |   test("TC-16: Displays the forgot password instructions", async ({ page, forgetpassdatafixture }) => {
  24  |     await Forgetpassword.forgotPasswordLink.click();
  25  |     await page.waitForTimeout(5000);
  26  |     await expect(Forgetpassword.forgotPasswordInstructions).toBeVisible();
  27  |     await expect(Forgetpassword.forgotPasswordInstructions).toContainText(forgetpassdatafixture.TC16.assert1);
  28  |     await expect(Forgetpassword.forgotPasswordInstructions).toContainText(forgetpassdatafixture.TC16.assert2);
  29  |   });
  30  | 
  31  |   test('TC17 - Email ID field and Send button are visible', async ({ page, forgetpassdatafixture }) => {
  32  |     await Forgetpassword.forgotPasswordLink.click();  
  33  |     await expect(Forgetpassword.emailInputfield).toBeVisible();
  34  |     await expect(Forgetpassword.emailInputfield).toHaveText(forgetpassdatafixture.TC17.assert1);
  35  |     await expect(Forgetpassword.sendVerificationCodeBtn).toBeVisible();
  36  |     await expect(Forgetpassword.sendVerificationCodeBtn).toBeEnabled();
  37  |     await expect(Forgetpassword.sendVerificationCodeBtn).toHaveText(forgetpassdatafixture.TC17.assert2);
  38  |   });
  39  | 
  40  |   test('TC18 - Email field accepts and reflects typed input', async ({ page, forgetpassdatafixture }) => {
  41  |     const testEmail = forgetpassdatafixture.TC18.Email;
  42  |     await Forgetpassword.forgotPasswordLink.click(); 
  43  |     await Forgetpassword.enterEmail(testEmail);
  44  |     await expect(await Forgetpassword.getEmailValue()).toBe(testEmail);
  45  |   });
  46  | 
  47  |   test('TC19 - Submitting with empty email shows validation error', async () => {
  48  |     await Forgetpassword.forgotPasswordLink.click();
  49  |     await Forgetpassword.clickSendVerificationCode();
  50  |     await expect(Forgetpassword.emptyemailvalidationerror).toHaveText('Email Address is required');
  51  |   });
  52  | 
  53  |   test('TC20 - Submitting with invalid email format shows validation error', async ({ page, forgetpassdatafixture }) => {
  54  |     await Forgetpassword.forgotPasswordLink.click();  
  55  |     await Forgetpassword.enterEmail(forgetpassdatafixture.TC20.Email);
  56  |     await Forgetpassword.clickSendVerificationCode(); 
  57  |     await expect(Forgetpassword.invalidemailvalidationerror).toHaveText('Please enter a valid email address');
  58  |   });
  59  | 
  60  |   test('TC21 - Submitting with a valid but unregistered email shows an error message', async ({ page, forgetpassdatafixture }) => {
  61  |     await Forgetpassword.forgotPasswordLink.click();
  62  |     await Forgetpassword.enterEmail(forgetpassdatafixture.TC21.Email);
  63  |     await Forgetpassword.clickSendVerificationCode();
  64  |     await expect(Forgetpassword.unregisteredEmailError).toHaveText('× This email is not registered');
  65  |   });
  66  |    
  67  |   test('TC22 - Submitting with a valid registered email shows success confirmation', async ({ page, forgetpassdatafixture }) => {
  68  |     await Forgetpassword.forgetpasswordsubmit(forgetpassdatafixture.TC22.Email);
  69  |     await expect(Forgetpassword.otpsuccess).toHaveText('× OTP Sent Successfully');
  70  |     await expect(Forgetpassword.checkyouremailtoast).toHaveText('Check your mail');
  71  |     await expect(Forgetpassword.checkyouremailtoastinfo).toHaveText('We have sent a password verification code to your mail');
  72  |   });
  73  | 
  74  |   test('TC23 - OTP page is displaying as per the expected', async ({ page, forgetpassdatafixture }) => {
  75  |     await Forgetpassword.forgetpasswordsubmit(forgetpassdatafixture.TC23.Email);
  76  |     await expect(Forgetpassword.otppageheading).toHaveText('Enter 6 digit code');
  77  |     await expect(Forgetpassword.otppageheadinginfo).toHaveText('Code was sent to admingsvplayed@gmail.com Edit ');
  78  |   });
  79  | 
  80  |   test('TC24 - Resend timer is running on Resend Code text', async ({ page, forgetpassdatafixture }) => {
  81  |     await Forgetpassword.forgetpasswordsubmit(forgetpassdatafixture.TC24.Email);
  82  |     await expect(Forgetpassword.resendcode).toHaveText('Resend Code in 59 Sec');
  83  |     const firstText = (await Forgetpassword.resendcode.textContent());
  84  |     console.log("First Text: ", firstText);
  85  |     await page.waitForTimeout(1500);
  86  |     const secondText = (await Forgetpassword.resendcode.textContent());
  87  |     console.log("Second Text: ", secondText);
  88  |     expect(secondText).not.toBe(firstText);
  89  |   });
  90  | 
  91  |   test('TC25 - Resend timer is running on Resend Code text', async ({ page, forgetpassdatafixture }) => {
  92  | 
  93  |     test.setTimeout(400000);
  94  |     await Forgetpassword.forgetpasswordsubmit(forgetpassdatafixture.TC25.Email);
  95  |     await page.waitForTimeout(61000);
  96  |     await expect(Forgetpassword.resendcode).toHaveText('Resend Code (1/5)');
  97  |     await Forgetpassword.resendcodeclick();
  98  |     await expect(Forgetpassword.otpsuccess).toHaveText('× OTP Sent Successfully');
  99  |     await expect(Forgetpassword.checkyouremailtoast).toHaveText(' Check your mail');
  100 |     await expect(Forgetpassword.checkyouremailtoastinfo).toHaveText('We have sent a password verification code to your mail');
  101 |     await page.waitForTimeout(61000);
  102 |     await expect(Forgetpassword.resendcode).toHaveText('Resend Code (2/5)');
  103 |     await Forgetpassword.resendcodeclick();
  104 |     await expect(Forgetpassword.otpsuccess).toHaveText('× OTP Sent Successfully');
  105 |     await expect(Forgetpassword.checkyouremailtoast).toHaveText(' Check your mail');
  106 |     await expect(Forgetpassword.checkyouremailtoastinfo).toHaveText('We have sent a password verification code to your mail');
  107 |     await page.waitForTimeout(61000);
  108 |     await expect(Forgetpassword.resendcode).toHaveText('Resend Code (3/5)');
  109 |   });
  110 | 
  111 | 
  112 |   test('TC25 - Resend timer is running on Resend t', async ({ page, forgetpassdatafixture, logindatafixture }) => {
  113 | 
  114 |     await Forgetpassword.forgetpasswordsubmit(forgetpassdatafixture.TC25.Email);
  115 |     await expect(Forgetpassword.gobacktosignin).toHaveText('Go back to  Sign In');
  116 |     await Forgetpassword.forgetpasswordpagesigninclick();
  117 |     await page.waitForTimeout(3000);
> 118 |     await expect(Forgetpassword.forgetpasswordpagesigninclick).tohaveurl("https://admin-staginggs.vplayed.com/");
      |                                                                ^ TypeError: expect(...).tohaveurl is not a function
  119 |     await expect(Forgetpassword.loginPageHeading).toContainText(logindatafixture.TC01.assert);
  120 |     await expect(signinPage.signInIntroText).toContainText(logindatafixture.TC02.assert);
  121 |     await expect(signinPage.forgotPasswordLink).toContainText(logindatafixture.TC03.assert);
  122 |     await expect(signinPage.emailInput).toContainText(logindatafixture.TC04.assert);
  123 |     await expect(signinPage.passwordPlaceholder).toContainText(logindatafixture.TC05.assert);
  124 | 
  125 | 
  126 |   });
  127 |   
  128 | });
```