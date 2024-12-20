import { text } from '../e2e/helpers/locators';
import LoginPage from './pages/LoginPage';
import ProductPage from './pages/ProductsPage';
import CheckoutPage from './pages/CheckoutPage';

describe('Shopping Checkout', () => {

  var loginPage = new LoginPage();
  var productPage = new ProductPage();
  var checkoutPage = new CheckoutPage();
  
  beforeEach(() => {
      cy.visit("/");
  });

  it('Checkout Single Product', () => {
    loginPage.doLogin();
    productPage.pageTitleValidation(text.products);
    productPage.navigateToProduct(text.productTShirt);
    productPage.addProductToCart();
    productPage.backToProduct();
    productPage.pageTitleValidation(text.products);
    productPage.clickCheckout();
    productPage.pageTitleValidation(text.cart);
    checkoutPage.verifyProductCount(1);
    productPage.productCheckout();
    productPage.pageTitleValidation(text.checkoutInfo);
    checkoutPage.billingDetails();
    checkoutPage.checkoutOverview();
    checkoutPage.checkoutCompleted(text.orderCompleteGreetings, text.orderCompleteDetails);
    productPage.pageTitleValidation(text.products);
    productPage.logout();
  });

  it('Checkout Multiple Products', () => {
    loginPage.doLogin();
    productPage.pageTitleValidation(text.products);
    productPage.navigateToProduct(text.productTShirt);
    productPage.addProductToCart();
    productPage.backToProduct();
    productPage.navigateToProduct(text.productJacket);
    productPage.addProductToCart();
    productPage.backToProduct();
    productPage.navigateToProduct(text.productBackpack);
    productPage.addProductToCart();
    productPage.clickCheckout();
    productPage.pageTitleValidation(text.cart);
    checkoutPage.verifyProductCount(3);
    productPage.productCheckout();
    productPage.pageTitleValidation(text.checkoutInfo);
    checkoutPage.billingDetails();
    checkoutPage.checkoutOverview();
    checkoutPage.checkoutCompleted(text.orderCompleteGreetings, text.orderCompleteDetails);
    productPage.pageTitleValidation(text.products);
    productPage.logout();
  });

  it('Checkout Products From Products Page', () => {
    loginPage.doLogin();
    productPage.pageTitleValidation(text.products);
    productPage.clickAddToCartFromProduct();
    productPage.clickCheckout();
    productPage.pageTitleValidation(text.cart);
    checkoutPage.verifyProductCount(6);
    productPage.productCheckout();
    productPage.pageTitleValidation(text.checkoutInfo);
    checkoutPage.billingDetails();
    checkoutPage.checkoutOverview();
    checkoutPage.checkoutCompleted(text.orderCompleteGreetings, text.orderCompleteDetails);
    productPage.pageTitleValidation(text.products);
    productPage.logout();
  });

  it('Add Remove Multiple Products & Checkout', () => {
    loginPage.doLogin();
    productPage.pageTitleValidation(text.products);
    productPage.navigateToProduct(text.productTShirt);
    productPage.addProductToCart();
    productPage.backToProduct();
    productPage.navigateToProduct(text.productJacket);
    productPage.addProductToCart();
    productPage.backToProduct();
    productPage.navigateToProduct(text.productBackpack);
    productPage.addProductToCart();
    productPage.clickCheckout();
    productPage.pageTitleValidation(text.cart);
    productPage.navigateToProduct(text.productBackpack);
    productPage.removeProductFromProductPage();
    productPage.clickCheckout();
    productPage.pageTitleValidation(text.cart);
    checkoutPage.verifyProductCount(2);
    productPage.productCheckout();
    productPage.pageTitleValidation(text.checkoutInfo);
    checkoutPage.billingDetails();
    checkoutPage.checkoutOverview();
    checkoutPage.checkoutCompleted(text.orderCompleteGreetings, text.orderCompleteDetails);
    productPage.pageTitleValidation(text.products);
    productPage.logout();
  });

})