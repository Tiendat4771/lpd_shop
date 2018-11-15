import express from 'express';
import productRouter from './resources/Product/product.restRouter';

const restRouter = express.Router();

restRouter.use('/products', productRouter);

export default restRouter;
