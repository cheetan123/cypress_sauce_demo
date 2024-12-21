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

  generateIndex = (len) => {
    return Math.floor(Math.random() * ((len-1) - 0 + 1)) + 0;
  }

  selectRandomProducts = (locator) => {
    const indexes = [];
    cy.get(locator)
    .its('length')
    .then((len) => {
      var count = 0;
      var index = this.generateIndex(len);
      indexes.push(index);
      while(count < 3) {  
        var nextIndex = Math.floor(Math.random() * ((len-1) - 0 + 1)) + 0;
        if(!indexes.includes(nextIndex)) {
          cy.get(locator)
            .eq(index)
            .should('have.text', 'Add to cart')
            .click()

            index = nextIndex;
            indexes.push(index);
            count = count + 1;
        }
      }
    })
  }
}

export default ProductsPage;