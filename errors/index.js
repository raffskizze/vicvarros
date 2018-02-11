import debugError from './debugError';
import handleError from './handleError';
import notFoundError from './notFoundError';

const handleErrors = (app) => {
  /**
   * Not found
   */
  app.use(notFoundError);

  /**
   * Debug error
   */
  app.use(debugError);

  /**
   * Error handler
   */
  app.use(handleError);
};

export default handleErrors;
