import { goAwakeGestao } from "../../pages/GoAwakeLinks";
import managementObjects from "../../pages/GoAwakeManagementHomePage";
import driverPageObjects from "../../pages/GoAwakeManagementDrivePage";
import {generateRandomNumber} from "../../resources/randomNumber";

const navBar = managementObjects.navBar();
const driverPage = driverPageObjects.driverObjects();

describe('Edit driver', () => {
    it('passes @1', () => {
        cy.viewport(1920, 1080);
        goAwakeGestao();
        cy.get(navBar.menu).should('exist').click();
        cy.get(navBar.expandBar).click();
        cy.get(navBar.driverScreen).click();
        cy.get(driverPage.filterCustomer).click();
        cy.get(driverPage.inputCustomer).click().type('Creare Sistemas')
        cy.get(driverPage.selectCustomer).click();
        cy.get(driverPage.driverId).invoke('text').then((text) => {
            const randomDriversLicence = generateRandomNumber();
            const driverIdentification = text.trim();
            cy.wrap(driverIdentification).as('driverIdentification');
            cy.get(driverPage.editDriver).click();
            cy.get(driverPage.nameInput).click().clear().type('Exemplo');
            cy.intercept('PUT', 'https://api-qa.goawakecloud.com.br/api//v2/driver/'+driverIdentification+'?unlinkBadge=false').as('driverUpdate');
            cy.get(driverPage.driverLicenceInput).click().clear().type(randomDriversLicence);
            cy.get(driverPage.confirmEdit).click();
            cy.wait ('@driverUpdate').then((interception) => {
            expect(interception.response.statusCode).to.eq(200);
            })
        })
    })
})