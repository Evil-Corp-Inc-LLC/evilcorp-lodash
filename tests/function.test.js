import { describe, it, expect, vi } from 'vitest';
import { curry, __, debounce, throttle, compose, pipe } from '../src/function/index.js';

describe('function helpers', () => {
  it('curries functions with placeholders', () => {
    const fn = (a, b, c) => [a, b, c];
    const curried = curry(fn);
    const result = curried(1, __, 3)(2);
    expect(result).toEqual([1, 2, 3]);
  });

  it('debounces calls', () => {
    vi.useFakeTimers();
    const spy = vi.fn();
    const debounced = debounce(spy, 100);
    debounced();
    debounced();
    vi.advanceTimersByTime(99);
    expect(spy).not.toHaveBeenCalled();
    vi.advanceTimersByTime(1);
    expect(spy).toHaveBeenCalledTimes(1);
    vi.useRealTimers();
  });

  it('throttles calls', () => {
    vi.useFakeTimers();
    const spy = vi.fn();
    const throttled = throttle(spy, 100);
    throttled();
    vi.advanceTimersByTime(50);
    throttled();
    vi.advanceTimersByTime(51);
    expect(spy).toHaveBeenCalledTimes(2);
    vi.useRealTimers();
  });

  it('composes left-to-right and right-to-left', () => {
    const add = (n) => n + 1;
    const double = (n) => n * 2;
    expect(pipe(add, double)(1)).toBe(4);
    expect(compose(double, add)(1)).toBe(4);
  });
});
