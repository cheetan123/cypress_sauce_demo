import { pages, text } from '../helpers/locators';
import ProductsPage from './ProductsPage';

class CheckoutPage {

    constructor() {
        this.productsPage = new ProductsPage();
    }

    billingDetails = () => {
        cy.get(pages.billingFirstnameTxtBox).type(text.billingFirstname);
        cy.get(pages.billingLastnameTxtBox).type(text.billingLastname);
        cy.get(pages.billingPostalTxtBox).type(text.billingPostal);
        cy.get(pages.continueBtn).click();
    }

    verifyProductCount = (count) => {
        cy.get(pages.cartItems).should("have.length", count);
    }

    checkoutOverview = () => {
        this.productsPage.pageTitleValidation(text.checkoutOverview);
        cy.get(pages.finishCheckoutBtn).click();  
    }
  
    checkoutCompleted = (headerTxt, completeTxt) => {
        this.productsPage.pageTitleValidation(text.checkoutComplete);
        cy.get(pages.completeHeaderLbl).should('have.text', headerTxt);
        cy.get(pages.completeTextLbl).should('have.text', completeTxt);
        this.productsPage.backToProduct();
    }
}

export default CheckoutPage;