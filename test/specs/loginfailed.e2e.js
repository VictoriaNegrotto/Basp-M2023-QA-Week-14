import loginPage from "../pageobjects/loginpage.js";

describe ('go to login user', () =>{
    beforeAll('open browser',()=>{
        browser.setWindowSize (1360, 768);
        browser.url("https://www.saucedemo.com/");
    });

    it ('verify login process', async() =>{
        await expect (loginPage.loginButton).toBeDisplayed();
        await expect (loginPage.userNameInput).toBeDisplayed();
        await loginPage.loginform("standard_user", "secret_sauc");
        await expect (loginPage.errorAlert).toBeDisplayed();
        await loginPage.loginButtonClick();
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    });

    it ('verify login process block', async() =>{
        await expect (loginPage.loginButton).toBeDisplayed();
        await expect (loginPage.userNameInput).toBeDisplayed();
        await loginPage.loginform("locked_out_user", "secret_sauce");
        await loginPage.loginButtonClick();
        await expect (loginPage.errorAlert).toBeDisplayed();
    });

    it ('verify login problem process', async() =>{
        await expect (loginPage.loginButton).toBeDisplayed();
        await expect (loginPage.userNameInput).toBeDisplayed();
        await loginPage.loginform("problem_user", "secret_sauce");
        await loginPage.loginButtonClick();

        browser.pause(3000)
        browser.newWindow('https://www.saucedemo.com/inventory.html');
        await expect (loginPage.errorImage).toBeDisplayed();
    });

    it ('verify login performance process', async() =>{
        await expect (loginPage.loginButton).toBeDisplayed();
        await expect (loginPage.userNameInput).toBeDisplayed();
        await loginPage.loginform("performance_glitch_user", "secret_sauce");
        await loginPage.loginButtonClick();
        browser.newWindow('https://www.saucedemo.com/inventory.html');
    });
});