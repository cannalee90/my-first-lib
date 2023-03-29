import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';

const extensions = ['.ts'];
const inputSrc = [
  ['./src/index.ts', 'es'],
  ['./src/index.ts', 'cjs'],
];

export default inputSrc
  .map(([input, format]) => {
    return {
      input,
      output: {
        dir: `dist/${format}`,
        format,
        exports: 'auto',
      },
      external: [/@babel\/runtime/],
      preserveModules: format === 'cjs',
      plugins: [
        // babel({
        //   babelHelpers: 'runtime',
        //   exclude: 'node_modules/**',
        //   extensions,
        // }),
        typescript({ tsconfig: './tsconfig.json' }),
        nodeResolve({
          extensions,
        }),
        // https://velog.io/@peterkimzz/rollup-%ED%94%8C%EB%9F%AC%EA%B7%B8%EC%9D%B8
        // commonJS 로 작성된 모듈들을 번들링 결과물에 포함시키려고 할 때 문제가 발생
        // CommonJS 로 작성된 모듈들을 ES6 바꾸어서 rollup이 해석할 수 있게 도와줍니다.
        commonjs({
          extensions: [...extensions, '.js'],
        }),

      ],
    };
  });
