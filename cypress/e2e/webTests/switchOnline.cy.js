import { goAwakeNoCaptcha } from "../pages/GoAwakeLinksPO";
import homeObjects from './../pages/GoAwakeHomePagePO';

describe('Switch Online', () => {
    it('passes', () => {
        const filterObjects = homeObjects.filterObjects();
        cy.viewport(1920, 1080)
        goAwakeNoCaptcha();
        cy.intercept('POST', 'https://api-qa.goawakecloud.com.br/api/alarmsByDateInterval/customers').as('customers')
        cy.wait(4000)
        cy.xpath(filterObjects.filterCustomer).click();
        cy.xpath(filterObjects.selectCustomer).click();
        cy.xpath(filterObjects.switchOnline).click();
        cy.wait('@customers').then((interception) => {
        expect(interception.response.statusCode).to.eq(200);
        })
    });
});
