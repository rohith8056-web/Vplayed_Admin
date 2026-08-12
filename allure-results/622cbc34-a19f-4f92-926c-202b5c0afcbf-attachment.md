# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: admanagement.spec.js >> Functional Testing >> TC-01: Displays the login page heading
- Location: tests/admanagement.spec.js:14:3

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
  10 |   });
  11 | 
  12 | test.describe("Functional Testing", () => {
  13 |   
  14 |   test("TC-01: Displays the login page heading", async ({ ads }) => {
> 15 |    ads.page.waitForTimeout(5000);
     |             ^ Error: page.waitForTimeout: Test ended.
  16 |    
  17 |   });
  18 | 
  19 |   
  20 | });
```