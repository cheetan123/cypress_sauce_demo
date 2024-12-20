
class CommonHelper {

    validation = (locator, title) => {
        cy.get(locator).should('have.text', title);
      }
    
      clickBtnOrLink = (locator) => {
        cy.get(locator).click();
      }
}

export default CommonHelper;