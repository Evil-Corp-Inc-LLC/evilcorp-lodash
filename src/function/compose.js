export const compose = (...fns) => {
  if (fns.some((fn) => typeof fn !== 'function')) {
    throw new TypeError('compose expects functions');
  }
  return (value) => fns.reduceRight((acc, fn) => fn(acc), value);
};

export const pipe = (...fns) => {
  if (fns.some((fn) => typeof fn !== 'function')) {
    throw new TypeError('pipe expects functions');
  }
  return (value) => fns.reduce((acc, fn) => fn(acc), value);
};
