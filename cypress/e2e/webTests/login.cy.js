import { goAwakeLogin} from "../pages/GoAwakeLinks";
import loginPages from "../pages/GoAwakeLoginPage";

describe('Login', () => {
  it('passes @1', () => {
    const goAwakeLoginPage = loginPages.goAwakeLoginPage();
    goAwakeLogin();
    cy.wait(5000)
    cy.xpath(goAwakeLoginPage.usernameInput).type("p.morinel");
    cy.xpath(goAwakeLoginPage.passwordInput).type("Creare4455.");
    cy.xpath(goAwakeLoginPage.loginButton).click();
    });
  });;
