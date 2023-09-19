import { test, expect } from "@playwright/test";


test('Locators', async ({page})=>{
    // Alt
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    const login = await page.getByAltText("company-branding")
    // Placeholder
    await page.getByPlaceholder("Username").fill("Admin")
    await page.getByPlaceholder("Password").fill("admin123")
    // Role
    await page.getByRole("button", {type:"submit"}).click()
    // Text
})

// also we can write in terminal a comm npx playwright codegen