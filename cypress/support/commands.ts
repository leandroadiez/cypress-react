/// <reference types="cypress" />
import 'cypress-xpath';

 Cypress.Commands.add('fillForm', (form)=> {
    cy.log("FILL FORM BEGINS");
    cy.contains(form).click();
    cy.fixture('example.json').then((formsData)=>{
        formsData[form].fields.forEach((field)=>{
            switch(field.type){
                case "input":
                case "textarea":
                    cy.contains(field.name).next().clear().type(field.value);
                    break;
                
                case "select":
                    cy.contains(field.name).nextAll('select').first().select(field.value, {force: true});
                    break;

                case "checkbox":
                    if(field.value){
                        cy.contains(field.name).next().check();
                    }
                    break;
            }
        })
      })
      
    cy.log("FILL FORM ENDS");
 })