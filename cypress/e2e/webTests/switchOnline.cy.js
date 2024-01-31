import { goAwakeNoCaptcha } from "../pages/GoAwakeLinksPO";
import filterObjects from './../pages/GoAwakeHomePagePO';

describe('Switch Online', () => {
    it('passes', () => {
        cy.viewport(1920, 1080)
        goAwakeNoCaptcha();
        cy.intercept('POST', 'https://api-qa.goawakecloud.com.br/api/alarmsByDateInterval/customers').as('customers')
        cy.wait(5000)
        cy.xpath(filterObjects.selectors.filterCustomer).click();
        cy.xpath(filterObjects.selectors.selectCustomer).click();
        cy.xpath(filterObjects.selectors.switchOnline).click();
        cy.wait('@customers').then((interception) => {
        expect(interception.response.statusCode).to.eq(200);
        })
    });
});
