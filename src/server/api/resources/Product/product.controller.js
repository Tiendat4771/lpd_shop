// import mongoose from 'mongoose';
import Product from './product.model';
import Category from '../Category/category.model';

export const getAll = (req, res) => {
  Product.find({
    active: true
  })
    .populate('category')
    .exec((err, product) => {
      if (err) console.log(err);
      res.status(200).json(product);
    });
};

export const getOne = (req, res) => {
  const productId = req.params.id;
  Product.findById(productId)
    .populate('category')
    .exec((err, product) => {
      if (err) console.log(err);
      res.status(200).json(product);
    });
};


export const createOne = (req, res) => {
  const newProduct = req.body;
  const query = {
    title: newProduct.Category,
    active: true
  };
  Category.findOne(query, (err, category) => {
    if (err || category == null) {
      res.status(400).json('Category not found');
    } else {
      newProduct.category = category;
      const product = new Product(newProduct);
      product
        .save()
        .then((data) => {
          res.json(data);
        })
        .catch((SaveErr) => {
          console.log(SaveErr);
          res.status(500).json('ERRRO. Please try again!');
        });
    }
  });
  // export const createOne = (req, res) => {
  //   const category = new Category({
  //     _id: new mongoose.Types.ObjectId(),
  //     title: req.body.category
  //   });
  //   category.save().then((categoryDB) => {
  //     const newProduct = req.body;
  //     newProduct.image = req.file.url;
  //     newProduct.category = categoryDB._id;
  //     const product = new Product(newProduct);
  //     product
  //       .save()
  //       .then((data) => {
  //         res.json(data);
  //       })
  //       .catch((err) => {
  //         Error(err);
  //       });
  //   });

  // newProduct.category = categoryDB._id;
  // const product = new Product(newProduct);
  // product
  //   .save()
  //   .then((data) => {
  //     res.json(data);
  //   })
  //   .catch((err) => {
  //     Error(err);
  //   });
};