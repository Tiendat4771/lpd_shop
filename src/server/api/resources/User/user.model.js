import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const UserSchema = new Schema({
  phone: {
    type: String,
    required: true
  }
});

const user = mongoose.model('User', UserSchema);

export default user;
