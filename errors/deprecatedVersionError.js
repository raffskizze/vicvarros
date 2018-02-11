const deprecatedVersionError = (req, res, next) => {
  const err = new Error('Deprecated version');
  err.status = 404;
  next(err);
};

export default deprecatedVersionError;
