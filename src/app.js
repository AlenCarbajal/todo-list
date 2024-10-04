import { configDotenv } from 'dotenv';
import { syncDatabase } from './models/index';

import userRouter from './routes/user.route';
import todoRouter from './routes/todo.route';

import express from 'express';

// Config dotenv
configDotenv();

// Sync database
await syncDatabase();

// Create app
const app = express();

app.use(express.json());

// Routes
app.use('/', userRouter);
app.use('/todos', todoRouter);

// Init server
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
});