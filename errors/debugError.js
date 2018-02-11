import debug from 'debug';

const debugError = (err, req, res, next) => {
  debug('vicvarros:error')(err.message);
  next(err);
};

export default debugError;
