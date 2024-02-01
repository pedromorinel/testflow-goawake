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

    gestãoLoginPage() {
      this.selectors = {
          usernameInput: '/html/body/app-root/app-auth-layout/div/div/div/app-login/fieldset/form/mat-form-field[1]/div/div[1]/div[3]/input',
          passwordInput: '/html/body/app-root/app-auth-layout/div/div/div/app-login/fieldset/form/mat-form-field[2]/div/div[1]/div[3]/input',
          loginButton: '/html/body/app-root/app-auth-layout/div/div/div/app-login/fieldset/form/button'
      };
      return this.selectors;
    }

}

export default new loginPages();
  