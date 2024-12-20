import { login } from '../helpers/locators';

class LoginPage {

    constructor() {
        //test constructor
    }

    doLogin = () => {
        cy.reload();
        cy.fixture("login").then ((data) => {
            cy.get(login.usernameTxtBox).type(data.username);
            cy.get(login.passwordTextBox).type(data.password);
            cy.get(login.loginBtn).click();
        });
    };

    verifyLoginPage = (loginBtn) => {
        cy.get(loginBtn).should("be.visible");
        cy.get(loginBtn).should("exist");
    }
}

export default LoginPage;