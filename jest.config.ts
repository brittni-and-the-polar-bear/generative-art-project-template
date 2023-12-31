/*
 * Copyright (C) 2023-2024 Brittni Watkins.
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

import type {JestConfigWithTsJest} from 'ts-jest';

const config: JestConfigWithTsJest = {
    collectCoverage: true,
    coverageDirectory: './out/tests-coverage',
    coverageReporters: ['text', 'lcov'],
    errorOnDeprecated: true,
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'mjs', 'cjs', 'json', 'node'],
    moduleNameMapper: {
        '^assets': '<rootDir>/assets',
        '^color$': '<rootDir>/src/common/color',
        '^color/factory$': '<rootDir>/src/common/color/factory',
        '^color/factory/collection$': '<rootDir>/src/common/color/factory/collection',
        '^all-colors': '<rootDir>/src/common/color/factory/collection/colors',
        '^all-collections': '<rootDir>/src/common/color/factory/collection/collections',
        '^p5-lib$': '<rootDir>/src/common/p5',
        '^random$': '<rootDir>/src/common/random',
        '^range$': '<rootDir>/src/common/range',
        '^common$': '<rootDir>/src/common'
    },
    testEnvironment: 'jsdom',
    testRegex: '/tests/.*\\.(test|spec)?\\.(ts|tsx)$',
    transform: {'^.+\\.(ts|tsx)$': 'ts-jest'},
    verbose: true
};

export default config;
