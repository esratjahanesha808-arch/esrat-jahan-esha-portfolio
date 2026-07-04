import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

async function takeScreenshot() {
  const url = process.argv[2] || 'http://localhost:3000';
  const label = process.argv[3] || '';

  console.log(`Navigating to ${url}...`);

  const dir = './temporary screenshots';
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  // Get index N for screenshot
  let n = 1;
  while (fs.existsSync(path.join(dir, `screenshot-${n}${label ? '-' + label : ''}.png`))) {
    n++;
  }

  const filename = path.join(dir, `screenshot-${n}${label ? '-' + label : ''}.png`);

  try {
    const browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900 });
    
    await page.goto(url, { waitUntil: 'networkidle2' });
    
    // Allow animation transitions to complete
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    await page.screenshot({ path: filename, fullPage: true });
    console.log(`Screenshot saved to ${filename}`);
    
    await browser.close();
  } catch (error) {
    console.error('Error taking screenshot:', error);
  }
}

takeScreenshot();
