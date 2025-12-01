import { describe, it, expect } from 'vitest';
import { map, filter, reduce, groupBy, keyBy } from '../src/collection/index.js';

const users = [
  { id: 'a', age: 28, role: 'admin' },
  { id: 'b', age: 34, role: 'reader' },
  { id: 'c', age: 34, role: 'admin' }
];

describe('collection helpers', () => {
  it('maps collections', () => {
    expect(map(users, (user) => user.id)).toEqual(['a', 'b', 'c']);
  });

  it('filters collections', () => {
    expect(filter(users, (user) => user.role === 'admin')).toHaveLength(2);
  });

  it('reduces collections with initial value', () => {
    const sumAges = reduce(users, (sum, user) => sum + user.age, 0);
    expect(sumAges).toBe(96);
  });

  it('groups items by iteratee result', () => {
    const grouped = groupBy(users, (user) => user.role);
    expect(grouped.admin).toHaveLength(2);
  });

  it('keys objects by iteratee result', () => {
    const keyed = keyBy(users, (user) => user.id);
    expect(keyed.c.role).toBe('admin');
  });
});
