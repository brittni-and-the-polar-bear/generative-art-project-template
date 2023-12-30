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

import { P5Lib } from "p5-lib";
import { SketchContext } from "p5-lib";

type P5Color = P5Lib.Color;

const p5: P5Lib = SketchContext.p5;

class Color {
    private _red: number; // 0-255
    private _green: number; // 0-255
    private _blue: number; // 0-255
    private _alpha: number; // 0-255

    public constructor(color?: P5Color) {
        this._red = 0;
        this._green = 0;
        this._blue = 0;
        this._alpha = 255;

        if (color) {
            this.setColorValues(color);
        }
    }

    /**
     * @param h some number between 0 and 360.
     * @param s some number between 0 and 100.
     * @param l some number between 0 and 100.
     * @param a (optional) some number between 0 and 1.
     */
    public static getHSLColor(h: number, s: number, l: number, a?: number): P5Color {
        let color: P5Color;
        h = Math.floor(p5.constrain(h, 0, 360));
        s = Math.floor(p5.constrain(s, 0, 100));
        l = Math.floor(p5.constrain(l, 0, 100));

        if (a) {
            a = p5.constrain(a, 0, 1);
            color = p5.color(`hsla(${h}, ${s}%, ${l}%, ${a})`);
        } else {
            color = p5.color(`hsl(${h}, ${s}%, ${l}%)`);
        }

        return color;
    }

    /**
     * @param h some number between 0 and 360.
     * @param s some number between 0 and 100.
     * @param l some number between 0 and 100.
     * @param a some number between 0 and 1.
     */
    public static getHSLAColor(h: number, s: number, l: number, a: number): P5Color {
        return Color.getHSLColor(h, s, l, a);
    }

    public get color(): P5Color {
        p5.colorMode(p5.RGB);
        return p5.color(this.red, this.green, this.blue, this.alpha);
    }

    public set color(c: P5Color) {
        this.setColorValues(c);
    }

    public get red(): number {
        return this._red;
    }

    public set red(r: number) {
        this._red = Math.floor(p5.constrain(r, 0, 255));
    }

    public get green(): number {
        return this._green;
    }

    public set green(g: number) {
        this._green = Math.floor(p5.constrain(g, 0, 255));
    }

    public get blue(): number {
        return this._blue;
    }

    public set blue(b: number) {
        this._blue = Math.floor(p5.constrain(b, 0, 255));
    }

    public get alpha(): number {
        return this._alpha;
    }

    public set alpha(a: number) {
        this._alpha = Math.floor(p5.constrain(a, 0, 255));
    }

    private setColorValues(color: P5Color): void {
        this.red = p5.red(color);
        this.green = p5.green(color);
        this.blue = p5.blue(color);
        this.alpha = p5.alpha(color);
    }
}

export { Color };
export default Color;
