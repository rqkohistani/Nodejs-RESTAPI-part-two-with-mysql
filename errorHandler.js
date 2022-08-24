/* eslint-disable no-console */

import { DEFAULT_ERROR } from './constants';
import { capitalizeFirstLetter, indexOfEnd } from './utils/helper.util';

const databaseErrors = {
  1062: 'Duplicate entry',
  1452: 'Cannot add or update a child row: a foreign key constraint fails',
  1451: 'Cannot delete or update a parent row: a foreign key constraint fails',
};

const getDbError = (error) => {
  if (!Object.keys(databaseErrors).includes(error?.code)) return null;
  const { message } = error;
  if (typeof message !== 'string') return null;

  const tableName = message.substring(indexOfEnd(message, 'CONSTRAINT `'), indexOfEnd(message, '` FOREIGN KEY'));
  const errorType = databaseErrors[error.code];
  return `${errorType} ${tableName}`;
};

const getDerivedError = (error) => {
  if (error.type === 'entity.parse.failed') return { status: 400, message: 'Request body contains invalid JSON' };

  const databaseErrors = getDbError(error);
  if (databaseErrors) return databaseErrors;
  if (error.message)
    return {
      status: 400,
      message: `${capitalizeFirstLetter(error.message)}.`,
    };

  return DEFAULT_ERROR;
};
const logError = (error, errorData) => {
  if (Object.prototype.hasOwnProperty.call(errorData, 'validationErrors')) {
    console.error(`status: ${errorData.status}, validationErrors:`);
    console.dir(errorData.validationErrors);
  } else {
    console.error(error);
  }
};

const errorHandler = (error, req, res, next) => {
  if (!error) return next();

  let errorData = error?.data;

  // Non-custom errors will not contain error.data
  if (!errorData) errorData = getDerivedError(error);

  if (process.env.NODE_ENV !== 'production') {
    logError(error, errorData);
  }

  return res?.status(errorData.status || 500).send(errorData);
};

export default errorHandler;
