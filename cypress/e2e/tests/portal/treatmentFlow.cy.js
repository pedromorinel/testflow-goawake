import { goAwakeNoCaptcha } from "../../pages/GoAwakeLinks"
import { goAwakeSignature } from "../../pages/GoAwakeLinks"
import homeObjects  from "../../pages/GoAwakeHomePage"
import signatureObjects from '../../pages/GoAwakeSignaturePage'
import auditObjects from '../../pages/GoAwakeAuditPage'

let auditId
const filters = homeObjects.filterObjects();
const treatment = homeObjects.treatmentObjects();
const signature = signatureObjects.goAwakeSignaturePage();
const navBar = homeObjects.navBar();
const auditFlow = auditObjects.auditTable();
const auditFilters = auditObjects.filters();

describe('Invalidate Alert', () => {
  it('passes ', () => {
    cy.viewport(1920, 1080);
    cy.exec('node ./cypress/e2e/resources/generateLowRiskAlert.js');
    goAwakeNoCaptcha();
    cy.wait(4000);
    cy.get(filters.filterCustomer).click();
    cy.get(filters.searchCustomer).click().type('Creare Sistemas');
    cy.get(filters.selectCustomer).click();
    cy.wait(4000);
    cy.get(filters.switchOnline).click();
    cy.get(treatment.visualizeAlert).should('exist').click();
    cy.get(treatment.selectMedia).click({multiple: true});
    cy.intercept('POST', 'https://api-qa.goawakecloud.com.br/api/alarmsByDateInterval/customers').as('customers');
    cy.get(treatment.invalidateAlert).click();
    cy.get(treatment.confirmInvalidation).click();
    cy.wait('@customers').then((interception) => {
      expect(interception.response.statusCode).to.eq(200);
    })
  })
})

describe('Treat Alert', () => {
  it('passes @2', () => {
    cy.viewport(1920, 1080);
    cy.exec('node ./cypress/e2e/resources/generateLowRiskAlert.js');
    cy.exec('node ./cypress/e2e/resources/updateDriver.js');
    goAwakeNoCaptcha();
    cy.intercept('POST', 'https://api-qa.goawakecloud.com.br/api/alarmsByDateInterval/customers').as('customers');
    cy.wait(5000);
    cy.get(filters.filterCustomer).click();
    cy.get(filters.searchCustomer).click().type('Creare Sistemas');
    cy.get(filters.selectCustomer).click();
    cy.wait(4000);
    cy.get(filters.filterDriver).click();
    cy.get(filters.searchDriver).click().type('Nubia');
    cy.wait(3000);
    cy.get(filters.selectDriver).click();
    cy.get(filters.switchOnline).click();
    cy.get(treatment.visualizeAlert).click();
    cy.get(treatment.selectMedia).wait(2000).click({multiple: true});
    cy.get(treatment.stepTwo).wait(2000).click();
    cy.get(treatment.stepThree).wait(2000).click();
    cy.get(treatment.filterTreatment).click();
    cy.get(treatment.selectTreatment).click();
    cy.intercept('POST', 'https://api-qa.goawakecloud.com.br/api//v2/audit/').as('audit');
    cy.get(treatment.textArea).click().type('Tratativa Válida');
    cy.get(treatment.finishTreatment).click();
    cy.wait('@audit').then((interception) => {
      const responseBody = interception.response.body;
      auditId = responseBody.id;
      cy.log('ID da audit: ' + auditId);
    })
    cy.wait('@customers').then((interception) => {
    expect(interception.response.statusCode).to.eq(200);});
  })
})

describe('Signature Audit', () => {
  it('passes @3', () => {
    cy.viewport(1920, 1080);
    cy.wrap(auditId).as('auditId');
    cy.get('@auditId').then((auditId) => {
      goAwakeNoCaptcha();
      goAwakeSignature(auditId);
      cy.get(signature.filterDriver).click();
      cy.get(signature.selectDriver).click();
      cy.get(signature.signatureButton).click();
      cy.intercept('POST', 'https://api-qa.goawakecloud.com.br/api/v2/audit/driver-signature').as('signatureRequest')
      cy.get(signature.signatureArea).click();
      cy.get(signature.signatureConfirm).click();
      cy.wait('@signatureRequest').then((interception) => {
        expect(interception.response.statusCode).to.eq(201);
      })
      })
    })
})

describe('Validate Signature and Approve Audit', () => {
  it('passes @4', () => {
    cy.viewport(1920, 1080) 
    goAwakeNoCaptcha();
    cy.get(navBar.auditPage).click();
    cy.wait(4000);
    cy.get(auditFilters.treatedIn).click().click();
    cy.get(auditFlow.alertComunicate).click();
    cy.get(auditFlow.signatureText).should('contain', 'Signed by');
    cy.get(auditFlow.signatureDiv).should('exist');
    cy.get(auditFlow.auditButton).click();
    cy.get(auditFlow.auditComment).click().type('Auditoria Validada');
    cy.get(auditFlow.auditApprove).click();
  })
})