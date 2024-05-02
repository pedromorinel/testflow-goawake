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
  it('Invalidate Alert', () => {
    cy.viewport(1920, 1080);
    cy.exec('node ./cypress/e2e/resources/generateLowRiskAlert.js');
    goAwakeNoCaptcha();
    cy.wait(4000);
    cy.get(filters.filterCustomer).click();
    cy.get(filters.searchCustomer).click().type('Creare Sistemas');
    cy.get(filters.selectCustomer).click();
    cy.wait(4000);
    cy.get(filters.switchOnline).click();
    cy.get(treatment.visualizeAlert).should('exist').click({force: true});
    cy.get(treatment.selectMedia).click({multiple: true});
    cy.intercept('POST', 'https://api-qa.goawakecloud.com.br/api/alarmsByDateInterval/customers').as('customers');
    cy.get(treatment.invalidateAlert).click();
    cy.get(treatment.confirmInvalidation).click();
    cy.wait('@customers').then((interception) => {
      expect(interception.response.statusCode).to.eq(200);
    })
  })
})

describe('Validate treatment list', () => {
  it('Validate treatment list', () => {
    cy.viewport(1920, 1080);
    cy.exec('node ./cypress/e2e/resources/generateLowRiskAlert.js');
    goAwakeNoCaptcha();
    cy.intercept('POST', 'https://api-qa.goawakecloud.com.br/api/alarmsByDateInterval/customers').as('customers');
    cy.wait(5000);
    cy.get(filters.filterCustomer).click();
    cy.get(filters.searchCustomer).click().type('Creare Sistemas');
    cy.get(filters.selectCustomer).click();
    cy.wait(2000);
    cy.get(filters.switchOnline).click();
    cy.wait(6000)
    cy.intercept('GET', 'https://api-qa.goawakecloud.com.br/api//treatment/?customerProfileId=1').as('treatment');
    cy.get(treatment.visualizeAlert).should('be.visible').then(($element) => {
      $element[0].scrollIntoView()
      cy.wait(1000)
      cy.wrap($element).click({force: true});
    })
    cy.wait('@treatment').then((interception) => {
      expect(interception.response.statusCode).to.eq(200);
      cy.wrap(interception.response.body).should('be.an', 'array').and('have.length', 16)
    })
  })
})

describe('Identify driver in alert and generate pdf template', () => {
  it('Identify driver in alert and generate pdf template', () => {
    cy.viewport(1920, 1080);
    cy.exec('node ./cypress/e2e/resources/generateLowRiskAlert.js');
    goAwakeNoCaptcha();
    cy.wait(4000);
    cy.get(filters.filterCustomer).click();
    cy.get(filters.searchCustomer).click().type('Creare Sistemas');
    cy.get(filters.selectCustomer).click();
    cy.wait(2000);
    cy.get(filters.switchOnline).click();
    cy.wait(4000)
    cy.get(treatment.visualizeAlert).click({force: true});
    cy.get(treatment.selectMedia).wait(2000).click({multiple: true});
    cy.get(treatment.stepTwo).wait(2000).click();
    cy.intercept('POST', 'https://api-qa.goawakecloud.com.br/api//v2/driver/recognition?alertType=2&customerProfileId=1').as('driverRecognition');
    cy.get(treatment.identifyDriver).click().wait(2000)
    cy.wait('@driverRecognition').then((interception) => {
      expect(interception.response.statusCode).to.eq(200);
    })
    cy.get(treatment.driverInput).click()
    cy.get(treatment.filterDriver).click().type('jose zapata')
    cy.get(treatment.selectDriver).click()
    cy.get(treatment.stepThree).wait(2000).click();
    cy.get(treatment.confirmDriver).click();
    cy.get(treatment.filterTreatment).click().wait(2000)
    cy.get(treatment.selectTreatmentWithDriverIdentified).click();
    cy.intercept('POST', 'https://api-qa.goawakecloud.com.br/api//v2/audit/?isIdentification=false').as('audit');
    cy.get(treatment.textArea).click().type('Tratativa Válida');
    cy.get(treatment.finishTreatment).click();
    cy.wait('@audit').then((interception) => {
      expect(interception.response.statusCode).to.eq(201);
    })
    cy.intercept('GET', 'https://api-qa.goawakecloud.com.br/api/templates/customer-profile/1').as('templatepdf')
    cy.wait(3000)
    cy.get(treatment.generatePdf).click()
    cy.wait('@templatepdf').then((interception) => {
      expect(interception.response.statusCode).to.eq(200);
    })
    cy.window().then(win => {
      win.close();
    });
  })
})

describe('Treat Alert and capture audit id', () => {
  it('Treat Alert and capture audit id', () => {
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
    cy.wait(4000)
    cy.get(treatment.visualizeAlert).click();
    cy.get(treatment.selectMedia).wait(2000).click({multiple: true});
    cy.get(treatment.stepTwo).wait(2000).click();
    cy.get(treatment.stepThree).wait(2000).click();
    cy.get(treatment.filterTreatment).click();
    cy.get(treatment.selectTreatment).click();
    cy.intercept('POST', 'https://api-qa.goawakecloud.com.br/api//v2/audit/').as('audit');
    cy.get(treatment.textArea).click().type('Tratativa Válida');
    cy.get(treatment.finishTreatment).click();
    cy.wait(3000)
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
      cy.wait(5000);
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