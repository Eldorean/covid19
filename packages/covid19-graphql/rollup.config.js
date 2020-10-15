import typescriptPlugin from 'rollup-plugin-typescript2'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import typescript from 'typescript'
import graphql from '@kocal/rollup-plugin-graphql'

import pkg from './package.json'

export default {
  input: 'src/index.ts',
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
    resolve(),
    graphql(),
    typescriptPlugin({
      rollupCommonJSResolveHack: true,
      clean: true,
      typescript,
      exclude: ['**/*.test.tsx', '**/*.stories.tsx']
    }),
    commonjs()
  ],
  external: Object.keys(pkg.peerDependencies)
}
