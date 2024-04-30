import { goAwakeNoCaptcha } from "../../pages/GoAwakeLinks";
import homeObjects from '../../pages/GoAwakeHomePage';

describe('Switch Online', () => {
    it('passes @1', () => {
        const filterObjects = homeObjects.filterObjects();
        cy.viewport(1920, 1080)
        goAwakeNoCaptcha();
        cy.intercept('POST', 'https://api-qa.goawakecloud.com.br/api/alarmsByDateInterval/customers').as('customers')
        cy.wait(4000)
        cy.get(filterObjects.filterCustomer).click();
        cy.get(filterObjects.searchCustomer).click().type('Creare Sistemas');
        cy.get(filterObjects.selectCustomer).click();
        cy.get(filterObjects.switchOnline).click();
        cy.wait('@customers').then((interception) => {
        expect(interception.response.statusCode).to.eq(200);
        cy.intercept('POST', 'https://api-qa.goawakecloud.com.br/api/alarmsByDateInterval/customers').as('customersAfter30Seconds');
        cy.wait(30000);
        cy.wait('@customersAfter30Seconds').then((secondInterception) => {
            expect(secondInterception.response.statusCode).to.eq(200);
        })
    })});
});
