import express, {Request, Response} from 'express';

const router = express.Router()

router.get('/api/test', (req: Request, res: Response) => {
    return res.send('got request')
})

export {router as dbRouter};