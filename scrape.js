// Scrapper:
import { startBrowser } from './src/utils/browser.js';
import { scrapeAll } from './src/api/controllers/pageController.js';

let browserInstance = startBrowser();
scrapeAll(browserInstance);