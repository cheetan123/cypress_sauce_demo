import { pages,login } from '../helpers/locators';
import CommonHelper from './CommonHelper';
import LoginPage from './LoginPage';

class ProductsPage extends CommonHelper {

  constructor() {
    super();
    this.loginPage = new LoginPage();
    this.commonHelper = new CommonHelper();
  }

  navigateToProduct = (productName) => {
    cy.contains(pages.productsList, productName)
      .eq(0)
      .click();
  }

  addProductToCart = () => {
    this.commonHelper.clickBtnOrLink(pages.addToCartBtn);
  }

  clickCheckout = () => {
    this.commonHelper.clickBtnOrLink(pages.shoppingCartBtn);
  }

  removeProductFromProductPage = () => {
    this.commonHelper.clickBtnOrLink(pages.removeProductBtn);
  }
  
  productCheckout = () => {
    this.commonHelper.clickBtnOrLink(pages.checkoutBtn);
  }

  backToProduct = () => {
    this.commonHelper.clickBtnOrLink(pages.backToProductPageLnk);
  }

  logout = () => {
    this.commonHelper.clickBtnOrLink(pages.menu);
    this.commonHelper.clickBtnOrLink(pages.logoutlnk);
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