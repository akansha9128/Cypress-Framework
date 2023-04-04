describe('My first automation suite', function()

{

it ('My First test case', function()
{

cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
cy.get('.search-keyword').type('ca')
cy.wait(2000)
//assertions
cy.get('.product:visible').should('have.length',4)
//Assert function - we can check above same by parent-child chaining
cy.get('.products').find('.product').should('have.length',4)
//click on the 3rd element and add to cart (straight forward)
cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()

//OR, search capsicum out of the list we got from the seqarch filter and click that element
// (use this during the time to search an element out of the list and then cick or perform futher actions on the same)

cy.get('.products').find('.product').each(($el,index, $list) =>{

    const name =$el.find('h4.product-name').text()
    if(name.includes('Cashews'))
    {
// using cy.wrap just o fullfill the promise , used wrap fn only for the click fn , for other fns we don't have to use
cy.wrap($el).find('button').click()
    }
})

// clicking on the cart icon and then click on the Proceed to cart 
cy.get('.cart-icon').click()
cy.contains('PROCEED TO CHECKOUT').click()
cy.contains('Place Order').click()



})


})


 


