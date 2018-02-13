import routesVersioning from 'express-routes-versioning';

import { versionError } from './../../errors/types';

import getListV1 from './v1/getList';
import getV1 from './v1/get';

const versions = routesVersioning();

const methods = {
  getList: {
    '^1.0.0': getListV1,
  },
  get: {
    '^1.0.0': getV1,
  },
};

const versionCallback = (req, res, next) => {
  next(versionError());
};

const getList = versions(methods.getList, versionCallback);
const get = versions(methods.get, versionCallback);

export { getList, get };
