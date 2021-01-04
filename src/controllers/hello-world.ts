import { Request, Response, Router } from 'express';

const router = Router();

function helloWorld(req: Request, res: Response) {
    res.json({
        data: 'Hello world'
    });
}

// Routes
router.get('/hello', helloWorld);

export default router;
