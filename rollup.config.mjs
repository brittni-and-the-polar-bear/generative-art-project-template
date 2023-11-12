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
import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";
import eslint from '@rollup/plugin-eslint';
import terser from '@rollup/plugin-terser';
import html from '@rollup/plugin-html';
import analyzer from "rollup-plugin-analyzer";
import dev from 'rollup-plugin-dev';
import zip from 'rollup-plugin-zip';

import { readFileSync } from 'node:fs';

export default {
    input: 'src/sketch.ts',
    output: {
        dir: 'out',
        format: 'umd',
        name: 'GenerativeArtTemplate',
        sourcemap: true,
        preserveModules: false
    },
    plugins: [
        typescript(),
        commonjs(),
        nodeResolve({
            extensions: [
                '.js',
                '.ts'
            ]
        }),
        eslint({
            include: [
                'src/**/*.ts',
                'src/**/*.js'
            ],
            throwOnError: true,
            throwOnWarning: true
        }),
        terser(),
        exportFavicon(),
        html({
            title: 'Generative Art Template'
        }),
        analyzer({
            summaryOnly: true
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
