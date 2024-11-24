describe("template spec", () => {
  before(()=>{
    const dataSchema1 = cy.fixture('schema1.json')
  }) 
  beforeEach(()=>{
    cy.visit("http://localhost:3000/");
  })
  it("Required fields", () => {
    cy.xpath('//*[@id="radix-:r1:-content-A"]/form/div/div[2]/button').as('submitButton');
    cy.get('@submitButton').click();

    cy.xpath('//*[@id="radix-:r1:-content-A"]/form/div/div[1]/div[1]/input').as('username-input');
    cy.get('@username-input').next().should('have.text', 'This field is required');

    cy.xpath('//*[@id="radix-:r1:-content-A"]/form/div/div[1]/div[2]/input').as('age-input');
    cy.get('@age-input').next().should('have.text', 'This field is required');
    
    cy.xpath('//*[@id="radix-:r1:-content-A"]/form/div/div[1]/div[3]/input').as('email-input');
    cy.get('@email-input').next().should('have.text', 'This field is required');
    
    cy.xpath('//*[@id="radix-:r1:-content-A"]/form/div/div[1]/div[6]/div/div[1]/input').as('street-input');
    cy.get('@street-input').next().should('have.text', 'This field is required');
    
    cy.xpath('//*[@id="radix-:r1:-content-A"]/form/div/div[1]/div[6]/div/div[2]/input').as('city-input');
    cy.get('@city-input').next().should('have.text', 'This field is required');
    
    cy.xpath('//*[@id="radix-:r1:-content-A"]/form/div/div[1]/div[6]/div/div[3]/input').as('zipcode-input');
    cy.get('@zipcode-input').next().should('have.text', 'This field is required');
    
    cy.xpath('//*[@id="radix-:r1:-content-A"]/form/div/div[1]/div[7]/button').as('gender-input');
    cy.get('@gender-input').next().next().should('have.text', 'This field is required');
  });

  it("Minium Length", () => {
    cy.xpath('//*[@id="radix-:r1:-content-A"]/form/div/div[1]/div[1]/input').as('username-input').type('L');
    cy.xpath('//*[@id="radix-:r1:-content-A"]/form/div/div[2]/button').as('submitButton').click();
    cy.get('@username-input').next().should('have.text', 'Minimum length is 5');
  })

  it("Maximum Length", () => {
    cy.xpath('//*[@id="radix-:r1:-content-A"]/form/div/div[1]/div[1]/input').as('username-input').type('Lorem Ipsum is simply dummy text');
    cy.xpath('//*[@id="radix-:r1:-content-A"]/form/div/div[2]/button').as('submitButton').click();
    cy.get('@username-input').next().should('have.text', 'Maximum length is 20');
  })

  it("Output check", () => {
    cy.completeSchema1("Leandro", "29", "leandro@test.com", "Lorem ipsum", "Fake Street 123", "Buenos Aires", "444", "Male");
    cy.get('@username-input').invoke('val').then((value)=>{
      cy.contains((`"username": "${value}"`)).should('exist')
    })
    cy.get('@age-input').invoke('val').then((value)=>{
      cy.contains((`"age": "${value}"`)).should('exist')
    })
    cy.get('@email-input').invoke('val').then((value)=>{
      cy.contains((`"email": "${value}"`)).should('exist')
    })
    cy.get('@bio-input').invoke('val').then((value)=>{
      cy.contains((`"bio": "${value}"`)).should('exist')
    })
    cy.get('@street-input').invoke('val').then((value)=>{
      cy.contains((`"street": "${value}"`)).should('exist')
    })
    cy.get('@city-input').invoke('val').then((value)=>{
      cy.contains((`"city": "${value}"`)).should('exist')
    })
    cy.get('@zipcode-input').invoke('val').then((value)=>{
      cy.contains((`"zipcode": "${value}"`)).should('exist')
    })
  });
});
