/* eslint-disable no-console */
const puppeteer = require('puppeteer');
const sources = require('./sources');
const fs = require('fs');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--single-process']
  });
  try {
    const target = [];
    console.info('Starting browser...');

    console.info('Opening new page...');
    const page = await browser.newPage();

    for (const source of sources) {
      console.info(`Go to ${source}`);
      await page.goto(source);

      const title = await page.title();

      const description = await page
        .$eval('head > meta[name="description"]', element => element.content)
        .catch(() => '');

      const ogDescription = await page
        .$eval(
          'head > meta[property="og:description"]',
          element => element.content
        )
        .catch(() => '');

      target.push({
        title,
        description: description || ogDescription || '',
        source
      });
    }

    console.log(target);
    fs.writeFileSync(
      path.resolve(__dirname, 'data.json'),
      JSON.stringify(target, null, 2)
    );
  } catch (error) {
    console.error(error);
  } finally {
    await browser.close();
    console.info('Done!');
  }
})();
