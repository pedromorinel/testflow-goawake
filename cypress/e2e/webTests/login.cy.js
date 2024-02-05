import { goAwakeLogin} from "../pages/GoAwakeLinks";
import loginPages from "../pages/GoAwakeLoginPage";

describe('Login', () => {
  it('passes @1', () => {
    const goAwakeLoginPage = loginPages.goAwakeLoginPage();
    goAwakeLogin();
    cy.window().then((win) => {
      win.localStorage.setItem('mfaToken', '71fb8cec4a172e809b7e990b6f63af3a1f2ae6a90a06a3d6a3dae4ea6cec285e');
    });
    cy.wait(5000)
    cy.xpath(goAwakeLoginPage.usernameInput).type("p.morinel");
    cy.xpath(goAwakeLoginPage.passwordInput).type("Creare4455.");
    cy.xpath(goAwakeLoginPage.loginButton).click();
    });
  });;
