import express, { type Express, type Request, type Response } from 'express';

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.get('/api/posts', (req: Request, res: Response) => {
  res.send('List of posts');
});

app.listen(3000);
