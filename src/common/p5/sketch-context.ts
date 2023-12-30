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

import P5Lib from "p5";

const noP5: P5Lib = new P5Lib((p: P5Lib): void => {
    p.setup = (): void => {
        p.createCanvas(0, 0);
    }
});

class SketchContext {
    private static _p5?: P5Lib;

    public static initialize(p5: P5Lib): void {
        if (!this._p5) {
            this._p5 = p5;
        }
    }

    public static get p5(): P5Lib {
        return this._p5 ?? noP5;
    }
}

export { SketchContext };
export default SketchContext;
