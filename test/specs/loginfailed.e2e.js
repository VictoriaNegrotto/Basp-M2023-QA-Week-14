import userHomePage from "../pageobjects/homePageUser.js";
import loginPage from "../pageobjects/loginpage.js";
import logoutUser from "../pageobjects/logoutUser.js";


describe ('go to login user', () =>{
    beforeAll('open browser',()=>{
        browser.setWindowSize (1360, 768);
        browser.url("https://www.saucedemo.com/");
    });

    it ('wrong password of login process', async() =>{
        await expect (loginPage.userNameInput).toBeDisplayed();
        await expect (loginPage.passwordInput).toBeDisplayed();
        await loginPage.loginform("standard_user", "secret_sauc");
        await expect (loginPage.errorAlert).toBeDisplayed();
        await loginPage.loginButtonClick();
    });

    it ('verify login process block', async() =>{
        await loginPage.loginButtonClick();
        await expect (loginPage.userNameInput).toBeDisplayed();
        await loginPage.loginform("locked_out_user", "secret_sauce");
        await loginPage.loginButtonClick();
        await loginPage.alertBlockClick();
    });

    it ('verify login problem process', async() =>{
        await expect (loginPage.loginButton).toBeDisplayed();
        await expect (loginPage.userNameInput).toBeDisplayed();
        await loginPage.loginform("problem_user", "secret_sauce");
        await loginPage.loginButtonClick();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        await expect (loginPage.errorImage).toBeDisplayed();
        await logoutUser.buttonBurguerClick();
        await logoutUser.logOutButtonClick();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/')
    });

    it ('verify login performance process', async() =>{
        await expect (loginPage.loginButton).toBeDisplayed();
        await expect (loginPage.userNameInput).toBeDisplayed();
        await loginPage.loginform("performance_glitch_user", "secret_sauce");
        await loginPage.loginButtonClick();
        browser.pause(2000);
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    });

        it ('logout finish flow', async() =>{
        await userHomePage.productImageClick();
        await userHomePage.addButtonClick();
        await userHomePage.removeButtonClick();
        await logoutUser.buttonBurguerClick();
        await logoutUser.logOutButtonClick();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/');
    });
});