const defaultPredicate = (value) => Boolean(value);

export const filter = (collection, predicate = defaultPredicate) => {
  if (collection == null) {
    return [];
  }

  const result = [];
  const pushIf = (value, key) => {
    if (predicate(value, key, collection)) {
      result.push(value);
    }
  };

  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i += 1) {
      pushIf(collection[i], i);
    }
    return result;
  }

  if (collection instanceof Map) {
    collection.forEach((value, key) => pushIf(value, key));
    return result;
  }

  if (collection instanceof Set) {
    let index = 0;
    collection.forEach((value) => {
      pushIf(value, index);
      index += 1;
    });
    return result;
  }

  if (typeof collection === 'object') {
    for (const key of Object.keys(collection)) {
      pushIf(collection[key], key);
    }
  }

  return result;
};
