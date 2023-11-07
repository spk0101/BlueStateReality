import bcrypt from 'bcrypt';
import User from '../models/user.model.js';

export const signup = async (req, res) => {
  const { username, email, password } = req.body;
    //we will use bcrypt to hash the password
    const hashPassword =  bcrypt.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashPassword });
    try {
        await newUser.save();
        res.status(201).json(newUser);
      }
    catch (error) {
        res.status(409).json({ message: error.message });
    }
};