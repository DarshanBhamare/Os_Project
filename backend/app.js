import express from 'express';
import cors from 'cors';
import simulateRoute from './routes/simulateRoute.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/simulate', simulateRoute);

export default app;