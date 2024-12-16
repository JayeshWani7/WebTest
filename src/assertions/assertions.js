import * as chai from 'chai';

class Assertions {
  static async isVisible(driver, selector) {
    const { expect } = chai;
    const element = await driver.findElement(selector);
    const isDisplayed = await element.isDisplayed();
    expect(isDisplayed).to.be.true;
  }

  static async hasText(driver, selector, expectedText) {
    const { expect } = chai;
    const element = await driver.findElement(selector);
    const actualText = await element.getText();
    expect(actualText).to.equal(expectedText);
  }
}

export default Assertions;
