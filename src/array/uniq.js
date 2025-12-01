export const uniq = (array = []) => {
  if (!Array.isArray(array)) {
    return [];
  }
  return [...new Set(array)];
};
