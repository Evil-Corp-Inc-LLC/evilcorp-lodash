import { describe, it, expect } from 'vitest';
import fp from '../src/fp/index.js';

const numbers = [1, 2, 3];

describe('fp helpers', () => {
  it('maps in iteratee-first order', () => {
    const double = (n) => n * 2;
    expect(fp.map(double)(numbers)).toEqual([2, 4, 6]);
  });

  it('reduces with data-last order', () => {
    const sum = (total, value) => total + value;
    expect(fp.reduce(sum, 0)(numbers)).toBe(6);
  });

  it('allows partial application for object helpers', () => {
    const getName = fp.get('name', undefined);
    expect(getName({ name: 'Nova' })).toBe('Nova');
  });
});
