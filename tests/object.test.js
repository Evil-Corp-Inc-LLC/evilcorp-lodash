import { describe, it, expect } from 'vitest';
import { assign, merge, pick, omit, get, set } from '../src/object/index.js';

describe('object helpers', () => {
  it('assigns enumerable properties', () => {
    const target = { a: 1 };
    const result = assign(target, { b: 2 });
    expect(result).toEqual({ a: 1, b: 2 });
  });

  it('merges deeply nested values', () => {
    const target = { settings: { theme: 'light' } };
    const source = { settings: { density: 'compact' } };
    expect(merge(target, source)).toEqual({ settings: { theme: 'light', density: 'compact' } });
  });

  it('picks whitelisted properties', () => {
    expect(pick({ a: 1, b: 2 }, ['a'])).toEqual({ a: 1 });
  });

  it('omits blacklisted properties', () => {
    expect(omit({ a: 1, b: 2 }, ['b'])).toEqual({ a: 1 });
  });

  it('gets nested values safely', () => {
    const data = { author: { name: 'Ada' } };
    expect(get(data, 'author.name')).toBe('Ada');
    expect(get(data, 'author.email', 'unknown')).toBe('unknown');
  });

  it('sets nested values safely', () => {
    const data = {};
    set(data, 'author.name', 'Ada');
    expect(data.author.name).toBe('Ada');
  });
});
