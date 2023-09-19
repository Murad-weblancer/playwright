import { test, expect } from "@playwright/test";

test("my first", async({page})=>{
    await page.goto("https://uzum.uz/ru")
    await page.waitForSelector(".main-usp.regular.hug")
    const textTitle = await page.locator(".main-usp.regular.hug")
    await expect(textTitle).toHaveText("Доставим ваш заказ бесплатно — всего за 1 день!")
    // const textTitle = await page.locator(".main-usp.regular.hug").textContent()
    // console.log(textTitle);
})
