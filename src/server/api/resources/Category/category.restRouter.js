import express from 'express';
import { getAll, createOne } from './category.controller';

const categoryRouter = express.Router();

categoryRouter
  .route('/')
  .get(getAll)
  .post(createOne);

export default categoryRouter;
