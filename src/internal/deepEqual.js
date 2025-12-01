import { getTag } from './getTag.js';
import { isObjectLike } from './isObjectLike.js';

export const isEqualDeep = (value, other, stack = new WeakMap()) => {
  if (value === other) {
    return true;
  }

  if (!isObjectLike(value) || !isObjectLike(other)) {
    return Number.isNaN(value) && Number.isNaN(other);
  }

  const stacked = stack.get(value);
  if (stacked && stacked === other) {
    return true;
  }
  stack.set(value, other);

  const tag = getTag(value);
  if (tag !== getTag(other)) {
    return false;
  }

  switch (tag) {
    case '[object Date]':
      return value.getTime() === other.getTime();
    case '[object RegExp]':
      return value.source === other.source && value.flags === other.flags;
    case '[object Map]': {
      if (value.size !== other.size) {
        return false;
      }
      for (const [key, val] of value.entries()) {
        if (!other.has(key) || !isEqualDeep(val, other.get(key), stack)) {
          return false;
        }
      }
      return true;
    }
    case '[object Set]': {
      if (value.size !== other.size) {
        return false;
      }
      for (const val of value.values()) {
        if (![...other.values()].some((candidate) => isEqualDeep(val, candidate, stack))) {
          return false;
        }
      }
      return true;
    }
    default:
      break;
  }

  if (Array.isArray(value)) {
    if (value.length !== other.length) {
      return false;
    }
    for (let i = 0; i < value.length; i += 1) {
      if (!isEqualDeep(value[i], other[i], stack)) {
        return false;
      }
    }
    return true;
  }

  const keysA = Object.keys(value);
  const keysB = Object.keys(other);
  if (keysA.length !== keysB.length) {
    return false;
  }
  for (const key of keysA) {
    if (!Object.prototype.hasOwnProperty.call(other, key)) {
      return false;
    }
    if (!isEqualDeep(value[key], other[key], stack)) {
      return false;
    }
  }
  return true;
};
