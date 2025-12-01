import { createCurry, CURRY_PLACEHOLDER } from '../internal/curry.js';

export const curry = (fn, arity = fn.length) => {
  const curried = createCurry(fn, arity);
  curried.placeholder = CURRY_PLACEHOLDER;
  return curried;
};

export const curryN = (arity, fn) => curry(fn, arity);

export const __ = CURRY_PLACEHOLDER;
