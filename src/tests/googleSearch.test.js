import { By, until } from 'selenium-webdriver';
import Assertions from '../assertions/assertions.js';

const googleSearchTest = async (driver) => {
  await driver.get('https://www.google.com');

  const searchInput = await driver.wait(until.elementLocated(By.name('q')), 3000);
  await searchInput.sendKeys('Selenium WebDriver');
  await searchInput.submit();
  const results = await driver.wait(until.elementLocated(By.id('search')), 3000);
  await Assertions.isVisible(driver, By.id('search'));
};

export default googleSearchTest;
