import { Builder } from 'selenium-webdriver';

class DriverManager {
  constructor(browser = 'chrome') {
    this.browser = browser;
    this.driver = null;
  }

  async startDriver() {
    this.driver = await new Builder().forBrowser(this.browser).build();
  }

  getDriver() {
    return this.driver;
  }

  async closeDriver() {
    if (this.driver) {
      await this.driver.quit();
    }
  }
}

export default DriverManager;
