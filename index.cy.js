// const { describe } = require("mocha");
const MainPage = require(`./pom/main`);
const LoginPage = require(`./pom/login`);
const CollectionPage = require(`./pom/collection`);
const DetailsPage = require(`./pom/details`);

describe(`HyreCar automation`, () => {
  const car = {
    tile: {},
    details: {},
  };
  Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });
  it(`Open HyreCar`, () => {
    const mainHomePage = new MainPage();
    cy.visit(mainHomePage.testURL);
    cy.title().should(`eq`, mainHomePage.expectedPageTitle);
    cy.clearLocalStorage();
  });
  describe(`Rent a car`, () => {
    it(`1) Click on Log in`, () => {
      const mainHomePage = new MainPage();
      mainHomePage.logIn();
    });
    it(`2) Log in using valid credentials`, () => {
      const loginPage = new LoginPage();
      loginPage.enterCredentials();
    });
    it(`3) Select a car from tile`, () => {
      const collectionPage = new CollectionPage();
      cy.wait(5000);
      collectionPage
        .getFirstProductTileCarYearModelElement()
        .then(($firstProductTileCarYearModel) => {
          console.log(
            `1st Tile Car Year and Model: ${$firstProductTileCarYearModel.text()}`
          );
          car.tile.yearModel = $firstProductTileCarYearModel.text();
        });
      collectionPage
        .getFirstProductTileCarMakeElement()
        .then(($firstProductTileCarMake) => {
          console.log(`1st Tile Car Make: ${$firstProductTileCarMake.text()}`);
          car.tile.make = $firstProductTileCarMake.text();
        });
      collectionPage
        .getFirstProductTileCarPricePerDayElement()
        .then(($firstProductTileCarPrice) => {
          console.log(
            `1st Tile Car Price: ${$firstProductTileCarPrice.text()}`
          );
          car.tile.price = $firstProductTileCarPrice.text();
        });
      collectionPage.getProductTileElements().then(($productTiles) => {
        console.log(`Number of car tiles: ${$productTiles.length}`);
      });
      collectionPage.selectFirstTile();
    });
    it(`4) Car details`, () => {
      const detailsPage = new DetailsPage();
      detailsPage.getCarYearModelElement().then(($carYearModel) => {
        console.log(`Car Year and Model: ${$carYearModel.text()}`);
        car.details.yearModel = $carYearModel.text();
        expect(car.details.yearModel).equal(car.tile.yearModel);
      });
      detailsPage.getCarMakeElement().then(($carMake) => {
        console.log(`Car Make: ${$carMake.text()}`);
        car.details.make = $carMake.text();
        expect(car.details.make).equal(car.tile.make);
      });
      detailsPage.getCarPricePerDayElement().then(($carPricePerDay) => {
        console.log(`Car Make: ${$carPricePerDay.text()}`);
        car.details.price = $carPricePerDay.text();
        expect(car.details.price).equal(car.tile.price);
        // console.table(car);
      });
    });
  });
});
