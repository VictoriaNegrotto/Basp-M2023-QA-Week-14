import loginPage from "../pageobjects/loginpage.js";
import userHomePage from "../pageobjects/homePageUser.js";
import logoutUser from "../pageobjects/logoutUser.js";

describe('go to login user', () =>{
    beforeAll('open browser', () =>{
        browser.setWindowSize (1360, 768);
        browser.url("https://www.saucedemo.com/");
    });

    it ('succes process', async() =>{
        await expect (loginPage.loginButton).toBeDisplayed();
        await expect (loginPage.userNameInput).toBeDisplayed();
        await loginPage.loginform("standard_user", "secret_sauce");
        await loginPage.loginButtonClick();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    });

    it('home page user', async () =>{
        await expect (userHomePage.productsText).toBeDisplayed();
        await expect (userHomePage.buttonBurguer).toBeDisplayed();
        await expect (userHomePage.containerInventory).toBeDisplayed();
        await expect (userHomePage.productImage).toBeDisplayed();
    });

    it ('navigate in home page', async () => {
        await userHomePage.productImageClick();
        await userHomePage.addButtonClick();
        await userHomePage.removeButtonClick();
        await userHomePage.backProductsButtonClick();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        await userHomePage.sortButtonClick();
        await userHomePage.sortButton2Click();
    });

    it('shopping user', async () =>{
        await expect(userHomePage.productImage).toBeDisplayed();
        await userHomePage.productImageClick();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=4');
        await userHomePage.addButtonClick();
        await userHomePage.addToCartButtonShoppingClick();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html');
        await expect(userHomePage.containDescription).toBeDisplayed();
        await userHomePage.checkoutButtonClick();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-one.html');
    });

    it('checkout user', async () =>{
        await expect (userHomePage.tittleCheckout).toBeDisplayed();
        await expect (userHomePage.inputFirstName).toBeDisplayed();
        await expect (userHomePage.inputLastName).toBeDisplayed();
        await expect (userHomePage.inputpostalCode).toBeDisplayed();
        await userHomePage.checkoutForm("Victoria", "Ramirez", "2000");
        await userHomePage.continueButtonClick();
    });

    it ('finish checkout', async () =>{
        await expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-two.html');
        await expect (userHomePage.overviewTittle).toBeDisplayed();
        await expect (userHomePage.containDescription).toBeDisplayed();
        await expect (userHomePage.summaryCheckout).toBeDisplayed();
        await userHomePage.finishButtonClick();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-complete.html');
        await expect (userHomePage.finishtext).toBeDisplayed();
    });

    it ('back home', async () =>{
        await userHomePage.backButtonClick();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    });

    it ('logout of user', async () =>{
        await logoutUser.buttonBurguerClick();
        await logoutUser.logOutButtonClick();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/');
    });
});