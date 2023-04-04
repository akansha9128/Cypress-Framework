
import HomePage from '../pageObjects/HomePage'


describe ('My First test Suite', function(){
    
    before(() => {
        // runs once before all tests in the block
        //for test data from fixtures
        cy.fixture('example').then(function(data){
            this.data =data
        })
      })



    it(' myfirst test case', function(){
       // create an object for homepage class
        const homePage = new HomePage();
      
        cy.visit("https://rahulshettyacademy.com/angularpractice/")
        //elements driven from fixtures
        //cy.get("form div.form-group:nth-child(1) input").type(this.data.form_name)
        homePage.getgenderLocator().type(this.data.form_name)
        //homePage.getEditBox().select(this.data.form_gender)
        //cy.get("select.form-control").select(this.data.form_gender)
        //vaildations in cypress
        //cy.get(":nth-child(4) > .ng-untouched").should('have.value',this.data.form_name)
        cy.get("form div.form-group:nth-child(1) input").should('have.attr','minlength','2')
        cy.get("#inlineRadio3").should('be.disabled')
        
        cy.get(":nth-child(2) > .nav-link").click()
        //To use reusable methods from support and passing param values in test
        //cy.selectProduct("Blackberry")
        //cy.selectProduct("Nokia Edge")

        //for reusing same methods for passing multiple value in array form
        this.data.productName.forEach(function (element) {

            cy.selectProduct(element)
          });
             


    })

})