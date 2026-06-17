import { test, expect } from "@playwright/test";

test("Salesforce login",async ({ page })=> {
    
    await page.goto("https://login.salesforce.com/?locale=in");
    await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com");
    await page.locator(".password").fill("TestLeaf@2025");
    await page.locator('[type="submit"]').click();

    let pagetitle=await page.title()
    console.log(pagetitle)

    await expect(page).toHaveTitle(pagetitle)


})