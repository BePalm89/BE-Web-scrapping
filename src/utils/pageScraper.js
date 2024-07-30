import fs from 'fs';

const MEDIA_MARKET_URL =
  "https://www.mediamarkt.es/es/category/port%C3%A1tiles-con-windows-1551.html?page=1";

export const scraperObject = {
  url: MEDIA_MARKET_URL,
  async scraper(browser) {
    
    let page = await browser.newPage();
    
    await page.goto(this.url);

    // Wait for the page to be loaded
    await page.waitForSelector('[data-test="pwa-consent-layer-deny-all"]');

    // Close the cookies modal
     await page.$eval('[data-test="pwa-consent-layer-deny-all"]', (el) => {
      el.click();
    }); 

    await getData(page);

    await browser.close();


  },
};

const getData = async (page) => {

  let products = [];
  let hasMore = true;

  while(hasMore) {
    
    await page.waitForSelector('[data-test="mms-product-card"]');

    const name = await page.$$eval('[data-test="product-title"]', (nodes) =>
      nodes.map((node) => node.innerText)
    );
  
    const price = await page.$$eval(
      "div.sc-f524209-0.eDhLj > span.sc-e0c7d9f7-0.bPkjPs",
      (nodes) => nodes.map((node) => node.innerText)
    );
  
    const img = await page.$$eval('[data-test="product-image"] > img', (nodes) =>
      nodes.map((node) => node.src)
    );

    const newProducts = name.map((_, index) => {
      return {
        name: name[index],
        price: price[index],
        img: img[index],
      };
    });

    products = products.concat(newProducts);

    try {

      await page.waitForSelector('[data-test="mms-search-srp-loadmore"]', {timeout: 5000});

      await page.$eval('[data-test="mms-search-srp-loadmore"]', (el) => {
        el.click();
      });
  
      await page.waitForSelector('[data-test="mms-product-card"]');
    } catch (error) {
      hasMore = false;

    } 
  }

  fs.writeFile("product.json", JSON.stringify(products), err => {
    if(err) {
      console.error(err);
    } else {
      console.log("file created");
    }
  }); 
};
