import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import userRouter from './app/modules/users/user.route';
const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', function (req: Request, res: Response) {
  res.send('Hello World');
});

app.use('/api/v1/users', userRouter);

export default app;
