import express from 'express';

import methods from './methods';
import validation from './validation';

const router = express.Router();

router.get('/', validation.getList, methods.getList);
router.get('/:userId', validation.get, methods.get);

export default router;
