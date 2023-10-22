import typescript from '@rollup/plugin-typescript';
import eslint from '@rollup/plugin-eslint';
import html from '@rollup/plugin-html';
import dev from 'rollup-plugin-dev';
import zip from 'rollup-plugin-zip';

export default {
    input: 'src/index.ts',
    output: {
        dir: 'out',
        format: 'es',
        sourcemap: true
    },
    plugins: [
        typescript(),
        eslint({
            include: ['src/**/*.ts', 'src/**/*.js'],
            throwOnError: true,
            throwOnWarning: true
        }),
        html(),
        dev({
            dirs: ['out'],
            spa: true
        }),
        zip({
            dir: 'zip'
        }),
    ]
};
