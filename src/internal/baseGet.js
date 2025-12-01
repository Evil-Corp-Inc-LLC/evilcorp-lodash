import { toPath } from './toPath.js';

export const baseGet = (object, path, defaultValue) => {
  if (object == null) {
    return defaultValue;
  }

  const segments = toPath(path);
  if (!segments.length) {
    return defaultValue;
  }

  let cursor = object;
  for (const segment of segments) {
    if (cursor == null) {
      return defaultValue;
    }
    cursor = cursor[segment];
  }

  return cursor === undefined ? defaultValue : cursor;
};
