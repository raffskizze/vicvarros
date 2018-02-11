const handleError = (err, req, res, next) => {
  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Render the error json
  res.status(err.status || 500);
  res.json({
    error: {
      code: err.status,
      message: err.message,
      description: err.description,
      fileName: err.fileName,
      lineNumber: err.lineNumber,
    },
  });
  next();
};

export default handleError;
