import fs from 'fs';
import path from 'path';

class HtmlReporter {
  static generateReport(results, outputPath = 'reports/test-report.html') {
    const reportDirectory = path.dirname(outputPath);

    // Check if the directory exists, if not, create it
    if (!fs.existsSync(reportDirectory)) {
      fs.mkdirSync(reportDirectory, { recursive: true });
    }

    const htmlContent = `
      <html>
      <head><title>Test Report</title></head>
      <body>
        <h1>Test Report</h1>
        <ul>
          ${results.map(result => `<li>${result.testName}: ${result.status}</li>`).join('')}
        </ul>
      </body>
      </html>
    `;

    fs.writeFileSync(outputPath, htmlContent, 'utf-8');
  }
}

export default HtmlReporter;
