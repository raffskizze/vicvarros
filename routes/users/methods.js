import routesVersioning from 'express-routes-versioning';

import versionError from './../../errors/versionError';

import getListV1 from './v1/getList';
import getV1 from './v1/get';

const versions = routesVersioning();

const getListObject = {
  '^1.0.0': getListV1,
};

const getObject = {
  '^1.0.0': getV1,
};

const getList = versions(getListObject, versionError);
const get = versions(getObject, versionError);

export { getList, get };
