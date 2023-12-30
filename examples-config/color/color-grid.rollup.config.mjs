/*
 * Copyright (C) 2023 Brittni Watkins.
 *
 * This file is a part of brittni and the polar bear's Generative Art Project Template,
 * which is released under the GNU Affero General Public License, Version 3.0.
 * You may not use this file except in compliance with the license.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. See LICENSE or go to
 * https://www.gnu.org/licenses/agpl-3.0.en.html for full license details.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU Affero General Public License for more details.
 */

import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import eslint from '@rollup/plugin-eslint';
import terser from '@rollup/plugin-terser';
import css from 'rollup-plugin-css-only';
import html from '@rollup/plugin-html';
import dev from 'rollup-plugin-dev';

import { readFileSync } from 'node:fs';

export default {
    input: './examples/color/color-grid.ts',
    output: {
        dir: './dist',
        format: 'umd',
        name: 'Example:Color-Grid',
        sourcemap: true,
        preserveModules: false
    },
    plugins: [
        typescript(),
        commonjs(),
        nodeResolve({
            extensions: ['.ts']
        }),
        eslint({
            include: [
                './src/**/*.ts',
                './*.ts'
            ],
            throwOnError: true,
            throwOnWarning: true
        }),
        terser(),
        exportFavicon(),
        css({
            output: 'bundle.css'
        }),
        html({
            title: 'Example: Color Grid',
            publicPath: './'
        }),
        dev({
            dirs: ['./dist'],
            host: '127.0.0.1',
            spa: true
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
