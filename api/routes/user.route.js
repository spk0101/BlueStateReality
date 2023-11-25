import express, { Router } from 'express';
import { updateUserInfo, wow } from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const userRouter = express.Router();

userRouter.get("/wow",wow);
userRouter.post('/update/:id', verifyToken, updateUserInfo); 

export default userRouter;