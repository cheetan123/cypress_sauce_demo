import { pages,login } from '../helpers/locators';
import LoginPage from './LoginPage';

class ProductsPage {

  constructor() {
    this.loginPage = new LoginPage();
  }

  pageTitleValidation = (title) => {
    cy.get(pages.title).should('have.text', title);
  }

  navigateToProduct = (productName) => {
    cy.contains(pages.productsList, productName)
      .eq(0)
      .click();
  }

  addProductToCart = () => {
    cy.get(pages.addToCartBtn).click();
  }

  clickCheckout = () => {
    cy.get(pages.shoppingCartBtn).click();
  }

  removeProductFromProductPage = () => {
    cy.get(pages.removeProductBtn).click();
  }
  
  productCheckout = () => {
    cy.get(pages.checkoutBtn).click();
  }

  backToProduct = () => {
    cy.get(pages.backToProductPageLnk).click();
  }

  logout = () => {
    cy.get(pages.menu).click();
    cy.get(pages.logoutlnk).click();
    this.loginPage.verifyLoginPage(login.loginBtn)
  }

  clickAddToCartFromProduct = () => {
    cy.get(pages.addToCartBtns)
      .each((_,index) => {
            cy.get(pages.addToCartBtns).eq(index).click();
        });
  }
}

export default ProductsPage;