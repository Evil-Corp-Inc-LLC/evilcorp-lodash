import { isObjectLike } from './isObjectLike.js';
import { getTag } from './getTag.js';

export const isPlainObject = (value) => {
  if (!isObjectLike(value) || getTag(value) !== '[object Object]') {
    return false;
  }
  const proto = Object.getPrototypeOf(value);
  return proto === null || proto === Object.prototype;
};
