export function reduce(collection, iteratee, accumulator) {
  if (typeof iteratee !== 'function') {
    throw new TypeError('reduce expects an iteratee function');
  }

  if (collection == null) {
    return accumulator;
  }

  let hasSeed = arguments.length >= 3;
  const reducer = (value, key) => {
    if (!hasSeed) {
      accumulator = value;
      hasSeed = true;
    } else {
      accumulator = iteratee(accumulator, value, key, collection);
    }
  };

  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i += 1) {
      reducer(collection[i], i);
    }
    return accumulator;
  }

  if (collection instanceof Map) {
    collection.forEach((value, key) => reducer(value, key));
    return accumulator;
  }

  if (collection instanceof Set) {
    let index = 0;
    collection.forEach((value) => {
      reducer(value, index);
      index += 1;
    });
    return accumulator;
  }

  if (typeof collection === 'object') {
    for (const key of Object.keys(collection)) {
      reducer(collection[key], key);
    }
  }

  return accumulator;
}
