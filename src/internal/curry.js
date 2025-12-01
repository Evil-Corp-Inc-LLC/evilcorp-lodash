export const CURRY_PLACEHOLDER = Symbol('curry_placeholder');

const mergeArgs = (existing, incoming) => {
  const result = existing.slice();
  let incomingIndex = 0;

  for (let i = 0; i < result.length && incomingIndex < incoming.length; i += 1) {
    if (result[i] === CURRY_PLACEHOLDER) {
      result[i] = incoming[incomingIndex];
      incomingIndex += 1;
    }
  }

  return result.concat(incoming.slice(incomingIndex));
};

const countNonPlaceholders = (args) => args.filter((arg) => arg !== CURRY_PLACEHOLDER).length;

const curryInternal = (fn, arity, receivedArgs) => {
  const curried = (...args) => {
    const nextArgs = mergeArgs(receivedArgs, args);
    if (countNonPlaceholders(nextArgs) >= arity) {
      return fn(...nextArgs.slice(0, arity));
    }
    return curryInternal(fn, arity, nextArgs);
  };
  curried.placeholder = CURRY_PLACEHOLDER;
  return curried;
};

export const createCurry = (fn, arity = fn.length) => {
  if (typeof fn !== 'function') {
    throw new TypeError('createCurry expects a function');
  }
  return curryInternal(fn, arity, []);
};
