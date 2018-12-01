import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const orderDetailSchema = new Schema({
  product: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  quantity: {
    type: Number,
    require: true
  },
  currentPrice: {
    type: Number
  },
  total: {
    type: Number
  }
});

const orderDetail = mongoose.model('orderDetail', orderDetailSchema);
export default orderDetail;
