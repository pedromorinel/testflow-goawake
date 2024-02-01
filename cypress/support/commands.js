Cypress.Commands.add('runTestsInOrder', () => {
    cy.runTestFile('login.js');
    cy.runTestFile('customersValidation.js');
    cy.runTestFile('treatAlert.js');
    cy.runTestFile('auditAlert.js');
  });
  
  Cypress.Commands.add('runTestFile', (filename) => {
    const specPath = `./cypress/integration/${filename}`;
    cy.exec(`npx cypress run --spec ${specPath}`);
  });
  