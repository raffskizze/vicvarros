import { validationResult } from 'express-validator/check';
import { matchedData } from 'express-validator/filter';

const get = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    const { userId } = matchedData(req);
    res.json({ response: `Get v1 ${userId}` });
  }

  next(new Error('TEST'));
};

export default get;
