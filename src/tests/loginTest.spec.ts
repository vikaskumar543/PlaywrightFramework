//Test script using the Page Object Model
import { test } from "@playwright/test";
import LoginPage from "../pages/LoginPage";

test("test", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigateToLoginPage();
    await loginPage.fillUsername("vikasan543@gmail.com");
    await loginPage.fillPassword("Salesforce543#");

    const homePage = await loginPage.clickLoginButton();
    await homePage.expectServiceTitleToBeVisible();
})