# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.js >> Functional Testing >> TC-13: Logs in successfully with valid credentials
- Location: tests/login.spec.js:72:3

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('//div[@class=\'ng-tns-c1-1 ng-star-inserted ng-trigger ng-trigger-flyInOut ngx-toastr toast-success\']')
Expected substring: "Good, You have logged in successfully"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('//div[@class=\'ng-tns-c1-1 ng-star-inserted ng-trigger ng-trigger-flyInOut ngx-toastr toast-success\']')

```

```yaml
- banner:
  - img "Vplayed light logo"
  - list:
    - listitem: Super Admin
    - listitem: Dashboard
    - listitem: Channel
    - listitem: Titles
    - listitem: Live
    - listitem: Bulk Purchase
    - listitem: Insights
    - listitem: Reports
  - button:
    - img
  - button
  - img "Vplayed"
  - img
- list:
  - listitem:
    - heading "Channel Performance" [level=2]
    - list:
      - listitem:
        - paragraph:
          - text: Pay Per Views
          - img
        - heading "358" [level=3]
        - paragraph:
          - text: Coins
          - img
        - heading "13" [level=3]
        - paragraph:
          - text: Donations
          - img
        - heading "22" [level=3]
        - paragraph:
          - text: Bulk Purchase
          - img
        - heading "33" [level=3]
    - combobox "Last 7 days"
    - text: "Currency:"
    - combobox "₹ INR"
    - list:
      - listitem:
        - paragraph: Pay Per Views
        - heading "₹0" [level=2]
        - text: From 0 0% 7 days
        - paragraph: Donations
        - heading "₹0" [level=2]
        - text: From 0 0% 7 days
        - paragraph: Earned Coins
        - heading "0" [level=2]:
          - img
          - text: "0"
        - text: From 0 -100% 7 days
        - paragraph: Bulk Purchase
        - heading "₹0" [level=2]
        - text: From 0 0% 7 days
    - list:
      - listitem: Channel Views 0 0%
      - listitem: Total Watchtime 7s -92%
      - listitem: Average Watchtime 2s -96%
      - listitem: Total Amount ₹ 0 0%
      - listitem: Channel Shares 0 0%
    - heading "Promo Performance" [level=2]
    - heading "Promos" [level=3]
    - text: sanity video
    - img
    - combobox "Last 7 days"
    - list:
      - listitem:
        - paragraph:
          - text: Impression
          - img
        - heading "1" [level=3]
        - text: "-50% 7 days"
        - paragraph:
          - text: Conversion Rate
          - img
        - heading "0%" [level=3]
        - text: 0% 7 days
    - list:
      - listitem: Total Watchtime 0s
      - listitem: Average Watchtime 0s
      - listitem: Likes 0
      - listitem: Shares 0
    - heading "Device Based Transaction" [level=4]
    - combobox "Last 7 days"
    - img
    - text: Total Transactions 0
    - heading "0" [level=4]
    - list:
      - listitem:
        - paragraph: Web
    - heading "0" [level=4]
    - list:
      - listitem:
        - paragraph: Android
    - heading "0" [level=4]
    - list:
      - listitem:
        - paragraph: IOS
  - listitem:
    - heading "Content Performance Metrics" [level=2]:
      - text: Content Performance Metrics
      - img
    - heading "Titles" [level=3]
    - text: Mahaan
    - img
    - combobox "Last 7 days"
    - text: "Currency:"
    - combobox "₹ INR"
    - list:
      - listitem:
        - paragraph:
          - text: Impression
          - img
        - heading "0" [level=3]
        - text: 0% 7 days
        - paragraph:
          - text: Free Played
          - img
        - heading "0" [level=3]
        - text: 0% 7 days
        - paragraph:
          - text: Donations
          - img
        - heading "0" [level=3]
        - text: 0% 7 days
        - paragraph:
          - text: Donated Amount
          - img
        - heading "₹ 0" [level=3]
        - text: 0% 7 days
    - list:
      - listitem: Total Watchtime 0s
      - listitem: Average Watchtime 0s
      - listitem: Comments 0
      - listitem: Promos Played 0
      - listitem: Ratings 0
      - listitem: Shares 0
    - heading "Total Transactions" [level=2]
    - combobox "Last 7 days"
    - list:
      - listitem: Transaction Status Count
    - list:
      - listitem: Successful Transactions 0
      - listitem: Failed Transactions 0
  - listitem:
    - heading "Top 3 Contents" [level=2]:
      - text: Top 3 Contents
      - img
    - combobox "Last 7 days"
    - combobox "Plays"
    - list:
      - listitem: Videos Plays
    - list:
      - listitem: 1. Learn English Conversation_ Weather and Small Talk 4
    - text: See More
    - heading "Top 3 Genre" [level=2]
    - combobox "Last 7 days"
    - img "placeholder"
    - heading "No data found" [level=4]
    - heading "Customer Activities" [level=2]
    - combobox "Last 7 days"
    - list:
      - listitem: Promos Watched 0
      - listitem: Ratings 0
      - listitem: Video Shares 0
      - listitem: Comments 0
