class userHomePage {

    async loginform (username, password) {
        await this.userNameInput.setValue(username);
        await this.passwordInput.setValue(password);
    }

    get productsText (){
        return $('#header_container > div.header_secondary_container > span');
    }

    get buttonBurguer (){
        return $('#react-burger-menu-btn');
    }

    get addToCartButtonShopping (){
        return $('#shopping_cart_container > a');
    }

    get containerInventory(){
        return $('#inventory_container');
    }

    get productImage (){
        return $('#item_4_img_link > img');
    }

    get productImageInventory (){
        return $('#inventory_container');
    }

    get backProductsButton (){
        return $('#back-to-products');
    }

    get productImage2 (){
        return $('#item_5_img_link > img');
    }

    get sortButton (){
        return $('#header_container > div.header_secondary_container > div > span > select');
    }

    get sortButton2 (){
        return $('#header_container > div.header_secondary_container > div > span > select > option:nth-child(2)');
    }

    get addToCartButton (){
        return $('#add-to-cart-sauce-labs-backpack');
    }

    get removeButton (){
        return $('#remove-sauce-labs-backpack');
    }

    get containDescription (){
        return $('#item_4_title_link');
    }

    get checkoutButton (){
        return $('#checkout');
    }

    get tittleCheckout (){
        return $('#header_container > div.header_secondary_container > span');
    }

    get inputFirstName (){
        return $('#first-name');
    }

    get inputLastName(){
        return $('#last-name');
    }

    get inputpostalCode(){
        return $('#postal-code');
    }

    get continueButton (){
        return $('#continue');
    }

    get overviewTittle (){
        return $('#header_container > div.header_secondary_container > span');
    }

    get summaryCheckout (){
        return $('#checkout_summary_container > div > div.summary_info');
    }

    get finishButton (){
        return $('#finish');
    }

    get finishtext (){
        return $('#checkout_complete_container > h2');
    }

    get backButton (){
        return $('#back-to-products');
    }

    async checkoutForm (firstname, lastname, postalcode) {
        await this.inputFirstName.setValue(firstname);
        await this.inputLastName.setValue(lastname);
        await this.inputpostalCode.setValue(postalcode);
    }

    async productImageClick(){
        await this.productImage.click();
    }
    async addButtonClick() {
        await this.addToCartButton.click();
    }

    async addToCartButtonShoppingClick (){
        await this.addToCartButtonShopping.click();
    }
    async removeButtonClick(){
        await this.removeButton.click();
    }

    async buttonBurguerClick() {
        await this.buttonBurguer.click();
    }

    async backProductsButtonClick (){
        await this.backProductsButton.click();
    }

    async sortButtonClick() {
        await this.sortButton.click();
    }

    async sortButton2Click(){
        await this.sortButton2.click();
    }

    async checkoutButtonClick() {
        await this.checkoutButton.click();
    }

    async continueButtonClick() {
        await this.continueButton.click();
    }

    async finishButtonClick() {
        await this.finishButton.click();
    }

    async backButtonClick() {
        await this.backButton.click();
    }
}

export default new userHomePage();