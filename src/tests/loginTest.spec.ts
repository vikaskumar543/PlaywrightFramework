//Test script using the Page Object Model
import { test } from "@playwright/test";
import LoginPage from "../pages/LoginPage";
import { decrypt, encrypt } from "../utils/CryptojsUtil";

test("test", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigateToLoginPage();
    // await loginPage.fillUsername("vikasan543@gmail.com");
    // await loginPage.fillPassword("Salesforce543#");
    console.log(decrypt(process.env.userid!));
    console.log(decrypt(process.env.password!));
    await loginPage.fillUsername(decrypt(process.env.userid!));
    await loginPage.fillPassword(decrypt(process.env.password!));

    const homePage = await loginPage.clickLoginButton();
    await homePage.expectServiceTitleToBeVisible();
});

test.skip("Sample .env test", async ({ page }) => {
    console.log(process.env.NODE_ENV);
    console.log(process.env.userid);
    console.log(process.env.password);
    console.log(process.env.env);
});

test.skip("Sample encryption and decription test", async ({ page }) => {
    const plainText = "Salesforce543#";
    const encryptedText = encrypt(plainText);
    console.log('SALT: ', process.env.SALT);
    console.log('Encrypted: ', encryptedText);
    const decryptedText = decrypt(encryptedText);
    console.log('Decrypted: ', decryptedText);
});