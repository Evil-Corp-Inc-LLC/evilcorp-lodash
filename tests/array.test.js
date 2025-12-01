import { describe, it, expect } from 'vitest';
import { chunk, compact, flatten, flattenDeep, difference, uniq } from '../src/array/index.js';

describe('array helpers', () => {
  it('chunks arrays into even groups', () => {
    expect(chunk([1, 2, 3, 4], 2)).toEqual([[1, 2], [3, 4]]);
  });

  it('filters out falsy values via compact', () => {
    expect(compact([0, 1, false, 2, '', 3])).toEqual([1, 2, 3]);
  });

  it('flattens nested arrays one level', () => {
    expect(flatten([1, [2, 3]])).toEqual([1, 2, 3]);
  });

  it('flattens nested arrays recursively', () => {
    expect(flattenDeep([1, [2, [3, 4]]])).toEqual([1, 2, 3, 4]);
  });

  it('computes set difference', () => {
    expect(difference([1, 2, 3], [2], [4, 5], 6)).toEqual([1, 3]);
  });

  it('removes duplicate entries', () => {
    expect(uniq([1, 2, 2, 3])).toEqual([1, 2, 3]);
  });
});
