export const flatten = (array = []) => {
  if (!Array.isArray(array)) {
    return [];
  }
  return array.reduce((acc, value) => acc.concat(Array.isArray(value) ? value : [value]), []);
};
