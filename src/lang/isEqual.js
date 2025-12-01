import { isEqualDeep } from '../internal/deepEqual.js';

export const isEqual = (value, other) => isEqualDeep(value, other);
