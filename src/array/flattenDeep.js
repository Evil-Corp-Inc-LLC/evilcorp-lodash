const flattenValue = (value, acc) => {
  if (Array.isArray(value)) {
    value.forEach((item) => flattenValue(item, acc));
  } else {
    acc.push(value);
  }
};

export const flattenDeep = (array = []) => {
  if (!Array.isArray(array)) {
    return [];
  }
  const acc = [];
  array.forEach((value) => flattenValue(value, acc));
  return acc;
};
