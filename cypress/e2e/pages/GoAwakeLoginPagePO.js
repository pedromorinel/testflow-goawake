class loginPage {
    constructor () {
      this.selectors = {
        usernameInput: '/html/body/div[1]/div[3]/div[2]/div[1]/div/input[1]',
        passwordInput: '/html/body/div[1]/div[3]/div[2]/div[1]/div/input[2]',
        loginButton: '/html/body/div[1]/div[3]/div[2]/div[1]/div/button'
      };
    }
}

export default new loginPage();
  