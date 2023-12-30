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

import Color from "../../../src/common/color/color";
import PLib from "p5";

describe('color tests', (): void => {
    const p5: PLib = new PLib((): void => { return; });

    test('default color', (): void => {
        const defaultColor: Color = new Color(p5);
        expect(defaultColor.red).toBe(0);
        expect(defaultColor.green).toBe(0);
        expect(defaultColor.blue).toBe(0);
        expect(defaultColor.alpha).toBe(255);
    });

    test('color built with (r,g,b) parameter', (): void => {
        const r: number = 255;
        const g: number = 47;
        const b: number = 165;
        const c: PLib.Color = p5.color(r, g, b);
        const color: Color = new Color(p5, c);
        expect(color.red).toBe(r);
        expect(color.green).toBe(g);
        expect(color.blue).toBe(b);
        expect(color.alpha).toBe(255);
    });

    test('color built with (r,g,b,a) parameter', (): void => {
       // TODO
        expect(true).toBe(false); // automatic failure
    });

    test('color built with (c) parameter', (): void => {
        // TODO
        expect(true).toBe(false); // automatic failure
    });

    test('color built with (c,a) parameter', (): void => {
        // TODO
        expect(true).toBe(false); // automatic failure
    });

    test('color set with (r,g,b) color', (): void => {
        // TODO
        expect(true).toBe(false); // automatic failure
    });

    test('color set with (r,g,b,a) color', (): void => {
        // TODO
        expect(true).toBe(false); // automatic failure
    });

    test('color set with (c) parameter', (): void => {
        // TODO
        expect(true).toBe(false); // automatic failure
    });

    test('color set with (c,a) parameter', (): void => {
        // TODO
        expect(true).toBe(false); // automatic failure
    });

    test('set red to value > 255', (): void => {
        // TODO
        expect(true).toBe(false); // automatic failure
    });

    test('set red to value < 0', (): void => {
        // TODO
        expect(true).toBe(false); // automatic failure
    });

    test('set green to value > 255', (): void => {
        // TODO
        expect(true).toBe(false); // automatic failure
    });

    test('set green to value < 0', (): void => {
        // TODO
        expect(true).toBe(false); // automatic failure
    });

    test('set blue to value > 255', (): void => {
        // TODO
        expect(true).toBe(false); // automatic failure
    });

    test('set blue to value < 0', (): void => {
        // TODO
        expect(true).toBe(false); // automatic failure
    });

    test('set alpha to value > 255', (): void => {
        // TODO
        expect(true).toBe(false); // automatic failure
    });

    test('set alpha to value < 0', (): void => {
        // TODO
        expect(true).toBe(false); // automatic failure
    });
});
