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

import {Color} from "color";
import {P5Lib, SketchContext} from "p5-lib";
import {randomInt} from "random";
import {ColorFactory} from "color/factory";

import CollectionColor from "./color/collection-color";
import collectionColor from "./color/collection-color";

const p5: P5Lib = SketchContext.p5;

abstract class CollectionColorFactory implements ColorFactory {
    private _currentIndex: number;

    protected constructor(private readonly _colors: CollectionColor[], private readonly _isOrdered: boolean) {
        this._currentIndex = 0;
    }

    public get colorCount(): number {
        return this.colors.length;
    }

    public getNextColor(): Color {
        const collectionColor: CollectionColor = this.colors[this.currentIndex];

        if (this.isOrdered) {
            this.currentIndex = (this.currentIndex + 1) % this.colorCount;
        } else {
            this.currentIndex = randomInt(0, this.colorCount);
        }

        return this.buildColor(collectionColor);
    }

    public buildColor(collectionColor: collectionColor): Color {
        // TODO - test Color constructor and setter with colors made with hexStrings
        const color: P5Lib.Color = p5.color(collectionColor.hexString);
        return new Color(color);
    }

    public abstract get name(): string;

    private get colors(): CollectionColor[] {
        return this._colors;
    }

    private get isOrdered(): boolean {
        return this._isOrdered;
    }

    private get currentIndex(): number {
        return this._currentIndex;
    }

    private set currentIndex(index: number) {
        this._currentIndex = p5.constrain(index, 0, this.colorCount - 1);
    }
}

export { CollectionColorFactory };
export default CollectionColorFactory;
