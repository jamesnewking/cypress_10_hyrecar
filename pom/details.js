module.exports = class DetailsPage {
  constructor() {
    this.carYearModel = `h5:nth-child(1)`;
    this.carMake = `h5:nth-child(2)`;
    this.carPricePerDay = `h3:nth-child(1)`;
  }

  getCarYearModelElement() {
    return cy.get(this.carYearModel).first();
  }

  getCarMakeElement() {
    return cy.get(this.carMake).first();
  }

  getCarPricePerDayElement() {
    return cy.get(this.carPricePerDay).first();
  }
};
