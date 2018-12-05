import Product from './product.model';

export const getAll = (req, res) => {
  res.json({ getAll: true });
};

export const getOne = (req, res) => {
  const productId = req.params.id;
  Product.findById(productId, (err, product) => {
    if (err) return console.error(err);
    return res.status(200).json(product);
  });
};

export const createOne = (req, res) => {
  const newProduct = {};
  newProduct.name = req.body.name;
  newProduct.price = req.body.price;
  newProduct.category = req.body.category;
  newProduct.subCategoty = req.body.subCategoty;
  newProduct.description = req.body.description;
  newProduct.active = req.body.active;
  newProduct.image = req.file.url;
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
