import { goAwakeNoCaptcha } from "../pages/GoAwakeLinks"
import homeObjects  from "../pages/GoAwakeHomePage"
import auditObjects from '../pages/GoAwakeAuditPage'

describe('Audit Alert', () => {
    it('passes @4', () => {
        const auditScreen = homeObjects.navBar();
        const auditFilters = auditObjects.filters();
        const auditFlow = auditObjects.auditTable();
        cy.viewport(1920, 1080);
        goAwakeNoCaptcha();
        cy.wait(5000);
        cy.get(auditScreen.auditPage).click();
        cy.wait(3000);
        cy.get(auditFilters.treatedIn).click().click();
        cy.get(auditFlow.alertComunicate).click();
        cy.get(auditFlow.auditButton).click();
        cy.get(auditFlow.auditComment).click().type('Auditoria Validada');
        cy.intercept('POST', 'https://api-qa.goawakecloud.com.br/api/alarmsAuditByDateInterval/customers').as('customers')
        cy.get(auditFlow.auditApprove).click();
        cy.wait('@customers').then((interception) => {
        expect(interception.response.statusCode).to.eq(200);
        })
    })
  })