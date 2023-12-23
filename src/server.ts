import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

app.use(express.json());

app.get('/', async (req: Request, res: Response) => {
  res.send('Hello World!');
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});