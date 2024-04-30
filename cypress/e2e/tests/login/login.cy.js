import { goAwakeLogin} from "../../pages/GoAwakeLinks";
import loginPages from "../../pages/GoAwakeLoginPage";

describe('Login', () => {
  it('Login', () => {
    const goAwakeLoginPage = loginPages.goAwakeLoginPage();
    goAwakeLogin();
    cy.window().then((win) => {
      win.localStorage.setItem('mfaToken', 'd599006e53db16ee86be1bdd0e57b2c2ffb522762a01ae51c848e0871dcd9dc4');
    });
    cy.wait(5000)
    cy.xpath(goAwakeLoginPage.usernameInput).type("p.morinel");
    cy.xpath(goAwakeLoginPage.passwordInput).type("PedroCM101.");
    cy.xpath(goAwakeLoginPage.loginButton).click();
    });
  });;
