const validationError = (errors) => {
  const error = new Error();
  error.status = 400;
  error.message = 'Validation error';
  error.description = 'Validation error on request GET users';
  error.information = errors;

  return error;
};

const notFoundError = () => {
  const error = new Error();
  error.status = 404;
  error.message = 'Page not found';
  error.description = 'Page was not found in our server';

  return error;
};


const unauthorizedError = () => {
  const error = new Error();
  error.status = 401;
  error.message = 'Unauthorized';

  return error;
};

const versionError = () => {
  const error = new Error();
  error.status = 404;
  error.message = 'Version not found';
  error.description = 'Accept-Version contains a not valid version of the application';

  return error;
};

const deprecatedVersionError = () => {
  const error = new Error();
  error.status = 404;
  error.message = 'Deprecated version';
  error.description = 'Accept-Version contains a deprecated version of the application, please update it';

  return error;
};

export { validationError, notFoundError, unauthorizedError, versionError, deprecatedVersionError };
