const execSync = require('child_process').execSync;
const path = require('path');

const testFiles = [
  'cypress/e2e/webTests/login.cy.js',
  'cypress/e2e/webTests/customersValidation.cy.js',
  'cypress/e2e/webTests/treatAlert.cy.js',
  'cypress/e2e/webTests/auditAlert.cy.js'
];

const specPaths = testFiles.map((testFile) => path.join(__dirname, testFile));
const specString = specPaths.join(',');

const command = `npx cypress run --record --key dfac55b8-4e54-4e9a-aac2-5c70f0d41c86 --spec ${specString}`;
execSync(command, { stdio: 'inherit' });
