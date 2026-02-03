import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';
import candidateRouter from './routes/candidateRouter.js';
import recruiterRouter from './routes/recruiterRouter.js';
import adminRouter from './routes/adminRouter.js';
import vacancyRouter from './routes/vacancyRouter.js';
import appliedVacancyRouter from './routes/appliedVacancyRouter.js';
import { connectDB } from './model/connection.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
dotenv.config();
connectDB();

// CORS configuration - allow Netlify domain
app.use(cors({
  origin: process.env.FRONTEND_URL || '*',
  credentials: true
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files from uploads directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use("/admin", adminRouter);
app.use("/candidate", candidateRouter);
app.use('/recruiter', recruiterRouter)
app.use("/vacancy", vacancyRouter);
app.use("/appliedvacancy", appliedVacancyRouter);



app.listen(process.env.PORT, () => console.log('Server Connection Successfull ..!'));