/*Browser
context
page*/

import {test,chromium} from "@playwright/test"

test("Launch Browser", async({page})=>{
    await page.goto("https://leaftaps.com/opentaps/control/main")
    await page.waitForTimeout(2000);
    

})