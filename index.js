const assert = require('chai').assert;
const {Builder, By, until} = require('selenium-webdriver');


describe('Test', () => {
    it('Should have military planes with bomber type', () => {
        let driver = new Builder()
            .forBrowser('chrome')
            .build();

        driver.get('http://www.google.com/ncr');
        driver.findElement(By.name('q')).sendKeys('webdriver');
        driver.findElement(By.name('btnK')).click();
        driver.wait(until.titleIs('webdriver - Google Search'), 1000);
        driver.quit();
    });
});