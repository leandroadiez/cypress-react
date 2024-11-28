import { errorMessages } from "../support/error-messages";

describe("template spec", () => {
  const requiredFields = ['username', 'age', 'email', 'street', 'city', 'zipcode'];

  beforeEach(()=>{
    cy.visit("/");
  })

  it("Required fields", () => {
    cy.contains('Submit').click();
    
    requiredFields.forEach((field)=>{
      cy.contains(field).nextAll('p').first().should('have.text', errorMessages.requiredField);
    })
  });

  it("Minimum Length", () => {
    cy.contains('username').next().type('L');
    cy.contains('Submit').click();
    cy.contains('username').nextAll('p').first().should('have.text', errorMessages.minimumLength(5));
  })

  it("Maximum Length", () => {
    cy.contains('username').next().type('Lorem Ipsum is simply dummy text');
    cy.contains('Submit').click();
    cy.contains('username').nextAll('p').first().should('have.text', errorMessages.maximumLength(20));
  })

  it("Output check", () => {
    const forms = ['Schema A', 'Schema B', 'Schema C']
    forms.forEach((form)=>{
      cy.log(`ITERACION ${form}`);
      cy.fillForm(form);

      cy.get('pre').first().invoke('text').then((text)=>{
        text = text.slice(7);
        const jsonData = JSON.parse(text);
        cy.fixture('example.json').then((formsData)=>{
          formsData[form].fields.forEach((field)=>{
            cy.contains(field.name).next().invoke('val').then((value)=>{
              switch(field.name){
                case "street":
                case "city":
                case "zipcode":
                  expect(jsonData.address[field.name]).to.equal(`${value}`);
                  break;
                default:  
                  expect(jsonData[field.name]).to.equal(`${value}`);
              }
            })
          })
        })
      })
        











// "Schema B": {
//     "fields": [
//       { "name": "account_name", "value": "Pepito Lopez", "type": "input", "required": true },
//       { "name": "storage_limit", "value": "12345", "type": "input"  },
//       { "name": "is_active", "value": true, "type": "checkbox"  },
//       { "name": "contact_email", "value": "This is my bio", "type": "input"  },
//       { "name": "backup_enabled", "value": true, "type": "checkbox"  },
//       { "name": "email_notifications", "value": true, "type": "checkbox"  },
//       { "name": "sms_notifications", "value": true, "type": "checkbox"  },
//       { "name": "push_notifications", "value": true, "type": "checkbox"  },
//       { "name": "account_type", "value": "enterprise", "type": "select"  },
//       { "name": "subscription_status", "value": true, "type": "checkbox"  }
//     ]
//   }



    })    
  });
});


