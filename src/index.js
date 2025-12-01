import * as array from './array/index.js';
import * as collection from './collection/index.js';
import * as object from './object/index.js';
import * as numberFns from './number/index.js';
import * as string from './string/index.js';
import * as func from './function/index.js';
import * as lang from './lang/index.js';
import * as util from './util/index.js';
import fp from './fp/index.js';

export * from './array/index.js';
export * from './collection/index.js';
export * from './object/index.js';
export * from './number/index.js';
export * from './string/index.js';
export * from './function/index.js';
export * from './lang/index.js';
export * from './util/index.js';
export { default as fp } from './fp/index.js';

const lodash = {
  ...array,
  ...collection,
  ...object,
  ...numberFns,
  ...string,
  ...func,
  ...lang,
  ...util,
  fp
};

export default lodash;
