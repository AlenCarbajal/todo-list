import { configDotenv } from 'dotenv';
import userRouter from './routes/user.route';
configDotenv();

import express from 'express';

const app = express();

app.use(express.json());

// Routes
app.use('/', userRouter);


// Init server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});