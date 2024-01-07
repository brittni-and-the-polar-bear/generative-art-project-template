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
//
// import { P5Dependant, P5Lib } from "p5-lib";
// import { Color } from "color";
// import { Range } from "range";
// import { randomInt } from "random";
//
// import RandomColorFactory from "../random-color-factory";
//
// abstract class RGBRangeFactory extends P5Dependant implements RandomColorFactory  {
//
//     protected constructor(p5: P5Lib, _name: string);
//     protected constructor(p5: P5Lib,
//                           _name: string,
//                           _redRange: Range,
//                           _greenRange: Range,
//                           _blueRange: Range);
//     protected constructor(p5: P5Lib,
//                           private readonly _name: string,
//                           private readonly _redRange?: Range,
//                           private readonly _greenRange?: Range,
//                           private readonly _blueRange?: Range) {
//         super(p5);
//     }
//
//     public get name(): string {
//         return this._name;
//     }
//
//     public getRandomColor(): Color {
//         this.p5.colorMode(this.p5.RGB, 255);
//         let color: Color = new Color();
//
//         if (this.redRange && this.greenRange && this.blueRange) {
//             const r: number = randomInt(this.redRange.low, this.redRange.high);
//             const g: number = randomInt(this.greenRange.low, this.greenRange.high);
//             const b: number = randomInt(this.blueRange.low, this.blueRange.high);
//             color = new Color(this.p5.color(r, g, b));
//         }
//
//         return color;
//     }
//
//     private get redRange(): Range | undefined {
//         return this._redRange;
//     }
//
//     private get greenRange(): Range | undefined {
//         return this._greenRange;
//     }
//
//     private get blueRange(): Range | undefined {
//         return this._blueRange;
//     }
// }

// class RGBRangeFactory {
// }
//
// export { RGBRangeFactory };
// export default RGBRangeFactory;
