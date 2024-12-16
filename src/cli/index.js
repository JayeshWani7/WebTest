import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import TestRunner from '../core/testRunner.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

(async () => {
  const browser = process.argv[2] || 'chrome';
  const runner = new TestRunner(browser);
  const testFiles = fs
    .readdirSync(path.resolve(__dirname, '../tests'))
    .filter(file => file.endsWith('.test.js'));

  for (const testFile of testFiles) {
    const testFileUrl = pathToFileURL(path.resolve(__dirname, '../tests', testFile));
    const test = await import(testFileUrl.href); 
    const testName = path.basename(testFile, '.test.js');
    console.log(`Running: ${testName}`);
    await runner.executeTest(testName, test.default); 
  }

  runner.generateReport();
})();
