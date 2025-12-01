export const difference = (array = [], ...values) => {
  if (!Array.isArray(array)) {
    return [];
  }
  const exclude = new Set(values.flat(Infinity));
  return array.filter((item) => !exclude.has(item));
};
