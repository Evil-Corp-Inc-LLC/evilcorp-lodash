import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';

const basePlugins = [nodeResolve(), commonjs()];

const primaryBuilds = [
  { input: 'src/index.js', basename: 'lodash', globalName: '_' },
  { input: 'src/core.js', basename: 'lodash.core', globalName: '_core' },
  { input: 'src/fp/index.js', basename: 'lodash.fp', globalName: '_fp' }
];

const moduleBuilds = [
  { input: 'src/array/index.js', basename: 'array' },
  { input: 'src/collection/index.js', basename: 'collection' },
  { input: 'src/object/index.js', basename: 'object' },
  { input: 'src/string/index.js', basename: 'string' },
  { input: 'src/number/index.js', basename: 'number' },
  { input: 'src/function/index.js', basename: 'function' },
  { input: 'src/lang/index.js', basename: 'lang' },
  { input: 'src/util/index.js', basename: 'util' },
  { input: 'src/fp/object/index.js', basename: 'fp.object' },
  { input: 'src/fp/collection/index.js', basename: 'fp.collection' }
];

const createOutputs = (basename, globalName) => {
  const outputs = [
    {
      file: `dist/${basename}.esm.js`,
      format: 'esm'
    },
    {
      file: `dist/${basename}.cjs`,
      format: 'cjs',
      exports: 'named'
    }
  ];

  if (globalName) {
    outputs.push(
      {
        file: `dist/${basename}.js`,
        format: 'umd',
        name: globalName,
        exports: 'named'
      },
      {
        file: `dist/${basename}.min.js`,
        format: 'umd',
        name: globalName,
        exports: 'named',
        plugins: [terser()]
      }
    );
  }

  return outputs;
};

const configs = [
  ...primaryBuilds.flatMap(({ input, basename, globalName }) =>
    createOutputs(basename, globalName).map((output) => ({
      input,
      output,
      plugins: output.plugins ? [...basePlugins, ...output.plugins] : basePlugins
    }))
  ),
  ...moduleBuilds.flatMap(({ input, basename }) =>
    createOutputs(basename).map((output) => ({
      input,
      output,
      plugins: basePlugins
    }))
  )
];

export default configs;
