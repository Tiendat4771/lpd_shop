import express from 'express';
import { getAll, createOne } from './order.controller';

const orderRouter = express.Router();

orderRouter
  .route('/')
  .get(getAll)
  .post(createOne);

export default orderRouter;
