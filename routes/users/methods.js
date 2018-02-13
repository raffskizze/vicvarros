import routesVersioning from 'express-routes-versioning';

import errors from './../../errors';

import getListV1 from './v1/getList';
import getV1 from './v1/get';

const versions = routesVersioning();

// Versions of the resource
const versioning = {
  getList: {
    '^1.0.0': getListV1,
  },
  get: {
    '^1.0.0': getV1,
  },
};

// Version callback function
const versionCallback = (req, res, next) => {
  next(errors.versionError());
};

// Available methods for the resource
const methods = {
  getList: versions(versioning.getList, versionCallback),
  get: versions(versioning.get, versionCallback),
};

export default methods;
