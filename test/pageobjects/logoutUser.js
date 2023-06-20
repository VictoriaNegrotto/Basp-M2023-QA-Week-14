class logoutUser {

    get buttonBurguer (){
        return $('#react-burger-menu-btn');
    }

    get logOutButton () {
        return $('#logout_sidebar_link');
    }

    async logOutButtonClick() {
        await this.logOutButton.click ();
    }

    async buttonBurguerClick() {
        await this.buttonBurguer.click ();
    }
}
    export default new logoutUser();