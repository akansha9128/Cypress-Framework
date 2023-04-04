class HomePage{

    getEditBox()
    {
        return cy.get("form div.form-group:nth-child(1) input")
    }


    getgenderLocator()
    {

       return cy.get("select.form-control")
    }
}

export  default HomePage;