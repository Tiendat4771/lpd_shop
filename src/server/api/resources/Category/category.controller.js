import Category from './category.model';

export const getAll = (req, res) => {
  Category.find({}, (err, category) => {
    if (err) return console.error(err);
    return res.status(200).json(category);
  });
};

export const createOne = (req, res) => {
  const newCategory = req.body;
  const category = new Category(newCategory);
  category
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
};
