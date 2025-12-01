export const omit = (object, keysToOmit) => {
  if (object == null) {
    return {};
  }
  const omitSet = new Set(keysToOmit);
  const result = {};
  for (const key of Object.keys(object)) {
    if (!omitSet.has(key)) {
      result[key] = object[key];
    }
  }
  return result;
};
