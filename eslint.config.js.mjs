/*
 * Copyright (C) 2024 brittni and the polar bear LLC.
 *
 * This file is a part of brittni and the polar bear's genart template,
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
 *
 * The visual outputs of this source code are licensed under the
 * Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0) License.
 * You should have received a copy of the CC BY-NC-ND 4.0 License with this program.
 * See OUTPUT-LICENSE or go to https://creativecommons.org/licenses/by-nc-nd/4.0/
 * for full license details.
 */

import js from '@eslint/js';

import es_x from 'eslint-plugin-es-x';
import node from 'eslint-plugin-n';
import security from 'eslint-plugin-security';

import stylistic from '@stylistic/eslint-plugin'

export default [
    js.configs.recommended,
    es_x.configs['flat/restrict-to-es2022'],
    node.configs["flat/recommended"],
    security.configs.recommended,
    stylistic.configs['recommended-flat'],
    {
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: 'module'
        },
        plugins: {
            'es-x': es_x,
            '@stylistic': stylistic,
        },
        rules: {
            'one-var': ['error', 'never'],

            'n/no-missing-import': 'off',

            'security/detect-object-injection': 'off',

            '@stylistic/brace-style': ['error', '1tbs'],

            '@stylistic/no-extra-semi': 'error',

            '@stylistic/function-call-argument-newline': ['error', 'consistent'],

            '@stylistic/function-call-spacing': ['error', 'never'],

            '@stylistic/comma-dangle': ['error', 'never'],

            '@stylistic/indent': ['error',
                4,
                {
                    SwitchCase: 1,
                    FunctionDeclaration: {
                        parameters: 'first'
                    },
                    FunctionExpression: {
                        parameters: 'first'
                    }
                }
            ],

            '@stylistic/indent-binary-ops': 'off',

            '@stylistic/member-delimiter-style': ['error', {
                multiline: {
                    delimiter: 'semi',
                    requireLast: false
                },
                singleline: {
                    delimiter: 'semi',
                    requireLast: false
                }
            }],

            '@stylistic/operator-linebreak': ['error', 'after'],

            '@stylistic/quotes': ['error',
                'single',
                {
                    avoidEscape: true,
                    allowTemplateLiterals: true
                }
            ],

            '@stylistic/semi': ['error', 'always'],
        }
    }
];
