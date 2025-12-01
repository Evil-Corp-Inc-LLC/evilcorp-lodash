# Clean-Room Lodash Recreation Plan

## Goals
- Provide a modern JavaScript utility library that mirrors Lodash's documented behavior without referencing source code.
- Export a UMD-friendly bundle plus modular entry points (full build, core build, FP build, and per-category modules).
- Deliver functional parity for the features covered by the provided README: array/object/string utilities, functional helpers, number utilities, and FP data-last variants.
- Ensure the package supports both Node.js (`require`) and ESM (`import`) consumers and includes a CLI build pipeline.

## Public Surface Area
- **Full build (`lodash`)**: Aggregates every implemented helper into the `_` namespace while still allowing named imports.
- **Core build (`lodash/core`)**: Focused subset emphasizing collection iteration, basic transforms, and function utilities.
- **FP build (`lodash/fp`)**: Data-last, auto-curried versions of the most composable helpers (e.g., `map`, `filter`, `chunk`, `range`, `curryN`).
- **Category modules**: `lodash/array`, `lodash/collection`, `lodash/object`, `lodash/string`, `lodash/number`, `lodash/function`, `lodash/lang`, `lodash/util`.
- **Per-function entry points**: Rely on standard ES module tree-shaking—consumers can import from category modules.

## Implementation Strategy
1. **Source organization**: Each helper lives in `src/<category>/<name>.js`. Category `index.js` re-exports the helpers. The root `src/index.js` merges categories into one namespace object for the default export.
2. **Internal utilities**:
   - Shared type guards (`isArray`, `isObjectLike`, etc.).
   - `createCurry` / `autoCurry` powering `curry`, `curryN`, and FP wrappers.
   - `deepClone` helpers reused by `cloneDeep`, `isEqual`, `merge`.
3. **Functionality coverage** (sample set per category):
   - Array: `chunk`, `compact`, `difference`, `flatten`, `flattenDeep`, `uniq`.
   - Collection: `map`, `filter`, `reduce`, `groupBy`, `keyBy`.
   - Object: `assign`, `merge`, `pick`, `omit`, `get`, `set`.
   - String: `camelCase`, `kebabCase`, `capitalize`, `pad`.
   - Number: `clamp`, `inRange`, `random`.
   - Function: `curry`, `curryN`, `debounce`, `throttle`, `compose`, `pipe`.
   - Lang/Util: `isEqual`, `isPlainObject`, `cloneDeep`, `isNil`, `identity`, `range`, `times`.
4. **Build pipeline**: Rollup configuration emitting ESM, CJS, and UMD bundles for full/core/fp plus CJS+ESM bundles for each category module. Minified UMD artifacts (`lodash.min.js`, etc.) are produced via `@rollup/plugin-terser`.
5. **Testing**: Vitest test suite covering representative helpers, ensuring deterministic behavior (e.g., `debounce` timing via fake timers, structural equality for `cloneDeep`).
6. **Tooling**: ESLint (flat config) enforcing modern best practices, npm scripts for `build`, `test`, `lint`, `check`.
7. **Documentation**: README describing installs, builds, FP usage, per-category import examples, and feature tables.
