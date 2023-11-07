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
//middleware used to handle multiple errors instread of making a lot of try cartch blocks
app.use((err,req,res,next) =>{
    //next is used to pass  to the next middleware
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(statusCode).json({
        success: false,
        statusCode,
        //after ES6 we can just write message instead of StatusCode: StatusCode if the variable name and the key name is same
        message: message,
    });
})




app.listen(3000, () => {console.log('Server is running on port 3000');});