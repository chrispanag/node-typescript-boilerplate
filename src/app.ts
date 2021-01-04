import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import helloWorld from './controllers/hello-world';

function loggingMiddleware(req: Request, res: Response, next: NextFunction) {
    console.log(`${req.method}: ${req.originalUrl}`);
    next();
}

const app = express();

app.use(loggingMiddleware);
app.use(cors());
app.use(bodyParser.json());

app.use(helloWorld);

export default app;
