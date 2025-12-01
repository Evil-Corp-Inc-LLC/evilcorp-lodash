import { describe, it, expect } from 'vitest';
import { cloneDeep, isEqual, isPlainObject, isNil } from '../src/lang/index.js';

describe('language helpers', () => {
  it('clones deeply nested structures', () => {
    const value = { a: { b: [1, 2] } };
    const cloned = cloneDeep(value);
    expect(cloned).toEqual(value);
    expect(cloned).not.toBe(value);
  });

  it('checks deep equality', () => {
    const a = { foo: { bar: 1 } };
    const b = { foo: { bar: 1 } };
    expect(isEqual(a, b)).toBe(true);
  });

  it('detects plain objects', () => {
    expect(isPlainObject({})).toBe(true);
    expect(isPlainObject([])).toBe(false);
  });

  it('detects nil values', () => {
    expect(isNil(null)).toBe(true);
    expect(isNil(undefined)).toBe(true);
    expect(isNil(0)).toBe(false);
  });
});
