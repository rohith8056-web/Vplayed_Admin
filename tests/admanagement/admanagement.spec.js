import { expect } from "@playwright/test";
import { admanagement } from "../../pages/admanagementpage.js";
import { test } from "../../fixtures/data.fixture.js";

let adManagementPage; 

test.beforeEach(async ({ page }) => {
    adManagementPage = new admanagement(page);
    await adManagementPage.openLoginPage();
    await adManagementPage.login("admingsvplayed@gmail.com", "Welcome@123");
    await adManagementPage.superadminclick();
  });

test.describe("Functional Testing", () => {
  
test("TC-26: Verify that admanagement page is displayed", async ({ page, admanagementdatafixture }) => {

    await adManagementPage.addmanagementbtn.click();
    await page.waitForTimeout(2000);
    await expect(adManagementPage.page).toHaveURL("https://admin-staginggs.vplayed.com/vplayedqa/super-admin/ad-management");
    await expect(adManagementPage.heading).toBeVisible();
    await expect(adManagementPage.heading).toHaveText(admanagementdatafixture[0].assert1);
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

  test("TC-28: Verify that error validatios is displaying when the user tap on the save button in create new ad page without entering the details", async ({ page, admanagementdatafixture }) => {

   await adManagementPage.addmanagementbtn.click();
   await adManagementPage.newadclick();
   await adManagementPage.savebtnclick();
   await expect(adManagementPage.adnameerror).toBeVisible();
   await expect(adManagementPage.adnameerror).toHaveText(admanagementdatafixture[1].assert1);
   await expect(adManagementPage.adurlerror).toBeVisible();
   await expect(adManagementPage.adurlerror).toHaveText(admanagementdatafixture[1].assert2);
   await expect(adManagementPage.supportplatformerror).toBeVisible();
   await expect(adManagementPage.supportplatformerror).toHaveText(admanagementdatafixture[1].assert3);
   await expect(adManagementPage.orientationerror).toBeVisible();
   await expect(adManagementPage.orientationerror).toHaveText(admanagementdatafixture[1].assert4);
  });

  test("TC-29: when the user enter the adname and click on save the error should show in remaining 3 feilds", async ({ page, admanagementdatafixture }) => {

   await adManagementPage.addmanagementbtn.click();
   await adManagementPage.newadclick();
   await adManagementPage.adnamefill(admanagementdatafixture[2].adname +Date.now());
   await adManagementPage.savebtnclick();
   await expect(adManagementPage.adurlerror).toBeVisible();
   await expect(adManagementPage.adurlerror).toHaveText(admanagementdatafixture[2].assert2);
   await expect(adManagementPage.supportplatformerror).toBeVisible();
   await expect(adManagementPage.supportplatformerror).toHaveText(admanagementdatafixture[2].assert3);
   await expect(adManagementPage.orientationerror).toBeVisible();
   await expect(adManagementPage.orientationerror).toHaveText(admanagementdatafixture[2].assert4);
   
  });

  test("TC-30: when the user enter the adname,url and click on save the error should show in remaining 2 feilds", async ({ page, admanagementdatafixture }) => {

   await adManagementPage.addmanagementbtn.click();
   await adManagementPage.newadclick();
   await adManagementPage.adnamefill(admanagementdatafixture[3].adname +Date.now());
   await adManagementPage.adurlfill(admanagementdatafixture[3].adurl);
   await adManagementPage.savebtnclick();
   await expect(adManagementPage.supportplatformerror).toBeVisible();
   await expect(adManagementPage.supportplatformerror).toHaveText(admanagementdatafixture[3].assert3);
   await expect(adManagementPage.orientationerror).toBeVisible();
   await expect(adManagementPage.orientationerror).toHaveText(admanagementdatafixture[3].assert4);
   
  });

  test("TC-31: when the user enter the adname,url,support platform and click on save the error should show in remaining 1 feilds", async ({ page, admanagementdatafixture }) => {

   await adManagementPage.addmanagementbtn.click();
   await adManagementPage.newadclick();
   await adManagementPage.adnamefill(admanagementdatafixture[4].adname +Date.now());
   await adManagementPage.adurlfill(admanagementdatafixture[4].adurl);
   await adManagementPage.textlselectionlist(adManagementPage.adsupportplatformplaceholder, "//span[@class='mat-option-text']",adManagementPage.supportplatformlist, admanagementdatafixture[4].supportplatform);
   await adManagementPage.savebtnclick();
   await expect(adManagementPage.orientationerror).toBeVisible();
   await expect(adManagementPage.orientationerror).toHaveText(admanagementdatafixture[4].assert4);
   
  });

  test("TC-32: when the user enter the adname,url,support platform and orientation click on save then add should be saved and success should be displayed", async ({ page, admanagementdatafixture }) => {

   await adManagementPage.addmanagementbtn.click();
   await adManagementPage.newadclick();
   await adManagementPage.adnamefill(admanagementdatafixture[5].adname +Date.now());
   await adManagementPage.adurlfill(admanagementdatafixture[5].adurl);
   await adManagementPage.textlselectionlist(adManagementPage.adsupportplatformplaceholder, "//span[@class='mat-option-text']",adManagementPage.supportplatformlist, admanagementdatafixture[5].supportplatform);
   await adManagementPage.textlselectionlist(adManagementPage.adorientationplaceholder, "//span[@class='mat-option-text']",adManagementPage.orientationlist, admanagementdatafixture[5].orientation);
   await adManagementPage.savebtnclick();
   await page.waitForTimeout(3000);
   await expect(adManagementPage.adsuccessmsg).toBeVisible();
   await expect(adManagementPage.adsuccessmsg).toHaveText(admanagementdatafixture[5].assert1);
   
  });

  
});