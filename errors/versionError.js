const versionError = (req, res, next) => {
  const err = new Error('Version not found');
  err.status = 404;
  next(err);
};

export default versionError;
