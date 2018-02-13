import { header, param } from 'express-validator/check';

import availableVersions from './../../helpers/availableVersions';

// Validation for the methods
const validation = {
  get: [
    header('Accept-Version', 'Accept-Version is mandatory').exists(),
    header('Accept-Version', 'Accept-Version should be in the next format: 0.0.0').isIn(availableVersions),
    param('userId', 'User id is mandatory').exists(),
    param('userId', 'User id is not an email').isEmail(),
  ],
  getList: [
    header('Accept-Version', 'Accept-Version is mandatory').exists(),
    header('Accept-Version', 'Accept-Version should be in the next format: 0.0.0').isIn(availableVersions),
  ],
};

export default validation;
