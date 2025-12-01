import { chunk } from './array/chunk.js';
import { compact } from './array/compact.js';
import { map } from './collection/map.js';
import { filter } from './collection/filter.js';
import { reduce } from './collection/reduce.js';
import { groupBy } from './collection/groupBy.js';
import { keyBy } from './collection/keyBy.js';
import { assign } from './object/assign.js';
import { merge } from './object/merge.js';
import { clamp } from './number/clamp.js';
import { inRange } from './number/inRange.js';
import { range } from './util/range.js';
import { identity } from './util/identity.js';
import { curry, curryN, __ } from './function/curry.js';
import { compose, pipe } from './function/compose.js';

export {
  chunk,
  compact,
  map,
  filter,
  reduce,
  groupBy,
  keyBy,
  assign,
  merge,
  clamp,
  inRange,
  range,
  identity,
  curry,
  curryN,
  __,
  compose,
  pipe
};

const core = {
  chunk,
  compact,
  map,
  filter,
  reduce,
  groupBy,
  keyBy,
  assign,
  merge,
  clamp,
  inRange,
  range,
  identity,
  curry,
  curryN,
  __,
  compose,
  pipe
};

export default core;
