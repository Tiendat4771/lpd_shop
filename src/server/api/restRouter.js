import express from 'express';
import productRouter from './resources/Product/product.restRouter';
import caregoryRouter from './resources/Category/category.restRouter';

const restRouter = express.Router();

restRouter.use('/products', productRouter);
restRouter.use('/category', caregoryRouter);

export default restRouter;
