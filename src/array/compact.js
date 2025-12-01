export const compact = (array = []) => {
  if (!Array.isArray(array)) {
    return [];
  }
  return array.filter(Boolean);
};
