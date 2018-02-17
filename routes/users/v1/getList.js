import { validationResult } from 'express-validator/check';

import errors from './../../../errors';

// Get list method
const getList = (req, res, next) => {
  const reqErrors = validationResult(req);
  if (reqErrors.isEmpty()) {
    return res.json({ response: 'Get shop list v1' });
  }

  return next(errors.validationError(reqErrors.mapped()));
};

export default getList;
