import typescript from '@rollup/plugin-typescript';

export default {
    input: 'src/sketch.ts',
    output: {
        dir: 'out',
        format: 'iife',
        sourcemap: true
    },
    plugins: [typescript()]
};
