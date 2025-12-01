const defaultIteratee = (value) => value;

export const map = (collection, iteratee = defaultIteratee) => {
  if (collection == null) {
    return [];
  }

  const result = [];
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i += 1) {
      result.push(iteratee(collection[i], i, collection));
    }
    return result;
  }

  if (collection instanceof Map) {
    collection.forEach((value, key) => {
      result.push(iteratee(value, key, collection));
    });
    return result;
  }

  if (collection instanceof Set) {
    let index = 0;
    collection.forEach((value) => {
      result.push(iteratee(value, index, collection));
      index += 1;
    });
    return result;
  }

  if (typeof collection === 'object') {
    for (const key of Object.keys(collection)) {
      result.push(iteratee(collection[key], key, collection));
    }
  }

  return result;
};
