import loginPage from "../pageobjects/loginpage.js";
import userHomePage from "../pageobjects/homePageUser.js";

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
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    });

    it('home page user', async () =>{
        await expect (userHomePage.productsText).toBeDisplayed();
        await expect (userHomePage.buttonBurguer).toBeDisplayed();
        await expect (userHomePage.addToCart).toBeDisplayed();
        await expect (userHomePage.containerInventory).toBeDisplayed();
        await expect (userHomePage.productImage).toBeDisplayed();
        await userHomePage.productImage.click();
        await userHomePage.addButtonClick();
        await userHomePage.removeButtonClick();
        await userHomePage.backProductsButtonClick();
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        await userHomePage.sortButtonClick();
        await userHomePage.sortButton2.click();
    });

    it('shopping user', async () =>{
        await userHomePage.productImage.click();
        browser.newWindow('https://www.saucedemo.com/inventory-item.html?id=4');
        await userHomePage.addButtonClick();
        await expect (userHomePage.removeButton).toBeDisplayed();
        await userHomePage.addToCart.click();
        expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html');
        await expect(userHomePage.productImage).toBeDisplayed();
        await expect (userHomePage.conteinDescription).toBeDisplayed();
        userHomePage.checkoutButtonClick();
        browser.newWindow('https://www.saucedemo.com/checkout-step-one.html');
    });

    it('checkout user', async () =>{
        await expect (userHomePage.tittleCheckout).toBeDisplayed();
        await expect (userHomePage.inputFirstName).toBeDisplayed();
        await expect (userHomePage.inputLastName).toBeDisplayed();
        await expect (userHomePage.inputpostalCode).toBeDisplayed();
        await userHomePage.checkoutForm("Victoria", "Ramirez", "2000");
        userHomePage.continueButtonClick();
        expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-two.html')
        await expect (userHomePage.overviewTittle).toBeDisplayed();
        await expect (userHomePage.conteinDescription).toBeDisplayed();
        await expect (userHomePage.summaryCheckout).toBeDisplayed();
        userHomePage.finishButtonClick();
        expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-complete.html');
        await expect (userHomePage.finishtext).toBeDisplayed();
        userHomePage.backButtonClick();
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    });
});