export const clamp = (number, lower, upper) => {
  if (number == null || lower == null || upper == null) {
    throw new TypeError('clamp expects number, lower, and upper bounds');
  }
  let min = lower;
  let max = upper;
  if (min > max) {
    [min, max] = [max, min];
  }
  if (number <= min) {
    return min;
  }
  if (number >= max) {
    return max;
  }
  return number;
};
