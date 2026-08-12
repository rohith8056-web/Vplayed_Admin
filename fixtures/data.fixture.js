import { test as base } from "@playwright/test";
import { readJson } from "../utils/readjson.js";
import { Basepage } from "../pages/basepage.js";

export const test = base.extend({
  logindatafixture: async ({}, use) => {
    const testdata = await readJson("testdata/login.json");
    await use(testdata);
  },

  forgetpassdatafixture: async ({}, use) => {
    const testdata = await readJson("testdata/forgetpassword.json");
    await use(testdata);
  }
  
});
