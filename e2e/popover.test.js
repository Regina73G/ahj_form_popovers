import puppeteer from 'puppeteer';

describe('Viev popover', () => {
  let browser;
  let page;

  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: process.env.CI === 'true' ? true : false, // для запуска на гите
      slowMo: process.env.CI === 'true' ? 0 : 100,       
      devtools: process.env.CI === 'true' ? false : true,
      args: process.env.CI === 'true'
        ? ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
        : []
    });

    page = await browser.newPage();
  });

  test('popover appears and disappears', async () => {
    await page.goto('http://localhost:8080');

    await page.waitForSelector('.btn');

    const button = await page.$('.btn');
    await button.click();

    await page.waitForSelector('body .popover');

    const popoverText = await page.$eval('.popover-content', el => el.textContent);
    expect(popoverText).toBe('And here’s some amazing content.');

    await button.click();

    const popoverAfter = await page.$('.popover');
    expect(popoverAfter).toBeNull();
  });

  afterEach(async () => {
    await browser.close();
  });
});