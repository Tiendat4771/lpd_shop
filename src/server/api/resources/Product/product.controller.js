import Product from './product.model';

export const getAll = (req, res) => {
  res.json({ getAll: true });
};

export const getOne = (req, res) => {
  const productId = req.params.id;
  Product.findById(productId, (err, product) => {
    if (err) return console.log(err);
    return res.status(200).json(product);
  });
};

export const createOne = (req, res) => {
  const newProduct = req.body;
  const product = new Product(newProduct);
  product
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
};
