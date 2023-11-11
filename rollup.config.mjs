import typescript from '@rollup/plugin-typescript';
import eslint from '@rollup/plugin-eslint';
import terser from '@rollup/plugin-terser';
import html from '@rollup/plugin-html';
import analyzer from "rollup-plugin-analyzer";
import dev from 'rollup-plugin-dev';
import zip from 'rollup-plugin-zip';

import { readFileSync } from 'node:fs';

export default {
    input: 'src/index.ts',
    output: {
        dir: 'out',
        format: 'umd',
        name: 'GenerativeArtTemplate',
        sourcemap: true
    },
    plugins: [
        typescript(),
        eslint({
            include: ['src/**/*.ts', 'src/**/*.js'],
            throwOnError: true,
            throwOnWarning: true
        }),
        terser(),
        exportFavicon(),
        html({
            title: 'Generative Art Template'
        }),
        analyzer({
            summaryOnly: false
        }),
        dev({
            dirs: ['out'],
            spa: true
        }),
        zip({
            dir: 'zip'
        })
    ]
};

function exportFavicon() {
    return {
      generateBundle() {
          this.emitFile({
              type: 'asset',
              fileName: 'favicon.ico',
              source: readFileSync('./assets/icon/favicon.ico')
          });
      }
    };
}
