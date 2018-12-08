const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ProductSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  // category: {
  //   type: [Schema.Types.ObjectId],
  //   ref: 'Category',
  //   required: true
  // },
  category: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Category'
    }
  ],
  subCategoty: {
    type: [String],
    required: true
  },
  image: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  active: {
    type: Boolean,
    required: true,
    default: true
  }
});

const Product = mongoose.model('Product', ProductSchema);

export default Product;
