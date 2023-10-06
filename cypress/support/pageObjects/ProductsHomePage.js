class ProductsHomePage{


getAddToCartButton()
{
   
    return cy.get(".button.product_type_simple.add_to_cart_button.ajax_add_to_cart")
}

getCartButton()
{

    return cy.get("ul.nav-menu > .page-item-8 > a")
    
}
getTableRows(){

    
    return cy.get("tr[class='woocommerce-cart-form__cart-item cart_item']")
}

getAllPricesRow(){

    return cy.get("tr[class='woocommerce-cart-form__cart-item cart_item']>td:nth-child(4)")
}

getRemoveElement(){
    return cy.get("tr[class='woocommerce-cart-form__cart-item cart_item']>td:nth-child(1).product-remove > a")
}

}
export  default ProductsHomePage;