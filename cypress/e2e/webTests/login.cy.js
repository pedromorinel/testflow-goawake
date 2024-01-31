import { goAwakeLogin} from "../pages/GoAwakeLinksPO";
import loginPages from "../pages/GoAwakeLoginPagePO";
import { google } from 'googleapis';

describe('Login', () => {
  it('passes', () => {
    const goAwakeLoginPage = loginPages.goAwakeLoginPage();
    goAwakeLogin();
    cy.wait(5000)
    cy.xpath(goAwakeLoginPage.selectors.usernameInput).type("p.morinel");
    cy.xpath(goAwakeLoginPage.selectors.passwordInput).type("Creare4455.");
    cy.xpath(goAwakeLoginPage.selectors.loginButton).click();
    const auth = new google.auth.OAuth2(
      'S41364301866-pcfmddldj4enela9bgjbjrvbd1m63rq0.apps.googleusercontent.com',
      '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',
      'https://mail.google.com/mail/u/0/?ogbl'
    );
  });
});
