import express from 'express';
import productRouter from './resources/Product/product.restRouter';
import caregoryRouter from './resources/Category/category.restRouter';
import orderRouter from './resources/Order/order.restRouter';

const restRouter = express.Router();

restRouter.use('/products', productRouter);
restRouter.use('/category', caregoryRouter);
restRouter.use('/order', orderRouter);

export default restRouter;
