const getBoolFromString = (string) => {
  let result = null;
  if (typeof string === 'undefined') return undefined;
  if (typeof string.toLowerCase !== 'function') return null;

  if (string.toLowerCase() === 'true') result = true;
  else if (string.toLowerCase() === 'false') result = false;
  return result;
};

const indexOfEnd = (string, searchString) => {
  const index = string.indexOf(searchString);
  return index === -1 ? -1 : index + searchString.length;
};

const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);

/**
 *
 * @param {*} data
 * @returns Integer if parsing succesful, original data if not. Undefined if data is undefined
 */
const parseToIntIfPossible = (data) => {
  if (typeof data === 'undefined' || data === null) return data;

  const number = parseInt(data, 10);
  return Number.isNaN(number) ? data : number;
};

const getToFixedFloatIfNumber = (data, decimals) =>
  typeof data === 'number' ? parseFloat(data.toFixed(decimals)) : data;

const parseTinyInt = (data) => {
  if (data === null) return null;
  if (typeof data !== 'boolean') return undefined;
  return data ? 1 : 0;
};

const logProgressIndicator = (interval = 2000, maxDots = 4) => {
  let dots = 1;
  let dotsIncrement = 1;

  return setInterval(() => {
    if (dots >= maxDots) dotsIncrement = -1;
    if (dots <= 1) dotsIncrement = 1;
    // eslint-disable-next-line no-console
    console.log('.'.repeat(dots));
    dots += dotsIncrement;
  }, interval);
};

export {
  getBoolFromString,
  indexOfEnd,
  capitalizeFirstLetter,
  parseToIntIfPossible,
  getToFixedFloatIfNumber,
  parseTinyInt,
  logProgressIndicator,
};
