import { goAwakeNoCaptcha } from '../../pages/GoAwakeLinks';
import homeObjects from '../../pages/GoAwakeHomePage';

describe('Testing cameras informations', () => {
    it('Cameras informations', () => {
        const filterObjects = homeObjects.filterObjects();
        cy.viewport(1920, 1080);
        goAwakeNoCaptcha();
        cy.wait(5000);
        cy.get(filterObjects.filterCustomer).should('be.visible').click();
        cy.get(filterObjects.searchCustomer).should('be.visible').click().type('Samarco');
        cy.get(filterObjects.selectCustomer).should('be.visible').click();
        cy.intercept('POST', 'https://api-qa.goawakecloud.com.br/api/alarmsByDateInterval/customers').as('customers');
        cy.get(filterObjects.searchAlerts).should('be.visible').click();
        cy.wait(2000)
        cy.get(filterObjects.customerWithoutAlerts).click();
        cy.get(filterObjects.camerasWithoutComunication).should('contain', '10')
        cy.get(filterObjects.camerasInMaintenance).should('contain', '3')
    });
})

describe('Testing customer filter', () => {
    it('Customer filter', () => {
        const filterObjects = homeObjects.filterObjects();
        cy.viewport(1920, 1080);
        goAwakeNoCaptcha();
        cy.wait(5000)
        cy.get(filterObjects.filterCustomer).should('be.visible').click();
        cy.get(filterObjects.searchCustomer).should('be.visible').click().type('Samarco');
        cy.get(filterObjects.selectCustomer).should('be.visible').click();
        cy.intercept('POST', 'https://api-qa.goawakecloud.com.br/api/alarmsByDateInterval/customers').as('customers');
        cy.get(filterObjects.searchAlerts).should('be.visible').click();
        cy.wait('@customers').then((interception) => {
            expect(interception.response.statusCode).to.eq(200);
            expect(interception.request.body.custIds[0]).to.eq(4588);
        });
    });
})

describe('Testing driver filter', () => {
    it('Driver filter', () => {
        const filterObjects = homeObjects.filterObjects();
        cy.viewport(1920, 1080);
        cy.exec('node ./cypress/e2e/resources/generateLowRiskAlert.js');
        cy.exec('node ./cypress/e2e/resources/updateDriver.js');
        goAwakeNoCaptcha();
        cy.wait(5000);
        cy.get(filterObjects.filterCustomer).should('be.visible').click();
        cy.get(filterObjects.searchCustomer).should('be.visible').click().type('Creare Sistemas');
        cy.get(filterObjects.selectCustomer).should('be.visible').click();
        cy.wait(3000);
        cy.get(filterObjects.filterDriver).should('be.visible').click();
        cy.get(filterObjects.searchDriver).should('be.visible').click().type('Nubia');
        cy.wait(3000)
        cy.get(filterObjects.selectDriver).should('be.visible').click();
        cy.intercept('POST', 'https://api-qa.goawakecloud.com.br/api/alarmsByDateInterval/customers').as('customers');
        cy.get(filterObjects.searchAlerts).should('be.visible').click();
        cy.wait('@customers').then((interception) => {
            expect(interception.response.statusCode).to.eq(200);
            expect(interception.request.body.driverIds[0]).to.eq(82487);
        });
    });
})

describe('Testing vehicle filter', () => {
    it('Vehicle filter', () => {
        const filterObjects = homeObjects.filterObjects();
        cy.viewport(1920, 1080);
        cy.exec('node ./cypress/e2e/resources/generateLowRiskAlert.js');
        goAwakeNoCaptcha();
        cy.wait(5000);
        cy.get(filterObjects.filterCustomer).should('be.visible').click();
        cy.get(filterObjects.searchCustomer).should('be.visible').click().type('Creare Sistemas');
        cy.get(filterObjects.selectCustomer).should('be.visible').click();
        cy.wait(3000);
        cy.get(filterObjects.filterVehicle).should('be.visible').click();
        cy.get(filterObjects.searchVehicle).should('be.visible').click().type('TESTEMKT');
        cy.wait(3000)
        cy.get(filterObjects.selectVehicle).should('be.visible').click();
        cy.intercept('POST', 'https://api-qa.goawakecloud.com.br/api/alarmsByDateInterval/customers').as('customers');
        cy.get(filterObjects.searchAlerts).should('be.visible').click();
        cy.wait('@customers').then((interception) => {
            expect(interception.response.statusCode).to.eq(200);
            expect(interception.request.body.vehicleIds[0]).to.eq(157437);
        });
    });
})

describe('Testing customer pre select', () => {
    it('Customer pre select', () => {
        const filterObjects = homeObjects.filterObjects();
        cy.viewport(1920, 1080);
        goAwakeNoCaptcha();
        cy.wait(4000)
        cy.get(filterObjects.preSelectCustomersFilter).should('be.visible').click();
        cy.get(filterObjects.selectCustomerFilter).should('be.visible').click();
        cy.get(filterObjects.applyCustomerFilter).should('be.visible').click();
        cy.intercept('POST', 'https://api-qa.goawakecloud.com.br/api/alarmsByDateInterval/customers').as('customers');
        cy.get(filterObjects.searchAlerts).should('be.visible').click();
        cy.wait('@customers').then((interception) => {
            expect(interception.response.statusCode).to.eq(200);
            expect(interception.request.body.custIds[0]).to.eq(4588);
        });
    })
})


