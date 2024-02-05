import { goAwakeGestao } from "../pages/GoAwakeLinks";
import loginPages from "../pages/GoAwakeLoginPage";
import managementObjects from "../pages/GoAwakeManagementHomePage";

const managementLogin = loginPages.managementLoginPage();
const navBar = managementObjects.navBar();

describe('Edit driver', () => {
    it('passes @1', () => {
        cy.viewport(1920, 1080);
        goAwakeGestao();
        cy.window().then((win) => {
            win.localStorage.setItem('mfaToken', '71fb8cec4a172e809b7e990b6f63af3a1f2ae6a90a06a3d6a3dae4ea6cec285e');
        });
        cy.get(managementLogin.usernameInput).click().type('p.morinel');
        cy.get(managementLogin.passwordInput).click().type('Creare4455.');
        cy.get(managementLogin.loginButton).click();
        cy.get(navBar.menu).should('exist').click();
        cy.get(navBar.expandBar).click();
        cy.get(navBar.driverScreen).click();
    })
})