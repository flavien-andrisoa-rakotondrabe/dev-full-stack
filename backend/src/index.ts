import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import usersRouter from './routes/users';

dotenv.config();

const app = express();
app.use(express.json());

// Routes
app.use('/users', usersRouter);

const port = process.env.PORT || 5000;

app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);
