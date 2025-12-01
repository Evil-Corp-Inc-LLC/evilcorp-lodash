const defaultIteratee = (value) => value;

export const keyBy = (collection, iteratee = defaultIteratee) => {
  const result = {};
  if (collection == null) {
    return result;
  }
  const assign = (value, key) => {
    const resultKey = iteratee(value, key, collection);
    if (resultKey != null) {
      result[resultKey] = value;
    }
  };

  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i += 1) {
      assign(collection[i], i);
    }
    return result;
  }

  if (collection instanceof Map) {
    collection.forEach((value, key) => assign(value, key));
    return result;
  }

  if (collection instanceof Set) {
    let index = 0;
    collection.forEach((value) => {
      assign(value, index);
      index += 1;
    });
    return result;
  }

  if (typeof collection === 'object') {
    for (const key of Object.keys(collection)) {
      assign(collection[key], key);
    }
  }

  return result;
};
