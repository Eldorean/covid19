import typescriptPlugin from 'rollup-plugin-typescript2'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'typescript'

import pkg from './package.json'

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'es',
      exports: 'named',
      sourcemap: true
    }
  ],
  plugins: [
    // external(),
    resolve({
      rootDir: './src'
    }),
    typescriptPlugin({
      rollupCommonJSResolveHack: true,
      clean: true,
      typescript,
      exclude: ['**/*.test.tsx', '**/*.stories.tsx']
    }),
    commonjs()
  ],
  external: Object.keys(pkg.peerdependencies)
}
