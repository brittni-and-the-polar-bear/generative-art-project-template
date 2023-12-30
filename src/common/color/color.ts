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

import { P5Dependant, P5Lib } from "p5-lib";

type P5Color = P5Lib.Color;

class Color extends P5Dependant {
    private _red: number;
    private _green: number;
    private _blue: number;
    private _alpha: number;

    public constructor(p5: P5Lib, color?: P5Color) {
        super(p5);
        this._red = 0;
        this._green = 0;
        this._blue = 0;
        this._alpha = 255;

        if (color) {
            this.setColorValues(color);
        }
    }

    public get color(): P5Color {
        return this.p5.color(this.red, this.green, this.blue, this.alpha);
    }

    public set color(c: P5Color) {
        this.setColorValues(c);
    }

    public get red(): number {
        return this._red;
    }

    public set red(r: number) {
        this._red = Math.floor(this.p5.constrain(r, 0, 255));
    }

    public get green(): number {
        return this._green;
    }

    public set green(g: number) {
        this._green = Math.floor(this.p5.constrain(g, 0, 255));
    }

    public get blue(): number {
        return this._blue;
    }

    public set blue(b: number) {
        this._blue = Math.floor(this.p5.constrain(b, 0, 255));
    }

    public get alpha(): number {
        return this._alpha;
    }

    public set alpha(a: number) {
        this._alpha = Math.floor(this.p5.constrain(a, 0, 255));
    }

    private setColorValues(color: P5Color): void {
        this.red = this.p5.red(color);
        this.green = this.p5.green(color);
        this.blue = this.p5.blue(color);
        this.alpha = this.p5.alpha(color);
    }
}

export { Color };
export default Color;
