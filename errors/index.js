import debug from 'debug';

import notFoundError from './types';

const handleErrors = (app) => {
  /**
   * Not found
   */
  app.use((req, res, next) => {
    next(notFoundError());
  });

  /**
   * Debug error
   */
  app.use((err, req, res, next) => {
    debug('vicvarros:error')(err.message);
    next(err);
  });

  /**
   * Error handler
   */
  app.use((err, req, res, next) => {
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
        information: err.information,
      },
    });
    next();
  });
};

export default handleErrors;
