import { expect } from "@playwright/test";
import { admanagement } from "../pages/admanagementpage.js";
import { test } from "../fixtures/data.fixture.js";

let adManagementPage; 

test.beforeEach(async ({ page }) => {
    adManagementPage = new admanagement(page);
    await adManagementPage.openLoginPage();
    await adManagementPage.login("admingsvplayed@gmail.com", "Welcome@123");
    await adManagementPage.superadminclick();
  });

test.describe("Functional Testing", () => {
  
test("TC-26: Verify that admanagement page is displayed", async ({ page }) => {

    await adManagementPage.addmanagementbtn.click();
    //await page.waitForTimeout(5000);
    await expect(adManagementPage.page).toHaveURL("https://admin-staginggs.vplayed.com/vplayedqa/super-admin/ad-management");
    await expect(adManagementPage.heading).toBeVisible();
    await expect(adManagementPage.heading).toHaveText('Ad Management');
  });

  test("TC-27: Verify when user click on newadbtn then create new add page is displayed", async ({ page }) => {

    await adManagementPage.addmanagementbtn.click();
    //await page.waitForTimeout(5000);
    await adManagementPage.newadclick();
    //await page.waitForTimeout(5000);
    await expect(adManagementPage.createnewadsheading).toBeVisible();
    await expect(adManagementPage.createnewadsheading).toHaveText('Create New Ads');
    await expect(adManagementPage.creatednewadssubtext).toBeVisible();
    await expect(adManagementPage.creatednewadssubtext).toHaveText('Add multimedia VAST ads source here, The added ads will be playing as preroll, midroll, post roll');
    await expect(adManagementPage.createnewadsubheading).toBeVisible();
    await expect(adManagementPage.createnewadsubheading).toHaveText('Create Ad');
    await expect(adManagementPage.adnameheading).toBeVisible();
    await expect(adManagementPage.adnameheading).toHaveText('AD Name*');
    await adManagementPage.adnameplaceholderclick();
    await expect(adManagementPage.adnameplaceholder).toBeVisible();
    await expect(adManagementPage.adnameplaceholder).toHaveAttribute('placeholder', 'Name of the Ad');
    await expect(adManagementPage.adurlheading).toBeVisible();
    await expect(adManagementPage.adurlheading).toHaveText('AD Url*');
    await adManagementPage.adurlplaceholderclick();
    await expect(adManagementPage.adurlplaceholder).toBeVisible();
    await expect(adManagementPage.adurlplaceholder).toHaveAttribute('placeholder', 'Enter Ad URL');
    await expect(adManagementPage.supportplatformheading).toBeVisible();
    await expect(adManagementPage.supportplatformheading).toHaveText('Support Platform*');
    await expect(adManagementPage.adsupportplatformplaceholder).toBeVisible();
    await expect(adManagementPage.adsupportplatformplaceholder).toHaveText('Support Platform');
    await expect(adManagementPage.orientationheading).toBeVisible();
    await expect(adManagementPage.orientationheading).toHaveText('Orientation*');
    await expect(adManagementPage.adorientationplaceholder).toBeVisible();
    await expect(adManagementPage.adorientationplaceholder).toHaveText('Orientation Type');
  });



  
  
});