# Clean-Room Lodash Recreation

A modern JavaScript utility library inspired by Lodash's documented behavior. The project was implemented from scratch in a clean room—no original Lodash source code was referenced. It delivers a curated-yet-practical collection of array, object, string, number, language, and functional helpers plus a functional-programming (FP) build.

## Highlights
- **Modular design** – import the full build, the slim core build, FP build, category bundles, or individual helpers.
- **UMD, CJS, and ESM** – consume from browsers, Node.js, or modern bundlers with tree-shaking support.
- **FP build** – iteratee-first, data-last, auto-curried variants of the most composition-friendly helpers.
- **Typed collections** – helpers operate on arrays, objects, maps, and sets when it makes sense.
- **Zero dependencies** – everything is implemented in plain JavaScript with comprehensive tests.

## Installation
```bash
npm install cleanroom-lodash
```

## Usage
### Full build
```js
import _ from 'cleanroom-lodash';

_.map([1, 2, 3], (n) => n * 2); // [2, 4, 6]
_.get({ user: { name: 'Ada' } }, 'user.name'); // 'Ada'
```

### Core build
```js
import core from 'cleanroom-lodash/core';

core.chunk([1, 2, 3, 4], 2);
```

### Functional build
Iteratee-first, data-last, auto-curried helpers.
```js
import fp from 'cleanroom-lodash/fp';

const double = (n) => n * 2;
const getAdminIds = fp.compose(
  fp.map((user) => user.id),
  fp.filter((user) => user.role === 'admin')
);

getAdminIds([
  { id: 'a', role: 'admin' },
  { id: 'b', role: 'reader' }
]); // ['a']
```
Category builds mirror the documented Lodash API surface:
```js
const array = require('cleanroom-lodash/array');
const fpObject = require('cleanroom-lodash/fp/object');
```

## Builds
Run a single command to emit every documented bundle:
```bash
npm run build
```
This produces:
- `dist/lodash.js` / `dist/lodash.min.js` – UMD full build.
- `dist/lodash.core.js` / `dist/lodash.fp.js` – UMD core & FP builds.
- `dist/*.esm.js` and `dist/*.cjs` – ESM + CommonJS variants for full, core, FP, and every category (array, object, collection, etc.) including `fp.object` and `fp.collection`.

## Implemented Helpers (excerpt)
| Category | Helpers |
| --- | --- |
| Array | `chunk`, `compact`, `difference`, `flatten`, `flattenDeep`, `uniq` |
| Collection | `map`, `filter`, `reduce`, `groupBy`, `keyBy` |
| Object | `assign`, `merge`, `pick`, `omit`, `get`, `set` |
| String | `camelCase`, `kebabCase`, `capitalize`, `pad` |
| Number | `clamp`, `inRange`, `random` |
| Function | `curry`, `curryN`, `__`, `debounce`, `throttle`, `compose`, `pipe` |
| Lang/Util | `cloneDeep`, `isEqual`, `isPlainObject`, `isNil`, `identity`, `range`, `times` |
| FP build | `map`, `filter`, `reduce`, `groupBy`, `keyBy`, `get`, `set`, `pick`, `omit`, `curry`, `curryN`, `compose`, `pipe` |

Each helper ships with thorough unit tests. The FP build always treats the data argument as the final position and wraps helpers in the clean-room curry implementation for auto currying.

## Testing & Quality
```bash
npm run lint   # ESLint (flat config)
npm run test   # Vitest test suite
```

## Contributing
1. Fork & clone the repo.
2. Install dependencies with `npm install`.
3. Implement changes in `src/`, ensure tests pass, then run `npm run build` to refresh bundles.
4. Submit a pull request.

The project is released under the MIT license (see `LICENSE`).
