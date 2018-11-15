import express from 'express';
import { getAll, createOne, getOne } from './product.controller';

const productRouter = express.Router();

productRouter
  .route('/')
  .get(getAll)
  .post(createOne);

productRouter.route('/:id').get(getOne);

export default productRouter;
