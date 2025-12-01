export const pick = (object, paths) => {
  if (object == null) {
    return {};
  }
  const result = {};
  for (const path of paths) {
    if (Object.prototype.hasOwnProperty.call(object, path)) {
      result[path] = object[path];
    }
  }
  return result;
};
