import express from 'express';
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';

dotenv.config();

const app = express();
app.use(express.json());
mongoose.connect(process.env.MONGO_URL).then(() => console.log('MongoDB connected')).catch(err => console.log(err));
// app.get('/wow', (req, res) => {res.send('Hello World');}); this is an test api

app.use('/api/users', userRouter);
app.use('/api/auth', authRouter);




app.listen(3000, () => {console.log('Server is running on port 3000');});