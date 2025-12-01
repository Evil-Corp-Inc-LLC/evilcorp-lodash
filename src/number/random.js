export const random = (lower = 0, upper = 1, floating = false) => {
  let min = lower;
  let max = upper;
  let isFloating = floating;

  if (typeof min === 'boolean') {
    isFloating = min;
    min = 0;
    max = 1;
  }

  if (upper === undefined) {
    max = min;
    min = 0;
  }

  if (min > max) {
    [min, max] = [max, min];
  }

  if (isFloating || !Number.isInteger(min) || !Number.isInteger(max)) {
    return Math.random() * (max - min) + min;
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
};
