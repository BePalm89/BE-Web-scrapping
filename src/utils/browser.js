import puppeteer from 'puppeteer';

export const startBrowser = async () => {
    let browser;
    try {
        browser = await puppeteer.launch({
            headless: false,
            args: ["--disable-setuid-sandbox"],
            'ignoreHTTPSErrors': true
        });
        
    } catch (error) {
        console.log("Could not create a browser instance => :", err);
    }
    return browser;
}
