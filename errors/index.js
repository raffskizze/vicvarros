const errorTypes = {
  validationError: (errors) => {
    const error = new Error();
    error.status = 400;
    error.message = 'Validation error';
    error.description = 'Validation error for the current request';
    error.information = errors;

    return error;
  },
  notFoundError: () => {
    const error = new Error();
    error.status = 404;
    error.message = 'Page not found';
    error.description = 'Page was not found in our server';

    return error;
  },
  unauthorizedError: () => {
    const error = new Error();
    error.status = 401;
    error.message = 'Unauthorized';

    return error;
  },
  versionError: () => {
    const error = new Error();
    error.status = 404;
    error.message = 'Version not found';
    error.description = 'Accept-Version contains a not valid version of the application';

    return error;
  },
  deprecatedVersionError: () => {
    const error = new Error();
    error.status = 404;
    error.message = 'Deprecated version';
    error.description = 'Accept-Version contains a deprecated version of the application, please update it';

    return error;
  },
};

export default errorTypes;
