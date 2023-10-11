import typescript from '@rollup/plugin-typescript';
import html from '@rollup/plugin-html';
import dev from 'rollup-plugin-dev';

export default {
    input: 'src/index.ts',
    output: {
        dir: 'out',
        format: 'es',
        sourcemap: true
    },
    plugins: [
        typescript(),
        html(),
        dev({
            dirs: ['out'],
            spa: true
        })
    ]
};
