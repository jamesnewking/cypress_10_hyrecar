module.exports = class LoginPage {
  constructor() {
    this.expectedPageTitle = `Rent a car, drive for Uber & Lyft (Quick Approval) - HyreCar`;
    this.username = `input[name="username"]`;
    this.password = `input[name="password"]`;
    this.loginButton = `button.MuiButton-root`;
    this.loginButtonText = `LogIn`;
  }

  enterCredentials() {
    cy.get(this.username).type(Cypress.env(`loginEmail`));
    cy.get(this.password).type(Cypress.env(`loginPassword`));
    cy.get(this.loginButton)
      .contains(this.loginButtonText)
      .click({ force: true });
  }
};
