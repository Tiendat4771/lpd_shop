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
    type: [String]
  },
  image: {
    type: String
  },
  description: {
    type: String
  },
  active: {
    type: Boolean,
    default: true
  }
});

const Product = mongoose.model('Product', ProductSchema);

export default Product;
