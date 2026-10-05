import express, { type Express, type Request, type Response } from 'express';
import cors from 'cors';
import postsData from '../database/Posts.json' with { type: 'json' };

const app: Express = express();

app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.get('/api/posts', async (req: Request, res: Response) => {
  res.json(postsData);
});

app.listen(3000);
