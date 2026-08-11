import { expect, test } from "@playwright/test";
import { TIMEOUT } from "node:dns";

test("Verify Log in to your Account is displaying in the login page", async function ({ page }) {

    await page.goto("https://admin-staginggs.vplayed.com");
    await page.waitForTimeout(3000);
    await expect (page.getByText("Log in to your Account")).toContainText ("Log in to your Account");

});

test("Verify Nice to see you! Sign in now & lets get started is displaying in the login page", async function ({ page }) {

    await page.goto("https://admin-staginggs.vplayed.com");
    await page.waitForTimeout(3000);
    await expect (page.getByText("Nice to see you! Sign in now & lets get started.")).toContainText ("Nice to see you! Sign in now & lets get started.");

});

test("Verify Forgot Password? is displaying in the login page", async function ({ page }) {

    await page.goto("https://admin-staginggs.vplayed.com");
    await page.waitForTimeout(3000);
    await expect (page.getByText("Forgot Password?")).toContainText ("Forgot Password?");

});

test("Verify Email ID number is displaying in the login page login page email placeholder", async function ({ page }) {

    await page.goto("https://admin-staginggs.vplayed.com");
    await page.waitForTimeout(3000);
    await expect (page.getByText("Email ID")).toContainText ("Email ID");

});

test("Verify Password is displaying in the login page password placeholder", async function ({ page }) {

    await page.goto("https://admin-staginggs.vplayed.com");
    await page.waitForTimeout(3000);
    await expect (page.getByText("Password").first()).toContainText ("Password");

});

test("Verify the error is displayed when the user click on the sign-in button by leaving password and email feild empty", async function ({ page }) {

    await page.goto("https://admin-staginggs.vplayed.com");
    await page.getByText("Sign In").last().click();
    await page.waitForTimeout(3000);
    await expect (page.getByText("Email Address is required")).toContainText ("Email Address is required");
    await expect (page.getByText("Password is required")).toContainText ("Password is required");

});

test("Verify please enter the email is dispalyed when the user enter password and leave email feild empty and clicks on sign-in", async function ({ page }) {

    await page.goto("https://admin-staginggs.vplayed.com");
    await page.locator("#password").fill("Welcme@123");
    await page.getByText("Sign In").last().click();
    await page.waitForTimeout(3000);
    await expect (page.getByText("Email Address is required")).toContainText ("Email Address is required");

});

test("Verify please enter the password is displayed when user click on sign-in with out entering password", async function ({ page }) {

    await page.goto("https://admin-staginggs.vplayed.com");
    await page.locator("#phoneEmail").fill("admingsvplayed@gmail.com");
    await page.getByText("Sign In").last().click();
    await page.waitForTimeout(3000);
    await expect (page.getByText("Password is required")).toContainText ("Password is required");

});

test("Verify user can able to login using not registered email", async function ({ page }) {

    await page.goto("https://admin-staginggs.vplayed.com");
    await page.locator("#phoneEmail").fill("admingsvplayd@gmail.com");
    await page.locator("#password").fill("Welcome@123");
    await page.getByText("Sign In").last().click();
    await page.waitForTimeout(3000);
    await expect (page.locator("#toast-container")).toBeVisible ("The email you have given is not registered with us, Please try again or create a new account");

});

test("Verify user can able to login using invalid Credentials", async function ({ page }) {

    await page.goto("https://admin-staginggs.vplayed.com");
    await page.locator("#phoneEmail").fill("admingsvplayed@gmail.com");
    await page.locator("#password").fill("Welcme@123");
    await page.getByText("Sign In").last().click();
    await page.waitForTimeout(3000);
    await expect (page.locator("#toast-container")).toBeVisible ("Invalid Credential");

});

test("Verify the error is displayed when the user entered the invalid email", async function ({ page }) {

    await page.goto("https://admin-staginggs.vplayed.com");
    await page.locator("#phoneEmail").fill("admingsvplayed@gmail.com#dfdfg");
    await page.locator("#password").fill("Welcome@123");
    await page.getByText("Sign In").last().click();
    await page.waitForTimeout(3000);
    await expect (page.getByText("Email must be a valid email address")).toContainText ("Email must be a valid email address");

});

test("Verify please enter valid email is displayed when the user enetr email in wrong format", async function ({ page }) {

    await page.goto("https://admin-staginggs.vplayed.com");
    await page.locator("#phoneEmail").fill("admingsvpla");
    await page.waitForTimeout(3000);
    await expect (page.getByText("Please enter a valid email address")).toContainText ("Please enter a valid email address");

});

test("Verify user can able to successfully login", async function ({ page }) {

    await page.goto("https://admin-staginggs.vplayed.com");
    await page.locator("#phoneEmail").fill("admingsvplayed@gmail.com");
    await page.locator("#password").fill("Welcome@123");
    await page.getByText("Sign In").last().click();
    await page.waitForTimeout(1000);
    await expect (page.locator("//div[@class='ng-tns-c1-1 ng-star-inserted ng-trigger ng-trigger-flyInOut ngx-toastr toast-success']")).toContainText ("Good, You have logged in successfully");
    await page.waitForTimeout(3000);
});

test("Verify that when the user tap on the eye icon in password field that password is visible and when tap it again that the password should not be visible", async function ({ page }) {

    await page.goto("https://admin-staginggs.vplayed.com");
    await page.locator("#phoneEmail").fill("admingsvplayed@gmail.com");
    await page.locator("#password").fill("Welcome@123");
    await page.locator("//div[@Class='show-pass']").first().click();
    await page.waitForTimeout(3000);
    await expect (page.locator("//input[@Class='form-control active ng-dirty ng-valid ng-touched']").last()).toBeVisible ("Welcome@123");
    await page.waitForTimeout(3000);
    await page.locator("//div[@Class='show-pass']").last().click();
    await page.waitForTimeout(3000);
    await expect (page.locator("//input[@Class='form-control active ng-dirty ng-valid ng-touched']").last()).toHaveAttribute('type', 'password');
});

test("Verify that when the user taps on the “Forgot Password” link, they are redirected to the Forgot Password page", async function ({ page }) {

    await page.goto("https://admin-staginggs.vplayed.com");
    await page.getByText("Forgot Password?").click();
    await expect(page).toHaveURL(/forgot-password/);
});

test("Verify the in the forgot pass page the text displaying as Forget your password?", async function ({ page }) {

    await page.goto("https://admin-staginggs.vplayed.com/forgot-password");
    await expect(page.getByText('Forgot your password?')).toBeVisible();
});

test("Verify that “Enter your email address below and we’ll send you verification code” text is visible", async function ({ page }) {

    await page.goto("https://admin-staginggs.vplayed.com/forgot-password");
    await expect(page.locator("//p[@class='sign-in-desc']")).toContainText('Enter your email address below and we');
    await expect(page.locator("//p[@class='sign-in-desc']")).toContainText('ll send you verification code');
});