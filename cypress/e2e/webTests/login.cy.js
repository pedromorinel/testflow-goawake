import { goAwakeLogin} from "../pages/GoAwakeLinksPO";
import loginPage from "../pages/GoAwakeLoginPagePO";
import { google } from 'googleapis';

describe('Login', () => {
  it('passes', () => {
    goAwakeLogin();
    cy.wait(5000)
    cy.xpath(loginPage.selectors.usernameInput).type("p.morinel");
    cy.xpath(loginPage.selectors.passwordInput).type("Creare4455.");
    cy.xpath(loginPage.selectors.loginButton).click();
    const auth = new google.auth.OAuth2(
      'S41364301866-pcfmddldj4enela9bgjbjrvbd1m63rq0.apps.googleusercontent.com',
      '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',
      'https://mail.google.com/mail/u/0/?ogbl'
    );
  });
});
