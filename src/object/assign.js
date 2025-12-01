export const assign = (target, ...sources) => {
  if (target == null) {
    throw new TypeError('assign expects a target object');
  }
  for (const source of sources) {
    if (source == null) {
      continue;
    }
    Object.assign(target, source);
  }
  return target;
};
