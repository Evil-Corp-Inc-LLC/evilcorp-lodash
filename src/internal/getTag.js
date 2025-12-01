const toString = Object.prototype.toString;

export const getTag = (value) => toString.call(value);
