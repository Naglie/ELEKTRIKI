import express from 'express';
import db from './config/database.js';
import cors from 'cors';
import adminRoute from './routes/adminRoute.js';
import applicationRoute from './routes/applicationRoute.js';

import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

dotenv.config();

const app = express();

try {
   await db.authenticate();
   console.log('Connection has been established successfully.');
} catch (error) {
   console.error('Unable to connect to the database:', error);
}

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(cookieParser());
app.use(express.json());

app.use('/admin', adminRoute);
app.use('/application', applicationRoute);

app.listen(5000, () => console.log('Server running on port 5000'));
