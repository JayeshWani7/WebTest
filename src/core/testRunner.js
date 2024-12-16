import DriverManager from './driverManager.js';
import HtmlReporter from '../reporters/htmlReporter.js';

class TestRunner {
  constructor(browser) {
    this.driverManager = new DriverManager(browser);
    this.results = [];
  }

  async executeTest(testName, testFunction) {
    await this.driverManager.startDriver();
    const driver = this.driverManager.getDriver();

    try {
      await testFunction(driver);
      this.results.push({ testName, status: 'Passed' });
    } catch (error) {
      this.results.push({ testName, status: 'Failed', error: error.message });
      console.error(`Test "${testName}" failed: ${error.message}`);
    } finally {
      await this.driverManager.closeDriver();
    }
  }

  generateReport() {
    HtmlReporter.generateReport(this.results);
  }
}

export default TestRunner;
