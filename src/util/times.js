import { identity } from './identity.js';

export const times = (n, iteratee = identity) => {
  const count = Math.max(0, Math.floor(n));
  const result = [];
  for (let i = 0; i < count; i += 1) {
    result.push(iteratee(i));
  }
  return result;
};
