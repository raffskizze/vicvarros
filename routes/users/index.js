import express from 'express';

import { getList, get } from './methods';
import userValidator from './validator';

const router = express.Router();

router.get('/', getList);
router.get('/:userId', [userValidator.get], get);


export default router;
