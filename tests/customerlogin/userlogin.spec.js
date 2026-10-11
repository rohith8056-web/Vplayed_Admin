import { test, expect } from '@playwright/test';
import { storagestate } from '../../utils/storagestate.js';

let contextwithstate;
let storageState;
let page;

test.beforeAll(async ({ browser }) => {
  storageState = new storagestate(browser);
  contextwithstate = await storageState.setstoragestateforcontext('https://staginggs.vplayed.com', 'rohith8056@gmail.com');
}, 150000);

test.beforeEach(async () => {
  page = await contextwithstate.newPage();
});

//user login
test('Login with OTP for customer', async () => {
await page.goto('https://staginggs.vplayed.com/category/movies');
await page.waitForTimeout(3000);
expect(page.url()).toContain('https://staginggs.vplayed.com/category/movies');

});
