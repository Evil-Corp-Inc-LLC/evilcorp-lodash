import { getTag } from './getTag.js';
import { isObjectLike } from './isObjectLike.js';

const cloneableTags = new Set([
  '[object Object]',
  '[object Array]',
  '[object Map]',
  '[object Set]',
  '[object Date]',
  '[object RegExp]',
  '[object Uint8Array]',
  '[object Uint16Array]',
  '[object Uint32Array]',
  '[object Int8Array]',
  '[object Int16Array]',
  '[object Int32Array]',
  '[object Float32Array]',
  '[object Float64Array]'
]);

export const cloneDeep = (value, stack = new WeakMap()) => {
  if (!isObjectLike(value)) {
    return value;
  }

  if (stack.has(value)) {
    return stack.get(value);
  }

  const tag = getTag(value);
  if (!cloneableTags.has(tag)) {
    return value;
  }

  let cloned;
  switch (tag) {
    case '[object Date]':
      cloned = new Date(value.getTime());
      break;
    case '[object RegExp]':
      cloned = new RegExp(value.source, value.flags);
      break;
    case '[object Map]':
      cloned = new Map();
      stack.set(value, cloned);
      value.forEach((subValue, key) => {
        cloned.set(key, cloneDeep(subValue, stack));
      });
      return cloned;
    case '[object Set]':
      cloned = new Set();
      stack.set(value, cloned);
      value.forEach((subValue) => {
        cloned.add(cloneDeep(subValue, stack));
      });
      return cloned;
    case '[object Array]':
      cloned = [];
      break;
    default:
      if (tag.endsWith('Array]')) {
        const Ctor = value.constructor;
        cloned = new Ctor(value);
        break;
      }
      cloned = {};
  }

  stack.set(value, cloned);

  if (Array.isArray(value)) {
    for (let i = 0; i < value.length; i += 1) {
      cloned[i] = cloneDeep(value[i], stack);
    }
    return cloned;
  }

  if (isObjectLike(value)) {
    for (const key of Object.keys(value)) {
      cloned[key] = cloneDeep(value[key], stack);
    }
  }

  return cloned;
};
