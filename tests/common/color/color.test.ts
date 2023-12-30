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

import { P5Lib, Color, SketchContext } from "common";

const p5: P5Lib = SketchContext.p5;

type ColorComponents = {
  readonly r: number,
  readonly g: number,
  readonly b: number,
  readonly a: number
};

describe('color tests', (): void => {
    const checkP5Color = (expected: ColorComponents, actual: P5Lib.Color):void => {
        const r: number = Math.floor(p5.red(actual));
        const g: number = Math.floor(p5.green(actual));
        const b: number = Math.floor(p5.blue(actual));
        const a: number = Math.floor(p5.alpha(actual));
        expect(r).toBe(expected.r);
        expect(g).toBe(expected.g);
        expect(b).toBe(expected.b);
        expect(a).toBe(expected.a);
    }

    const checkColor = (expected: ColorComponents, actual: Color):void => {
        expect(actual.red).toBe(expected.r);
        expect(actual.green).toBe(expected.g);
        expect(actual.blue).toBe(expected.b);
        expect(actual.alpha).toBe(expected.a);
    }

    test('get hsl color', (): void => {
        const h: number = 238;
        const s: number = 65;
        const l: number = 39;
        const expectedValues: ColorComponents = {r: 34, g: 39, b: 164, a: 255};
        const c: P5Lib.Color = Color.getHSLColor(h, s, l);

        p5.colorMode(p5.HSL, 360, 100, 100, 255);
        const hslColor: P5Lib.Color = p5.color(h, s, l);

        checkP5Color(expectedValues, c);
        checkP5Color(expectedValues, hslColor);
    });

    test('get hsla color', (): void => {
        const h: number = 134;
        const s: number = 82;
        const l: number = 15;
        const a: number = 0.25;
        const expectedValues: ColorComponents = {r: 6, g: 69, b: 21, a: Math.floor(255 * a)};
        const c: P5Lib.Color = Color.getHSLAColor(h, s, l, a);

        p5.colorMode(p5.HSL, 360, 100, 100, 255);
        const hslColor: P5Lib.Color = p5.color(h, s, l, Math.floor(255 * a));

        checkP5Color(expectedValues, c);
        checkP5Color(expectedValues, hslColor);
    });

    test('default color', (): void => {
        const expected: ColorComponents = {
            r: 0, g: 0, b: 0, a: 255
        }

        const defaultColor: Color = new Color();
        checkColor(expected, defaultColor);
        checkP5Color(expected, defaultColor.color);
    });

    test('color built with (c) parameter', (): void => {
        let w: number = 153;
        const c: P5Lib.Color = p5.color(w);
        const expected: ColorComponents = {
            r: w, g: w, b: w, a: 255
        }

        const color: Color = new Color(c);
        checkColor(expected, color);
        checkP5Color(expected, color.color);
    });

    test('color built with (c,a) parameter', (): void => {
        let w: number = 153;
        let a: number = 83;
        const c: P5Lib.Color = p5.color(w, a);
        const expected: ColorComponents = {
            r: w, g: w, b: w, a: a
        }

        const color: Color = new Color(c);
        checkColor(expected, color);
        checkP5Color(expected, color.color);
    });

    test('color built with (r,g,b) parameter', (): void => {
        const r: number = 212;
        const g: number = 28;
        const b: number = 132;
        const c: P5Lib.Color = p5.color(r, g, b);
        const expected: ColorComponents = {
            r: r, g: g, b: b, a: 255
        }

        const color: Color = new Color(c);
        checkColor(expected, color);
        checkP5Color(expected, color.color);
    });

    test('color built with (r,g,b,a) parameter', (): void => {
        const r: number = 212;
        const g: number = 28;
        const b: number = 132;
        const a: number = 50;
        const c: P5Lib.Color = p5.color(r, g, b, a);
        const expected: ColorComponents = {
            r: r, g: g, b: b, a: a
        }

        const color: Color = new Color(c);
        checkColor(expected, color);
        checkP5Color(expected, color.color);
    });

    test('color built with (h, s, l) parameter', (): void => {
        const h: number = 187;
        const s: number = 75;
        const l: number = 26;
        const c: P5Lib.Color = Color.getHSLColor(h, s, l);
        const expected: ColorComponents = {
            r: 16, g: 104, b: 116, a: 255
        }

        const color: Color = new Color(c);
        checkColor(expected, color);
        checkP5Color(expected, color.color);
    });

    test('color built with (h, s, l, a) parameter', (): void => {
        const h: number = 187;
        const s: number = 75;
        const l: number = 26;
        const a: number = 0.47;
        const c: P5Lib.Color = Color.getHSLColor(h, s, l, a);
        const expected: ColorComponents = {
            r: 16, g: 104, b: 116, a: Math.floor(255 * a)
        }

        const color: Color = new Color(c);
        checkColor(expected, color);
        checkP5Color(expected, color.color);
    });

    test('color set with (c) parameter', (): void => {
        let w: number = 153;
        const c: P5Lib.Color = p5.color(w);
        const expected: ColorComponents = {
            r: w, g: w, b: w, a: 255
        }

        const color: Color = new Color();
        color.color = c;
        checkColor(expected, color);
        checkP5Color(expected, color.color);
    });

    test('color set with (c,a) parameter', (): void => {
        let w: number = 153;
        let a: number = 83;
        const c: P5Lib.Color = p5.color(w, a);
        const expected: ColorComponents = {
            r: w, g: w, b: w, a: a
        }

        const color: Color = new Color();
        color.color = c;
        checkColor(expected, color);
        checkP5Color(expected, color.color);
    });

    test('color set with (r,g,b) color', (): void => {
        const r: number = 212;
        const g: number = 28;
        const b: number = 132;
        const c: P5Lib.Color = p5.color(r, g, b);
        const expected: ColorComponents = {
            r: r, g: g, b: b, a: 255
        }

        const color: Color = new Color();
        color.color = c;
        checkColor(expected, color);
        checkP5Color(expected, color.color);
    });

    test('color set with (r,g,b,a) color', (): void => {
        const r: number = 212;
        const g: number = 28;
        const b: number = 132;
        const c: P5Lib.Color = p5.color(r, g, b);
        const expected: ColorComponents = {
            r: r, g: g, b: b, a: 255
        }

        const color: Color = new Color();
        color.color = c;
        checkColor(expected, color);
        checkP5Color(expected, color.color);
    });

    test('color set with (h, s, l) parameter', (): void => {
        const h: number = 187;
        const s: number = 75;
        const l: number = 26;
        const c: P5Lib.Color = Color.getHSLColor(h, s, l);
        const expected: ColorComponents = {
            r: 16, g: 104, b: 116, a: 255
        }

        const color: Color = new Color();
        color.color = c;
        checkColor(expected, color);
        checkP5Color(expected, color.color);
    });

    test('color set with (h, s, l, a) parameter', (): void => {
        const h: number = 187;
        const s: number = 75;
        const l: number = 26;
        const a: number = 0.47;
        const c: P5Lib.Color = Color.getHSLColor(h, s, l, a);
        const expected: ColorComponents = {
            r: 16, g: 104, b: 116, a: Math.floor(255 * a)
        }

        const color: Color = new Color();
        color.color = c;
        checkColor(expected, color);
        checkP5Color(expected, color.color);
    });

    test('set red to value > 255', (): void => {
        const color: Color = new Color();
        expect(color.red).toBe(0);
        color.red = 500;
        expect(color.red).toBe(255);
    });

    test('set red to value < 0', (): void => {
        const color: Color = new Color();
        expect(color.red).toBe(0);
        color.red = -100;
        expect(color.red).toBe(0);
    });

    test('set red to valid value', (): void => {
        const color: Color = new Color();
        const value: number = 40;
        expect(color.red).toBe(0);
        color.red = value;
        expect(color.red).toBe(value);
    });

    test('set green to value > 255', (): void => {
        const color: Color = new Color();
        expect(color.green).toBe(0);
        color.green = 500;
        expect(color.green).toBe(255);
    });

    test('set green to value < 0', (): void => {
        const color: Color = new Color();
        expect(color.green).toBe(0);
        color.green = -100;
        expect(color.green).toBe(0);
    });

    test('set green to valid value', (): void => {
        const color: Color = new Color();
        const value: number = 40;
        expect(color.green).toBe(0);
        color.green = value;
        expect(color.green).toBe(value);
    });

    test('set blue to value > 255', (): void => {
        const color: Color = new Color();
        expect(color.blue).toBe(0);
        color.blue = 500;
        expect(color.blue).toBe(255);
    });

    test('set blue to value < 0', (): void => {
        const color: Color = new Color();
        expect(color.blue).toBe(0);
        color.blue = -100;
        expect(color.blue).toBe(0);
    });

    test('set blue to valid value', (): void => {
        const color: Color = new Color();
        const value: number = 40;
        expect(color.blue).toBe(0);
        color.blue = value;
        expect(color.blue).toBe(value);
    });

    test('set alpha to value > 255', (): void => {
        const color: Color = new Color();
        expect(color.alpha).toBe(255);
        color.alpha = 500;
        expect(color.alpha).toBe(255);
    });

    test('set alpha to value < 0', (): void => {
        const color: Color = new Color();
        expect(color.alpha).toBe(255);
        color.alpha = -100;
        expect(color.alpha).toBe(0);
    });

    test('set alpha to valid value', (): void => {
        const color: Color = new Color();
        const value: number = 40;
        expect(color.alpha).toBe(255);
        color.alpha = value;
        expect(color.alpha).toBe(value);
    });
});
