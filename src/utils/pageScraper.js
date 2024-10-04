import fs from "fs";
import { seed } from '../seeds/product.seed.js';

const MEDIA_MARKET_URL =
  "https://www.mediamarkt.es/es/category/port%C3%A1tiles-con-windows-1551.html?filter=ProcessorType:14th%20Generaci%C3%B3n%20OR%208th%20Generaci%C3%B3n&page=1";

export const scraperObject = {
  url: MEDIA_MARKET_URL,
  async scraper(browser) {
    let page = await browser.newPage();

    await page.setCacheEnabled(false);

    await page.goto(this.url, { waitUntil: "networkidle2" });

    await page.waitForSelector('[data-test="pwa-consent-layer-deny-all"]');
    await page.$eval('[data-test="pwa-consent-layer-deny-all"]', (el) =>
      el.click()
    );

    const products = await getData(page);

    await browser.close();
    
    writeToFile(products);

    seed(products);

    console.log("Browser closed");
  },
};

const getData = async (page) => {
  let products = [];
  let hasMore = true;
  let totalCardsLoaded = 0;

  while (hasMore) {

    await page.waitForSelector(
      '[data-test="mms-search-srp-productlist"] .sc-8c2c0aa-0'
    );

    await page.evaluate(() => {
      const productCards = document.querySelectorAll(
        '[data-test="mms-search-srp-productlist"] .sc-8c2c0aa-0'
      );
      productCards.forEach((productCard) => {
        productCard.scrollIntoView();
      });
    });

    let cardLength = await page.$$eval(
      '[data-test="mms-search-srp-productlist"] .sc-8c2c0aa-0',
      (nodes) => nodes.length
    );

    await page.waitForSelector('[data-test="product-title"]');
    const names = await page.$$eval('[data-test="product-title"]', (nodes) =>
      nodes.map((node) => node.innerText)
    );

    await page.waitForSelector(
      "div.sc-f524209-0.eDhLj > span.sc-e0c7d9f7-0.bPkjPs"
    );

    const prices = await page.$$eval(
      "div.sc-f524209-0.eDhLj > span.sc-e0c7d9f7-0.bPkjPs",
      (nodes) => nodes.map((node) => node.innerText)
    );

    await page.waitForSelector('[data-test="product-image"] > img');
    const imgs = await page.$$eval(
      '[data-test="product-image"] > img',
      (nodes) => nodes.map((node) => node.src)
    );

    
    for (let i = 0; i < names.length; i++) {
      const priceNumber = parseFloat(prices[i].replace(/[^\d.-]+/g, ""));
      products.push({
        name: names[i],
        price: priceNumber,
        img: imgs[i],
      });
    }

    const loadMoreButton = await page.$(
      '[data-test="mms-search-srp-loadmore"]'
    );
    if (loadMoreButton) {

      await page.evaluate(() => {
        const loadMoreButton = document.querySelector(
          '[data-test="mms-search-srp-loadmore"]'
        );
        if (loadMoreButton) {
          loadMoreButton.scrollIntoView();
        }
      });

      await page.$eval('[data-test="mms-search-srp-loadmore"]', (el) =>
        el.click()
      );

      await page.waitForFunction(
        (totalCardsLoaded) => {
          return (
            document.querySelectorAll(
              '[data-test="mms-search-srp-productlist"] .sc-8c2c0aa-0'
            ).length > totalCardsLoaded
          );
        },
        { timeout: 60000 },
        totalCardsLoaded
      );

      totalCardsLoaded = await page.$$eval(
        '[data-test="mms-search-srp-productlist"] .sc-8c2c0aa-0',
        (nodes) => nodes.length
      );
      console.log(`New total number of product cards: ${totalCardsLoaded}`);
    } else {
      console.log("No more products to load.");
      hasMore = false;
      break;
    }
  
  }

  const uniqueProducts = Array.from(
    new Map(products.map((item) => [item.name, item])).values()
  );

  return uniqueProducts;
};
const writeToFile = (products) => {
  console.log(products.length);
  fs.writeFile("products.json", JSON.stringify(products, null, 2), (err) => {
    if (err) {
      console.error("Error writing to file", err);
    } else {
      console.log("Scraped products saved to products.json");
    }
  });

};
