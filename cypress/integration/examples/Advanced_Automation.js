describe ('My First test Suite', function(){

    it(' myfirst test case', function(){
    
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

    //handling alert and confirmation
    cy.get('#alertbtn').click()
    cy.get('#confirmbtn').click()

    //verify alert is handled
    cy.on("window:alert", (str)=>
    {
        //mocha 
        expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

    //verify confirm event

    cy.on("window:confirm", (str)=>
    {
        //mocha 
        expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })

    //HANDLING CHILD WINDOW
    cy.get("#opentab").invoke('removeAttr', 'target').click()
    //back from child window
    cy.go('back')
    //verify you are in original page /parent page
    // using substring assertion 
    cy.url().should('include','rahulshettyacademy.com')


    //get the price of the course python from the table

    cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {

        const text1= $e1.text()
        if(text1.includes("Python")){
           
            cy.get('tr td:nth-child(2)').eq(index).next().then(function(price)
            {
                const priceText = price.text()
                expect(priceText).to.equal('25')
            })
        }

    })

    //Mouse Hover using JQuerry

    /*cy.get('.mouse-hover-content').invoke('show')
    cy.contains('Top').click()
    cy.url().should('include','top') 
    */

    //Mouse Hover using FORCE Click
    cy.contains('Top').click({force:true})
    cy.url().should('include','top')

     })



    })
    