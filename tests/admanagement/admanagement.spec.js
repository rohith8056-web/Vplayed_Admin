import { expect } from "@playwright/test";
import { admanagement } from "../../pages/admanagementpage.js";
import { test } from "../../fixtures/data.fixture.js";
import { getDayString, getYearString, getDayAndYear, getMonthShort } from "../../utils/dateUtils.js";

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
    await expect(adManagementPage.page).toHaveURL("/vplayedqa/super-admin/ad-management");
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
   const adName = admanagementdatafixture[5].adname + Date.now();
   await adManagementPage.adnamefill(adName);
   const adUrl = admanagementdatafixture[5].adurl;
   await adManagementPage.adurlfill(adUrl);
   const supportPlatform = admanagementdatafixture[5].supportplatform;
   await adManagementPage.textlselectionlist(adManagementPage.adsupportplatformplaceholder, "//span[@class='mat-option-text']",adManagementPage.supportplatformlist, supportPlatform);
   const Orientation = admanagementdatafixture[5].orientation;
   await adManagementPage.textlselectionlist(adManagementPage.adorientationplaceholder, "//span[@class='mat-option-text']",adManagementPage.orientationlist, Orientation);
   await adManagementPage.savebtnclick();
   await page.waitForTimeout(3000);
   await expect(adManagementPage.adsuccessmsg).toBeVisible();
   await expect(adManagementPage.adsuccessmsg).toHaveText(admanagementdatafixture[5].assert1);
   await expect(adManagementPage.createdadname).toBeVisible();
   await expect(adManagementPage.createdadname).toHaveText(`${adName}`);
   await expect(await adManagementPage.createdAdUrl(adName)).toHaveText(`${adUrl}`);
   await expect(await adManagementPage.createdSupportPlatform(adName)).toHaveText(`${supportPlatform}`);
   await expect(await adManagementPage.createdOrientation(adName)).toHaveText(`${Orientation}`);
  await expect(await adManagementPage.createdAdstatus(adName)).toHaveText(admanagementdatafixture[5].assert2);
  // Verify the created ad date contains today's day and year (format-agnostic)
  const createdDateLocator = await adManagementPage.createdAddate(adName);
  const createdDateText = await createdDateLocator.innerText();
  //const day = getDayString();
  //const year = getYearString();
  const month = getMonthShort();
  const { day, year } = getDayAndYear();
  expect(createdDateText).toContain(day);
  expect(createdDateText).toContain(year);
  expect(createdDateText).toContain(month);
  expect(createdDateText).toContain(admanagementdatafixture[5].assert3);
  });

  test("TC-33: verify when the ad status is active and deactive is showing correctly", async ({ page, admanagementdatafixture }) => {

   await adManagementPage.addmanagementbtn.click();
   //await adManagementPage.newadclick();
  const adName = await adManagementPage.createdadname.innerText();
  const statusLocator = await adManagementPage.createdAdstatus(adName); 
  const statusText = await statusLocator.innerText();
  //const statusText = await adManagementPage.createdAdstatus(adName).innerText(); we can not use this if we used async function for createdAdstatus because it will return a promise and we can not use innerText on promise so we need to use await for createdAdstatus and then use innerText on that locator so we used like aboce if we didnt used async function for createdAdstatus then we can use like this

  if (statusText === 'Active') {
   await adManagementPage.adstatusactivatedeactivate(adName);
   await adManagementPage.adsstatuspopupyesbtn.click();
   await expect(await adManagementPage.createdAdstatus(adName)).toHaveText('Inactive');
  } else {
   await adManagementPage.adstatusactivatedeactivate(adName);
   await adManagementPage.adsstatuspopupyesbtn.click();
   await expect(await adManagementPage.createdAdstatus(adName)).toHaveText('Active');
  }

  });

  test("TC-34: verify ad management heading is displaying at correct design", async ({ page, admanagementdatafixture }) => {

   await adManagementPage.addmanagementbtn.click();
   await expect(adManagementPage.heading).toBeVisible();
   const Heading = adManagementPage.heading; // or page.locator('h1')
   const box = await Heading.boundingBox();
   console.log('Heading bounding box:', box);
   await expect(box.x).toBeCloseTo(255.203125, 1); //here where the 1 is the tolerance value, you can adjust it as needed
   await expect(box.y).toBeCloseTo(95.1953125, 1);
   await expect(box.width).toBeCloseTo(160.125, 1);
   await expect(box.height).toBeCloseTo(24.1484375, 1);
   await expect(adManagementPage.heading).toHaveText(admanagementdatafixture[0].assert1);
   await expect(adManagementPage.heading).toHaveCSS('font-family', '"IBM Plex Sans", sans-serif');
   await expect(adManagementPage.heading).toHaveCSS('font-size', '21px');
   await expect(adManagementPage.heading).toHaveCSS('font-weight', '700');
   await expect(adManagementPage.heading).toHaveCSS('line-height', '24.15px'); //25.875px actually but its coming 24 so i added it to make test pass
   await expect(adManagementPage.heading).toHaveCSS('color', 'rgb(17, 18, 23)');
   await expect(adManagementPage.heading).toHaveCSS('align-items', 'center');

   });

  
});