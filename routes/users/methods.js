import routesVersioning from 'express-routes-versioning';

import errors from './../../errors';

import getListV1 from './v1/getList';
import getV1 from './v1/get';

const versions = routesVersioning();

const versioning = {
  getList: {
    '^1.0.0': getListV1,
  },
  get: {
    '^1.0.0': getV1,
  },
};

const versionCallback = (req, res, next) => {
  next(errors.versionError());
};

const methods = {
  getList: versions(versioning.getList, versionCallback),
  get: versions(versioning.get, versionCallback),
};

export default methods;
