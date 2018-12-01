import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const OrderSchema = new Schema({
  orderDetails: {
    type: [Schema.Types.ObjectId],
    ref: 'orderDetail',
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  timestamp: {
    type: Number
  },
  price: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    required: true,
    default: 'New'
  }
});


const Order = mongoose.model('Order', OrderSchema);

export default Order;
