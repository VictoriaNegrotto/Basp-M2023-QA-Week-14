class loginPage {

    get userNameInput () {
        return $('#user-name')
    }

    get passwordInput () {
        return $('#password')
    }

    get loginButton () {
        return $('#login-button')
    }

    get errorAlert () {
        return $('#login_button_container > div > form > div.error-message-container.error > h3')
    }

    get errorImage () {
        return $('#item_4_img_link > img')
    }

    async loginform (username, password) {
        await this.userNameInput.setValue(username);
        await this.passwordInput.setValue(password);
    }

    async loginButtonClick() {
        await this.loginButton.click ()
    }
}

export default new loginPage();
