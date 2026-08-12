# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: admanagement.spec.js >> Functional Testing >> TC-26: Verify that admanagement page is displayed
- Location: tests/admanagement.spec.js:16:1

# Error details

```
Error: page.waitForTimeout: Test ended.
```

# Test source

```ts
  1  | import { expect } from "@playwright/test";
  2  | import { admanagement } from "../pages/admanagementpage.js";
  3  | import { test } from "../fixtures/data.fixture.js";
  4  | 
  5  | let adManagementPage; 
  6  | 
  7  | test.beforeEach(async ({ page }) => {
  8  |     adManagementPage = new admanagement(page);
  9  |     await adManagementPage.openLoginPage();
  10 |     await adManagementPage.login("admingsvplayed@gmail.com", "Welcome@123");
  11 |     await adManagementPage.superadminclick();
  12 |   });
  13 | 
  14 | test.describe("Functional Testing", () => {
  15 |   
  16 | test("TC-26: Verify that admanagement page is displayed", async ({ page }) => {
  17 | 
  18 |     await adManagementPage.addmanagementbtn.click();
> 19 |     page.waitForTimeout(5000);
     |          ^ Error: page.waitForTimeout: Test ended.
  20 |     await expect(adManagementPage.heading).toBeVisible();
  21 |     await expect(adManagementPage.heading).toHaveText('Ad Management');
  22 |    
  23 |   });
  24 | 
  25 |   
  26 | });
```