import mongoose from "mongoose";

const Schema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
    match: /^(?=.*[A-Z])(?=.*[\W_])(?=.{8,})/,
  },
  //one will be time of creation of the user and the other will be updation for the user
}, {timestap: true} );

//when we create model with a singular name , it adds an prural name to the collection when we add many things onto it. 

const User = mongoose.model('User', Schema);

export default User;