import  { scraperObject } from '../../utils/pageScraper.js';

export const scrapeAll = async (browserInstance) => {
    let browser;
    
    try {
        browser = await browserInstance;
        await scraperObject.scraper(browser);

    } catch (error) {
       console.log("Could not resolve the browser instance"); 
    }
}