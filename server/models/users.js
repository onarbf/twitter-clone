import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  password:{
    type: String,
    required: true
  },
  fullname: String,
  desc: String,
  bio: String,
  email: {
    type: String,
    required: true
  },
  thumbnail: String,
  createdAt: {
    type: String,
    default: new Date
  }
});

const userModel = mongoose.model('User',userSchema);

export default userModel;
