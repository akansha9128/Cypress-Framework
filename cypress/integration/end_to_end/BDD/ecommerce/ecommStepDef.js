const { When, Then, Given } = require("@badeball/cypress-cucumber-preprocessor");
import ProductsHomePage from '../../../../support/pageObjects/ProductsHomePage';
const productsHomePage= new ProductsHomePage();
var lowestPrice = 0;

Given("I add four random items to my cart", ()=>
{
    
    cy.visit(Cypress.env('url'))
    productsHomePage.getAddToCartButton().each(($button , index, $list ) =>{
        if (index < 4)
        {
          cy.wait(3000)
          cy.wrap($button).click()
        }
    })
})

When ("I view my cart",()=>
{
    productsHomePage.getCartButton().click()
})

Then ("I find total four items listed in my cart",()=>
{
    productsHomePage.getTableRows().should('have.length','4')
})

When ("I search for lowest price item from my cart",()=>{

    productsHomePage.getTableRows().then(rows => {
        const prices = rows.map((index, row)=> {
          const priceText = Cypress.$(row).find('td:nth-child(4)').text();
          return parseFloat(priceText.replace('$', '')); // As prices are in USD
        });
      
        lowestPrice = Math.min(...prices);
     
        cy.log(lowestPrice)
    })
})

Then ("I am able to remove the lowest price item from my cart",()=>{


    // Finding the row with the lowest price and removing that element
    productsHomePage.getAllPricesRow().each( ($el, index, $list) =>{
        const text = $el.text()
        if(text.includes(lowestPrice))
        {
          productsHomePage.getRemoveElement().eq(index).click()
        }
    })

})

Then ("I am able to verify three items in my cart",()=>
{
    productsHomePage.getTableRows().should('have.length','3')
})