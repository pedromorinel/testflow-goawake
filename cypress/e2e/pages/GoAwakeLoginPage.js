class loginPages {
    constructor () {
      this.selectors = {};
    }

    goAwakeLoginPage() {
      this.selectors = {
          usernameInput: '/html/body/div[1]/div[3]/div[2]/div[1]/div/input[1]',
          passwordInput: '/html/body/div[1]/div[3]/div[2]/div[1]/div/input[2]',
          loginButton: '/html/body/div[1]/div[3]/div[2]/div[1]/div/button'
      };
      return this.selectors;
    }

    managementLoginPage() {
      this.selectors = {
          usernameInput: '#mat-input-0',
          passwordInput: '#mat-input-1',
          loginButton: 'body > app-root > app-auth-layout > div > div > div > app-login > fieldset > form > button'
      };
      return this.selectors;
    }

}

export default new loginPages();
  