```

# Test source

```ts
  1   | import { expect } from "@playwright/test";
  2   | import { SigninPage } from "../pages/loginpage";
  3   | import { test } from "../fixtures/data.fixture.js";
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
  23  |     await expect(signinPage.forgotPasswordLink).toContainText(logindatafixture.TC03.assert);
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
  74  |     await page.waitForTimeout(11000);
> 75  |     await expect(signinPage.successToast).toContainText(logindatafixture.TC13.assert);
      |                                           ^ Error: expect(locator).toContainText(expected) failed
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
  124 |     await expect(signinPage.passwordInput).toHaveAttribute("type", "password");
  125 |   });
  126 | 
  127 | });
  128 | 
  129 | 
  130 | test.describe("Negative Cases", () => {
  131 |   
  132 |   test("TC-06: Verify validation errors for empty email and password", async ({ page, logindatafixture }) => {
  133 |     await signinPage.submit();
  134 |     await expect(signinPage.emailRequiredMessage).toContainText(logindatafixture.TC06.assert1);
  135 |     await expect(signinPage.passwordRequiredMessage).toContainText(logindatafixture.TC06.assert2);
  136 |   });
  137 | 
  138 |   test("TC-07: Verify email validation when password is provided and email is empty", async ({ page, logindatafixture }) => {
  139 |     await signinPage.fillPassword(logindatafixture.TC07.password);
  140 |     await signinPage.submit();
  141 |     await expect(signinPage.emailRequiredMessage).toContainText(logindatafixture.TC07.assert);
  142 |   });
  143 | 
  144 |   test("TC-08: Verify password validation when password is empty", async ({ page, logindatafixture }) => {
  145 |     await signinPage.fillEmail(logindatafixture.TC08.email);
  146 |     await signinPage.submit();
  147 |     await expect(signinPage.passwordRequiredMessage).toContainText(logindatafixture.TC08.assert)
  148 |   });
  149 | 
  150 |   test("TC-09: Rejects login for an unregistered email", async ({ page, logindatafixture }) => {
  151 |     await signinPage.login(logindatafixture.TC09.email, logindatafixture.TC09.password);
  152 |     await expect(signinPage.toastContainer).toContainText(logindatafixture.TC09.assert);
  153 |   });
  154 | 
  155 |   test("TC-10: Rejects login with invalid credentials", async ({ page, logindatafixture }) => {
  156 |     await signinPage.login(logindatafixture.TC10.email, logindatafixture.TC10.password);
  157 |     await expect(signinPage.toastContainer).toContainText(logindatafixture.TC10.assert);
  158 |   });
  159 | 
  160 |   test("TC-11: Verify validation for an invalid email format", async ({ page, logindatafixture }) => {
  161 |     await signinPage.login(logindatafixture.TC11.email, logindatafixture.TC11.password);
  162 |     await expect(signinPage.invalidEmailMessage).toContainText(logindatafixture.TC11.assert);
  163 |   });
  164 | 
  165 |   test("TC-12: Verify validation for an incorrectly formatted email", async ({ page, logindatafixture }) => {
  166 |     await signinPage.fillEmail(logindatafixture.TC12.email);
  167 |     await expect(signinPage.invalidEmailFormatMessage).toContainText(logindatafixture.TC12.assert);
  168 |   });
  169 | 
  170 | });
```