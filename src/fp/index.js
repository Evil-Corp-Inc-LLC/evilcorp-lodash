import { map as baseMap, filter as baseFilter, reduce as baseReduce, groupBy as baseGroupBy, keyBy as baseKeyBy } from '../collection/index.js';
import { get as baseGet, set as baseSet, pick as basePick, omit as baseOmit } from '../object/index.js';
import { curry as baseCurry, curryN as baseCurryN, __ } from '../function/curry.js';
import { compose, pipe } from '../function/compose.js';

const toDataLast = (fn, arity, dataIndex = 0) => {
  const wrapped = (...args) => fn(...reorderArgs(args, arity, dataIndex));
  return baseCurry(wrapped, arity);
};

const reorderArgs = (args, arity, dataIndex) => {
  const normalized = args.slice();
  while (normalized.length < arity) {
    normalized.push(undefined);
  }
  const data = normalized[arity - 1];
  const rest = normalized.slice(0, arity - 1);
  const ordered = [];
  let restIndex = 0;
  for (let i = 0; i < arity; i += 1) {
    if (i === dataIndex) {
      ordered.push(data);
    } else {
      ordered.push(rest[restIndex]);
      restIndex += 1;
    }
  }
  return ordered;
};

const map = toDataLast(baseMap, 2);
const filter = toDataLast(baseFilter, 2);
const reduce = toDataLast(baseReduce, 3);
const groupBy = toDataLast(baseGroupBy, 2);
const keyBy = toDataLast(baseKeyBy, 2);
const get = toDataLast(baseGet, 3);
const set = toDataLast(baseSet, 3);
const pick = toDataLast(basePick, 2);
const omit = toDataLast(baseOmit, 2);

const fp = {
  map,
  filter,
  reduce,
  groupBy,
  keyBy,
  get,
  set,
  pick,
  omit,
  curry: baseCurry,
  curryN: baseCurryN,
  __,
  compose,
  pipe
};

export { map, filter, reduce, groupBy, keyBy, get, set, pick, omit, baseCurry as curry, baseCurryN as curryN, __, compose, pipe };
export default fp;
