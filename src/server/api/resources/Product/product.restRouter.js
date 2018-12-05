import express from 'express';
import { getAll, createOne, getOne } from './product.controller';
import ParserCloundinary from '../../../parserCloundinary';

const productRouter = express.Router();
// using middelware parser cloundinary
productRouter.use(ParserCloundinary.single('image'));

productRouter.route('/').get(getAll);
productRouter.post('/', createOne);
productRouter.route('/:id').get(getOne);

export default productRouter;
