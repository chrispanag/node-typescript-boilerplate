import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import helloWorld from './controllers/hello-world';

/**
 * This is a middleware example, and helps with debugging by outputing data for each request on the console.
 */
function loggingMiddleware(req: Request, res: Response, next: NextFunction) {
    console.log(`${req.method}: ${req.originalUrl}`);
    next();
}

const app = express();

// Middlewares
app.use(loggingMiddleware);
app.use(cors());
app.use(bodyParser.json());

// Controllers
app.use(helloWorld);

export default app;
