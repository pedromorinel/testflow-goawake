import { goAwakeLogin} from "../pages/GoAwakeLinksPO";
import loginPages from "../pages/GoAwakeLoginPagePO";

describe('Login', () => {
  it('passes', () => {
    const goAwakeLoginPage = loginPages.goAwakeLoginPage();
    goAwakeLogin();
    cy.wait(5000)
    cy.xpath(goAwakeLoginPage.usernameInput).type("p.morinel");
    cy.xpath(goAwakeLoginPage.passwordInput).type("Creare4455.");
    cy.xpath(goAwakeLoginPage.loginButton).click();
    });
  });;
