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

import {P5Lib, BlackColorFactory, Color} from "common";

function checkValueBetween(value: number, min: number, max: number) {
    expect(value).toBeGreaterThanOrEqual(min);
    expect(value).toBeLessThanOrEqual(max);
}

function generateConsecutiveArray(max: number): number[] {
    const array: number[] = [];

    for (let i: number = 1; i <= max; i++) {
        array.push(i);
    }

    return array;
}

function repeatTest(count: number, testName: string ,givenTest: () => void): void {
    const array: number[] = generateConsecutiveArray(count);
    test.each(array)(testName, givenTest);
}

describe('back color factory tests', (): void => {
    const p5: P5Lib = new P5Lib((): void => { return; });

    const testRandomBlackColor = (): void => {
        const factory: BlackColorFactory = new BlackColorFactory(p5);
        const color:Color = factory.getRandomColor();
        checkValueBetween(color.red, 0, 100);
        checkValueBetween(color.green, 0, 100);
        checkValueBetween(color.blue, 0, 100);
        expect(color.alpha).toBe(255);
    }

    repeatTest(10, 'get random black color - test %i', testRandomBlackColor);
});
