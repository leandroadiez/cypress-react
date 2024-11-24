// cypress/support/index.d.ts
declare namespace Cypress {
    interface Chainable {
      /**
       * Comando personalizado para completar un esquema
       * @param param Parámetros que recibe el comando
       */
      completeSchema1(param: any): Chainable<void>;
    }
  }
  