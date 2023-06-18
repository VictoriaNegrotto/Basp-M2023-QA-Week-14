class userHomePage {

    get prductsText (){
        return $('#header_container > div.header_secondary_container > span');
    }

    get buttonBurguer (){
        return $('#react-burger-menu-btn');
    }

    get addToCart (){
        return $('#shopping_cart_container > a');
    }

    get productImage (){
        return $('#item_4_img_link > img');
    }

}
export default new userHomePage();