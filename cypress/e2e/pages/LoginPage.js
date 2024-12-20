import { login } from '../helpers/locators';

class LoginPage {

    constructor() {
        //test constructor
    }

    setUsername(username) {
        cy.get(login.usernameTxtBox).type(username);
    }

    setPassword(password) {
        cy.get(login.passwordTextBox).type(password);
    }

    clickLogin() {
        cy.get(login.loginBtn).click();
    }

    verifyLoginPage = (loginBtn) => {
        cy.get(loginBtn).should("be.visible");
        cy.get(loginBtn).should("exist");
    }
}

export default LoginPage;