import { pages, text } from '../helpers/locators';
import CommonHelper from './CommonHelper';
import ProductsPage from './ProductsPage';

class CheckoutPage extends CommonHelper {

    constructor() {
        super();
        this.productsPage = new ProductsPage();
        this.commonHelper = new CommonHelper();
    }

    billingDetails = () => {
        cy.get(pages.billingFirstnameTxtBox).type(text.billingFirstname);
        cy.get(pages.billingLastnameTxtBox).type(text.billingLastname);
        cy.get(pages.billingPostalTxtBox).type(text.billingPostal);
        this.commonHelper.clickBtnOrLink(pages.continueBtn);
    }

    verifyProductCount = (count) => {
        cy.get(pages.cartItems).should("have.length", count);
    }

    checkoutOverview = (locator, validationText) => {
        this.commonHelper.validation(locator, validationText);
        this.commonHelper.clickBtnOrLink(pages.finishCheckoutBtn);  
    }
  
    checkoutCompleted = (headerTxt, completeTxt) => {
        this.commonHelper.validation(pages.title, text.checkoutComplete);
        cy.get(pages.completeHeaderLbl).should('have.text', headerTxt);
        cy.get(pages.completeTextLbl).should('have.text', completeTxt);
        this.productsPage.backToProduct();
    }
}

export default CheckoutPage;