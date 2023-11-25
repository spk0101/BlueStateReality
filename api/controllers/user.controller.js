//so what we do is that the main is app.js in which when we use app.use the section will act as an middlware for handling the request then the loginc for the request will be handled by the controller, complex but makes the code neat and easy to read
import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';

export const wow = (req, res) => {
      res.send("Hello Wworld");
}

export const updateUserInfo = async (req, res, next) => {
      if(req.user.id !== req.params.id) return next(errorHandler(401, 'You shold only update your account')) 
      try{
            if(req.body.password){
                  req.body.password =  bcryptjs.hashSync(req.body.password,10);
            }
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {
                  $set: { 
                        username: req.body.username,
                        email: req.body.email,
                        password: req.body.password,
                        avatar: req.body.avatar    

                  } }, {new: true});

                  const {password, ...rest} = updatedUser._doc
                  res.status(200).json(rest);
      }
      catch(error) {
            next(error);
      }
}