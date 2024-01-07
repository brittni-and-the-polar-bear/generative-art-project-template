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

import ColorGroup from "./color-group";
import {Color} from "color";
// import {ColorFactory} from "color/factory";
// import {randomInt} from "random";

class FiniteColorGroup implements ColorGroup {
    // private _factory: ColorFactory;
    // private _colorCount: number;
    // private static readonly _minColorCount: 2;
    // private static readonly _maxColorCount: 15;

    constructor() {
        // this._colorCount = randomInt(FiniteColorGroup.minColorCount, FiniteColorGroup.maxColorCount);
    }

    getNextColor(): Color {
        return new Color();
    }

    // private static get minColorCount(): number {
    //     return FiniteColorGroup._minColorCount;
    // }
    //
    // private static get maxColorCount(): number {
    //     return FiniteColorGroup._maxColorCount;
    // }
}

export { FiniteColorGroup };
export default FiniteColorGroup;
