import express, { NextFunction, Response, Request } from 'express'

const api = express();
api.get('/test', (req: Request, res: Response, next: NextFunction) => {
  res.json({ sucess: 'ok' })
})
api.listen(5000, () => console.log('listening on port 5000'));