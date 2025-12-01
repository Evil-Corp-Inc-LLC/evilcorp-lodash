export const debounce = (fn, wait = 0, options = {}) => {
  if (typeof fn !== 'function') {
    throw new TypeError('debounce expects a function');
  }

  let timerId;
  let lastCallTime;
  let lastInvokeTime = 0;
  let result;
  let lastArgs;
  let lastThis;

  const leading = Boolean(options.leading);
  const trailing = options.trailing !== false;
  const maxWait = typeof options.maxWait === 'number' ? options.maxWait : null;

  const invoke = (context, args) => {
    lastInvokeTime = Date.now();
    result = fn.apply(context, args);
    lastArgs = lastThis = undefined;
    return result;
  };

  const shouldInvoke = (time) => {
    if (lastCallTime == null) {
      return true;
    }
    const timeSinceLastCall = time - lastCallTime;
    const timeSinceLastInvoke = time - lastInvokeTime;
    return (
      timeSinceLastCall >= wait ||
      timeSinceLastCall < 0 ||
      (maxWait != null && timeSinceLastInvoke >= maxWait)
    );
  };

  const trailingEdge = (_time) => {
    timerId = undefined;
    if (trailing && lastArgs) {
      return invoke(lastThis, lastArgs);
    }
    lastArgs = lastThis = undefined;
    return result;
  };

  const timerExpired = () => {
    const time = Date.now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    const remaining = wait - (time - lastCallTime);
    timerId = setTimeout(timerExpired, remaining);
    return result;
  };

  const debounced = function (...args) {
    const time = Date.now();
    const invokeNow = shouldInvoke(time);
    lastArgs = args;
    lastThis = this;
    lastCallTime = time;

    if (invokeNow) {
      if (timerId === undefined) {
        timerId = setTimeout(timerExpired, wait);
        return leading ? invoke(lastThis, lastArgs) : result;
      }
      if (maxWait != null) {
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invoke(lastThis, lastArgs);
      }
    }

    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  };

  debounced.cancel = () => {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    timerId = lastCallTime = lastArgs = lastThis = undefined;
  };

  debounced.flush = () => {
    if (timerId === undefined) {
      return result;
    }
    return trailingEdge(Date.now());
  };

  return debounced;
};
