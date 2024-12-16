import { By, until } from 'selenium-webdriver';
import Assertions from '../assertions/assertions.js';

const githubLoginTest = async (driver) => {
  await driver.get('https://github.com/login');

  const usernameField = await driver.wait(until.elementLocated(By.id('login_field')), 5000);
  await usernameField.sendKeys('testuser');

  const passwordField = await driver.findElement(By.id('password'));
  await passwordField.sendKeys('password123');

  const signInButton = await driver.findElement(By.name('commit'));
  await signInButton.click();

  await Assertions.isVisible(driver, By.className('flash-error'));
};

export default githubLoginTest;
