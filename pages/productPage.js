const BasePage = require("./basePage");
const { Key } = require("selenium-webdriver");

class ProductPage extends BasePage {
  constructor(driver) {
    super(driver);
  }
  
  async choseQuantity(quantity) {
    const element = await this.findByXpath("//input[@id='qty-field']");
    await element.sendKeys(quantity, Key.ENTER);

    return this;
  }

  async getQuantity() {
    const element = await this.findByXpath("//input[@id='qty-field']");
    return element.getAttribute("value");
  }
}

module.exports = ProductPage;
