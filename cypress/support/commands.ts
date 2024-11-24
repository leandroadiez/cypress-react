/// <reference types="cypress" />
import 'cypress-xpath';

// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

Cypress.Commands.add('completeSchema1', (username, age, email, bio, street, city, zipcode) => { 
    cy.xpath('//*[@id="radix-:r1:-content-A"]/form/div/div[1]/div[1]/input').as('username-input').type(username);

    cy.xpath('//*[@id="radix-:r1:-content-A"]/form/div/div[1]/div[2]/input').as('age-input').type(age);
    
    cy.xpath('//*[@id="radix-:r1:-content-A"]/form/div/div[1]/div[3]/input').as('email-input').type(email);

    cy.xpath('//*[@id="radix-:r1:-content-A"]/form/div/div[1]/div[4]/textarea').as('bio-input').type(bio);
    
    cy.xpath('//*[@id="radix-:r1:-content-A"]/form/div/div[1]/div[5]/input').check();

    cy.xpath('//*[@id="radix-:r1:-content-A"]/form/div/div[1]/div[6]/div/div[1]/input').as('street-input').type(street);
    
    cy.xpath('//*[@id="radix-:r1:-content-A"]/form/div/div[1]/div[6]/div/div[2]/input').as('city-input').type(city);
    
    cy.xpath('//*[@id="radix-:r1:-content-A"]/form/div/div[1]/div[6]/div/div[3]/input').as('zipcode-input').type(zipcode);
 })