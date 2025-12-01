import { toPath } from './toPath.js';
import { isObjectLike } from './isObjectLike.js';

export const baseSet = (object, path, value) => {
  if (!isObjectLike(object)) {
    throw new TypeError('baseSet expects an object target');
  }

  const segments = toPath(path);
  if (!segments.length) {
    return object;
  }

  let cursor = object;
  for (let i = 0; i < segments.length; i += 1) {
    const key = segments[i];
    if (i === segments.length - 1) {
      cursor[key] = value;
    } else {
      if (!isObjectLike(cursor[key])) {
        cursor[key] = Number.isInteger(+segments[i + 1]) ? [] : {};
      }
      cursor = cursor[key];
    }
  }
  return object;
};
