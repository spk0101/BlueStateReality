import express from 'express';
import { wow } from '../controllers/user.controller.js';

const userRouter = express.Router();

userRouter.get("/wow",wow);

export default userRouter;