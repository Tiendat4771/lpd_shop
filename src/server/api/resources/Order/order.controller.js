import Order from './order.model';

export const getAll = (req, res) => {
  Order.find({}, (err, orders) => {
    if (err) return console.error(err);
    return res.status(200).json(orders);
  });
};

export const createOne = (req, res) => {
  const order = new Order(req.body);
  order
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
};
