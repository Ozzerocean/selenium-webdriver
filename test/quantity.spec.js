const assert = require('chai').assert;
const { Builder, Capabilities } = require('selenium-webdriver');
const ProductPage = require('../pages/productPage');

describe('Adding an item to the bag', () => {
  const pageUrl = 'https://www.honeyroseusa.com/ecwid#!/WHITE/p/47998162/category=32354212';

  before(async function () {
    const capabilities = {
      ...Capabilities.chrome(),
    };
    this.driver = await new Builder().usingServer('http://localhost:4444/wd/hub').withCapabilities(capabilities).build();
    await this.driver.manage().window().maximize();
  });

  it('Choose Quantity of the product lower then 1', async function () {
    const productPage = new ProductPage(this.driver);
    await productPage.openPage(pageUrl);
    await productPage.confirmAge();
    await productPage.choseQuantity("0");
    assert.isFalse(productPage.getQuantity() == '0');

    // await catalogPage.selectFilter(startPriceValue);

    // const arePricesValid = await catalogPage.checkPrices();
    // expect(arePricesValid).to.be.true;
  }).timeout(40000);

  after(async function () {
    await this.driver.quit();
  })
});
