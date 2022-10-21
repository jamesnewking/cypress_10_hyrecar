module.exports = class CollectionPage {
  constructor() {
    this.expectedPageTitle = `Rent a car, drive for Uber & Lyft (Quick Approval) - HyreCar`;
    this.productTiles = `div.ais-InstantSearch__root > div > div > div:nth-child(2) > div > div > div`;
    this.firstProductTile = `div.ais-InstantSearch__root > div > div > div:nth-child(2) > div > div:nth-child(1)`;
    this.firstProductTileCarYearModel = `div.ais-InstantSearch__root > div > div > div:nth-child(2) > div > div:nth-child(1) > div > div > div > div > div > h5:nth-child(1)`;
    this.firstProductTileCarMake = `div.ais-InstantSearch__root > div > div > div:nth-child(2) > div > div:nth-child(1) > div > div > div > div > div > h5:nth-child(2)`;
    this.firstProductTileCarPricePerDay = `div.ais-InstantSearch__root > div > div > div:nth-child(2) > div > div:nth-child(1) > div > div > div > div:nth-child(2) > div:nth-child(2) > h3`;
    this.locationLabel = `label.control-label[for="location"]`;
  }

  getProductTileElements() {
    return cy.get(this.productTiles);
  }

  selectFirstTile() {
    cy.get(this.firstProductTile).click();
  }

  getFirstProductTileCarYearModelElement() {
    return cy.get(this.firstProductTileCarYearModel);
  }

  getFirstProductTileCarMakeElement() {
    return cy.get(this.firstProductTileCarMake);
  }

  getFirstProductTileCarPricePerDayElement() {
    return cy.get(this.firstProductTileCarPricePerDay);
  }
};
