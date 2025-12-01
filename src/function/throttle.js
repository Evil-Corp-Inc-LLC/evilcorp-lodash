import { debounce } from './debounce.js';

export const throttle = (fn, wait = 0, options = {}) => {
  const leading = options.leading !== false;
  const trailing = options.trailing !== false;
  return debounce(fn, wait, { leading, trailing, maxWait: wait });
};
