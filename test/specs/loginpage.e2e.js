import loginPage from "../pageobjects/loginpage.js";
//import userHomePage from "../pageobjects/homePageUser";

describe ('go to login user', () =>{
    beforeAll('open browser',()=>{
        browser.setWindowSize (1360, 768);
        browser.url("https://www.saucedemo.com/");
    });

    it ('verify login succes process', async() =>{
        await expect (loginPage.loginButton).toBeDisplayed();
        await expect (loginPage.userNameInput).toBeDisplayed();
        await loginPage.loginform("standard_user", "secret_sauce");
        await loginPage.loginButtonClick();

        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    });
})

describe ('go to login user', () =>{
    beforeAll('open browser',()=>{
        browser.setWindowSize (1360, 768);
        browser.url("https://www.saucedemo.com/");
    });

    it ('verify login block process', async() =>{
        await expect (loginPage.loginButton).toBeDisplayed();
        await expect (loginPage.userNameInput).toBeDisplayed();
        await loginPage.loginform("locked_out_user", "secret_sauce");
        await loginPage.loginButtonClick();

        await expect (loginPage.errorAlert).toBeDisplayed();
    });
})

describe ('go to login user', () =>{
    beforeAll('open browser',()=>{
        browser.setWindowSize (1360, 768);
        browser.url("https://www.saucedemo.com/");
    });

    it ('verify login problem process', async() =>{
        await expect (loginPage.loginButton).toBeDisplayed();
        await expect (loginPage.userNameInput).toBeDisplayed();
        await loginPage.loginform("problem_user", "secret_sauce");
        await loginPage.loginButtonClick();

        browser.pause(1000)
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
        await expect (loginPage.errorImage).toBeDisplayed();
    });
})

describe ('go to login user', () =>{
    beforeAll('open browser',()=>{
        browser.setWindowSize (1360, 768);
        browser.url("https://www.saucedemo.com/");
    });

    it ('verify login performance process', async() =>{
        await expect (loginPage.loginButton).toBeDisplayed();
        await expect (loginPage.userNameInput).toBeDisplayed();
        await loginPage.loginform("performance_glitch_user", "secret_sauce");
        await loginPage.loginButtonClick();

        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    });
})



