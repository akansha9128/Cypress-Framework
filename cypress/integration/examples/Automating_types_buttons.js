describe ('My First test Suite', function(){

it(' myfirst test case', function(){

cy.visit("https://rahulshettyacademy.com/AutomationPractice/")


//Automating checkboxes
//verifying the checkbox is clicked and verifying that the textbox with value option1 is clicked
//this is done by concatenation of the assertions
cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')

//to uncheck the checkbox and verify
cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

//to check all check boxes at once by passing value parameter inside the check functionality
//check functionality will pass only value parameter inside the paranthesis
//can pass multiple values of the checkboxes
cy.get('input[type="checkbox"]').check(['option2','option3'])

//to verify dropdowns (STATIC DROPDOWNS)
cy.get('#dropdown-class-example').select('option2').should('have.value','option2')

//handling DYNAMIC ELEMENT 
cy.get('#autocomplete').type('IND')

//click on the displayed dropdown and select india from the selected dropdowns
cy.get('.ui-menu-item div').each(($e1, index, $list) =>
{
    if($e1.text()==="India")
    {
        cy.wrap($e1).click()
    }
} )
//verify that the India is finally selected from drop down
cy.get('#autocomplete').should('have.value', 'India')

//handling vsible/invisible  elements using assertion
cy.get('#displayed-text').should('be.visible')
cy.get('#hide-textbox').click()
cy.get('#displayed-text').should('not.be.visible')
cy.get('#show-textbox').click()
cy.get('#displayed-text').should('be.visible')

//automating radio buttons
cy.get('input[value="radio2"]').check().should('be.checked')
})





})
