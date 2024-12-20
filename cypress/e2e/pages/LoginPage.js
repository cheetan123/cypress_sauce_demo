import { login } from '../helpers/locators';
import CommonHelper from './CommonHelper';

class LoginPage extends CommonHelper{

    constructor() {
        super();
        this.commonHelper = new CommonHelper();
    }

    setUsername(username) {

        cy.get(login.usernameTxtBox).type(username);
    }

    setPassword(password) {
        cy.get(login.passwordTextBox).type(password);
    }

    clickLogin() {
        this.commonHelper.clickBtnOrLink(login.loginBtn);
    }

    verifyLoginPage = (loginBtn) => {
        cy.get(loginBtn).should("be.visible");
        cy.get(loginBtn).should("exist");
    }

    doLogin = () => {
        cy.reload();
        cy.fixture("login").then ((data) => {      
          this.setUsername(data.username);
          this.setPassword(data.password);
        });
        this.clickLogin();
      };
}

export default LoginPage;