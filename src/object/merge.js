import { isPlainObject } from '../internal/isPlainObject.js';
import { cloneDeep } from '../internal/deepClone.js';

export function merge(target, ...sources) {
  if (!isPlainObject(target) && !Array.isArray(target)) {
    throw new TypeError('merge expects a plain object or array target');
  }

  for (const source of sources) {
    if (source == null) {
      continue;
    }
    const keys = [...Object.keys(source), ...Object.getOwnPropertySymbols(source)];
    for (const key of keys) {
      const sourceValue = source[key];
      const targetValue = target[key];
      if (isMergeable(sourceValue)) {
        const base = Array.isArray(sourceValue)
          ? (Array.isArray(targetValue) ? targetValue : [])
          : (isPlainObject(targetValue) ? targetValue : {});
        target[key] = merge(base, sourceValue);
      } else if (Array.isArray(sourceValue)) {
        target[key] = sourceValue.slice();
      } else if (isPlainObject(sourceValue)) {
        target[key] = cloneDeep(sourceValue);
      } else {
        target[key] = sourceValue;
      }
    }
  }

  return target;
}

const isMergeable = (value) => Array.isArray(value) || isPlainObject(value);
