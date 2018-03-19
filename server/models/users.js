import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password:{
    type: String,
    required: true
  },
  createdAt: {
    type: String,
    default: new Date
  }
});

const userModel = mongoose.model('User',userSchema);

export default userModel;
