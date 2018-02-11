import { header, param } from 'express-validator/check';

import versions from './../../helpers/versions';

const userValidator = {
  get: [
    header('Accept-Version').exists().isIn(versions),
    param('userId').exists().isEmail(),
  ],
  getList: [
    header('Accept-Version').exists().isIn(versions),
  ],
};

export default userValidator;
