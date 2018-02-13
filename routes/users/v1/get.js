import { validationResult } from 'express-validator/check';
import { matchedData } from 'express-validator/filter';

import errors from './../../../errors';

// Get method
const get = (req, res, next) => {
  const reqErrors = validationResult(req);
  if (reqErrors.isEmpty()) {
    const { userId } = matchedData(req);
    return res.json({ response: `Get v1 ${userId}` });
  }

  return next(errors.validationError(reqErrors.mapped()));
};

export default get;
