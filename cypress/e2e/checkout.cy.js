import { pages, text } from '../e2e/helpers/locators';
import LoginPage from './pages/LoginPage';
import ProductPage from './pages/ProductsPage';
import CheckoutPage from './pages/CheckoutPage';
import CommonHelper from './pages/CommonHelper';

describe('Shopping Checkout', () => {

  var loginPage = new LoginPage();
  var productPage = new ProductPage();
  var checkoutPage = new CheckoutPage();
  var commonHelper = new CommonHelper();
  
  beforeEach(() => {
      cy.visit("/");
  });

  it('Checkout Single Product', () => {
    loginPage.doLogin();
    commonHelper.validation(pages.title, text.products);
    productPage.navigateToProduct(text.productTShirt);
    productPage.addProductToCart();
    productPage.backToProduct();
    commonHelper.validation(pages.title, text.products);
    productPage.clickCheckout();
    commonHelper.validation(pages.title, text.cart);
    checkoutPage.verifyProductCount(1);
    productPage.productCheckout();
    commonHelper.validation(pages.title, text.checkoutInfo);
    checkoutPage.billingDetails();
    checkoutPage.checkoutOverview(pages.title, text.checkoutOverview);
    checkoutPage.checkoutCompleted(text.orderCompleteGreetings, text.orderCompleteDetails);
    commonHelper.validation(pages.title, text.products);
    productPage.logout();
  });

  it('Checkout Multiple Products', () => {
    loginPage.doLogin();
    commonHelper.validation(pages.title, text.products);
    productPage.navigateToProduct(text.productTShirt);
    productPage.addProductToCart();
    productPage.backToProduct();
    productPage.navigateToProduct(text.productJacket);
    productPage.addProductToCart();
    productPage.backToProduct();
    productPage.navigateToProduct(text.productBackpack);
    productPage.addProductToCart();
    productPage.clickCheckout();
    commonHelper.validation(pages.title, text.cart);
    checkoutPage.verifyProductCount(3);
    productPage.productCheckout();
    commonHelper.validation(pages.title, text.checkoutInfo);
    checkoutPage.billingDetails();
    checkoutPage.checkoutOverview(pages.title, text.checkoutOverview);
    checkoutPage.checkoutCompleted(text.orderCompleteGreetings, text.orderCompleteDetails);
    commonHelper.validation(pages.title, text.products);
    productPage.logout();
  });

  it('Checkout Products From Products Page', () => {
    loginPage.doLogin();
    commonHelper.validation(pages.title, text.products);
    productPage.clickAddToCartFromProduct();
    productPage.clickCheckout();
    commonHelper.validation(pages.title, text.cart);
    checkoutPage.verifyProductCount(6);
    productPage.productCheckout();
    commonHelper.validation(pages.title, text.checkoutInfo);
    checkoutPage.billingDetails();
    checkoutPage.checkoutOverview(pages.title, text.checkoutOverview);
    checkoutPage.checkoutCompleted(text.orderCompleteGreetings, text.orderCompleteDetails);
    commonHelper.validation(pages.title, text.products);
    productPage.logout();
  });

  it('Add Remove Multiple Products & Checkout', () => {
    loginPage.doLogin();
    commonHelper.validation(pages.title, text.products);
    productPage.navigateToProduct(text.productTShirt);
    productPage.addProductToCart();
    productPage.backToProduct();
    productPage.navigateToProduct(text.productJacket);
    productPage.addProductToCart();
    productPage.backToProduct();
    productPage.navigateToProduct(text.productBackpack);
    productPage.addProductToCart();
    productPage.clickCheckout();
    commonHelper.validation(pages.title, text.cart);
    productPage.navigateToProduct(text.productBackpack);
    productPage.removeProductFromProductPage();
    productPage.clickCheckout();
    commonHelper.validation(pages.title, text.cart);
    checkoutPage.verifyProductCount(2);
    productPage.productCheckout();
    commonHelper.validation(pages.title, text.checkoutInfo);
    checkoutPage.billingDetails();
    checkoutPage.checkoutOverview(pages.title, text.checkoutOverview);
    checkoutPage.checkoutCompleted(text.orderCompleteGreetings, text.orderCompleteDetails);
    commonHelper.validation(pages.title, text.products);
    productPage.logout();
  });

})