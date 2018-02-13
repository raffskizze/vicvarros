import { validationResult } from 'express-validator/check';
import { matchedData } from 'express-validator/filter';

import { validationError } from './../../../errors/types';

const get = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    const { userId } = matchedData(req);
    return res.json({ response: `Get v1 ${userId}` });
  }

  return next(validationError(errors.mapped()));
};

export default get;
