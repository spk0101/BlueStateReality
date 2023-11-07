import bcrypt from 'bcrypt';
import User from '../models/user.model.js';

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
    //we will use bcrypt to hash the password
    const hashPassword =  bcrypt.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashPassword });
    try {
        await newUser.save();
        res.status(201).json(newUser);
      }
    catch (error) {
        next(error);
    }
};