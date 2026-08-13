import { test as base } from "@playwright/test";
import { readJson } from "../utils/readjson.js";
import { Basepage } from "../pages/basepage.js";
import { readCSV } from "../utils/readcsv.js";

export const test = base.extend({
  logindatafixture: async ({}, use) => {
    const testdata = await readJson("testdata/login.json");
    await use(testdata);
  },

  forgetpassdatafixture: async ({}, use) => {
    const testdata = await readJson("testdata/forgetpassword.json");
    await use(testdata);
  },

  admanagementdatafixture: async ({}, use) => {
    const testdata = await readCSV("testdata/admanagement.csv");
    await use(testdata); // for this we need to use logindatafixture[0]
    //await use({ testdata }); for this we need to use logindatafixture.testdata[0]
  }
  
});
