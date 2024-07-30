import { startBrowser } from "./src/utils/browser.js";
import { scrapeAll } from './src/api/controllers/pageController.js';
import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from "./src/config/db.js";
import router from './src/api/routes/product.routes.js';

dotenv.config();

const PORT = 3000;
const server = express();

connectDB();

server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.use('/api/v1/products', router);

server.use('*', (req, res, next) => {
	const error = new Error('Route not found'); 
	error.status = 404;
	next(error); 
});

server.use((error, req, res, next) => {
	return res.status(error.status || 500).json(error.message || 'Unexpected error');
}); 

server.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
});

// Scrapper:
let browserInstance = startBrowser();
scrapeAll(browserInstance);






