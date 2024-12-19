import { login, pages, text } from '../e2e/helpers/locators';

describe('Shopping Checkout', () => {
  
  beforeEach(() => {
    cy.fixture("login").then ((data) => {
      cy.visit(data.url);
    });
  });

  const doLogin = () => {
    cy.fixture("login").then ((data) => {
      cy.get(login.usernameTxtBox).type(data.username);
      cy.get(login.passwordTextBox).type(data.password);
      cy.get(login.loginBtn).click();
    });
  };

  const pageTitleValidation = (title) => {
    cy.get(pages.title).should('have.text', title);
  }

  const navigateToProduct = (productName) => {
    cy.contains(pages.productsList, productName)
      .eq(0)
      .click();
  }

  const addProductToCart = () => {
    cy.get(pages.addToCartBtn).click();
  }

  const clickCheckout = () => {
    cy.get(pages.shoppingCartBtn).click();
  }

  const removeProductFromProductPage = () => {
    cy.get(pages.removeProductBtn).click();
  }

  const productCheckout = () => {
    cy.get(pages.checkoutBtn).click();
  }

  const billingDetails = () => {
    cy.get(pages.billingFirstnameTxtBox).type(text.billingFirstname);
    cy.get(pages.billingLastnameTxtBox).type(text.billingLastname);
    cy.get(pages.billingPostalTxtBox).type(text.billingPostal);
    cy.get(pages.continueBtn).click();
  }

  const checkoutOverview = () => {
    pageTitleValidation(text.checkoutOverview);
    cy.get(pages.finishCheckoutBtn).click();
  }

  const checkoutCompleted = (headerTxt, completeTxt) => {
    pageTitleValidation(text.checkoutComplete);
    cy.get(pages.completeHeaderLbl).should('have.text', headerTxt);
    cy.get(pages.completeTextLbl).should('have.text', completeTxt);
    backToProduct();
  }

  const logout = () => {
    cy.get(pages.menu).click();
    cy.get(pages.logoutlnk).click();
    verifyLoginPage();
  }

  const backToProduct = () => {
    cy.get(pages.backToProductPageLnk).click();
  }

  const verifyProductCount = (count) => {
    cy.get(pages.cartItems).should("have.length", count);
  }

  const verifyLoginPage = () => {
    cy.get(login.loginBtn).should("be.visible");
    cy.get(login.loginBtn).should("exist");
  }

  const clickAddToCartFromProduct = () => {
    cy.get(pages.addToCartBtns)
      .each((_,index) => {
        cy.get(pages.addToCartBtns).eq(index).click();
      });
  }

  it('Checkout Single Product', () => {
    doLogin();
    pageTitleValidation(text.products);
    navigateToProduct(text.productTShirt);
    addProductToCart();
    backToProduct();
    pageTitleValidation(text.products);
    clickCheckout();
    pageTitleValidation(text.cart);
    verifyProductCount(1);
    productCheckout();
    pageTitleValidation(text.checkoutInfo);
    billingDetails();
    checkoutOverview();
    checkoutCompleted(text.orderCompleteGreetings, text.orderCompleteDetails);
    pageTitleValidation(text.products);
    logout();
  });

  it('Checkout Multiple Products', () => {
    doLogin();
    pageTitleValidation(text.products);
    navigateToProduct(text.productTShirt);
    addProductToCart();
    backToProduct();
    navigateToProduct(text.productJacket);
    addProductToCart();
    backToProduct();
    navigateToProduct(text.productBackpack);
    addProductToCart();
    clickCheckout();
    pageTitleValidation(text.cart);
    verifyProductCount(3);
    productCheckout();
    pageTitleValidation(text.checkoutInfo);
    billingDetails();
    checkoutOverview();
    checkoutCompleted(text.orderCompleteGreetings, text.orderCompleteDetails);
    pageTitleValidation(text.products);
    logout();
  });

  it.skip('Checkout Products From Products Page', () => {
    doLogin();
    pageTitleValidation(text.products);
    clickAddToCartFromProduct();
    clickCheckout();
    pageTitleValidation(text.cart);
    verifyProductCount(6);
    productCheckout();
    pageTitleValidation(text.checkoutInfo);
    billingDetails();
    checkoutOverview();
    checkoutCompleted(text.orderCompleteGreetings, text.orderCompleteDetails);
    pageTitleValidation(text.products);
    logout();
  });

  it.skip('Add Remove Multiple Products & Checkout', () => {
    doLogin();
    pageTitleValidation(text.products);
    navigateToProduct(text.productTShirt);
    addProductToCart();
    backToProduct();
    navigateToProduct(text.productJacket);
    addProductToCart();
    backToProduct();
    navigateToProduct(text.productBackpack);
    addProductToCart();
    clickCheckout();
    pageTitleValidation(text.cart);
    navigateToProduct(text.productBackpack);
    removeProductFromProductPage();
    clickCheckout();
    pageTitleValidation(text.cart);
    verifyProductCount(2);
    productCheckout();
    pageTitleValidation(text.checkoutInfo);
    billingDetails();
    checkoutOverview();
    checkoutCompleted(text.orderCompleteGreetings, text.orderCompleteDetails);
    pageTitleValidation(text.products);
    logout();
  });

})