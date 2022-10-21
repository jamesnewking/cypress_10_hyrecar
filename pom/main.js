module.exports = class MainHomePage {
  constructor() {
    this.testURL = `https://www.hyrecar.com/`;

    this.expectedPageTitle = `Rent a Car to Drive for Uber and other On-Demand Gigs | HyreCar`;
    this.navLogIn = `a.url-link`;
    this.navLogInText = `Log in`;
  }

  logIn() {
    cy.get(this.navLogIn).contains(this.navLogInText).click({ force: true });
  }
};
