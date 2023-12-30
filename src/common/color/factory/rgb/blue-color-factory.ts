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
import { Range } from "range";

import RGBRangeFactory from "./rgb-range-factory";

class BlueColorFactory extends RGBRangeFactory {
    public constructor(p5: P5Lib) {
        const redRange: Range = new Range(0, 100);
        const greenRange: Range = new Range(0, 100);
        const blueRange: Range = new Range(100, 255);
        super(p5, 'blue color factory', redRange, greenRange, blueRange);
    }
}

export { BlueColorFactory };
export default BlueColorFactory;
