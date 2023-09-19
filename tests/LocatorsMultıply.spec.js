import {test,expect} from "@playwright/test";
test("Multi",async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    const links = await page.$$('p')
    for (const link of links) {
        const text = await link.textContent()
        console.log(text);
    }
})