/*
 * Copyright (C) 2024 Brittni Watkins.
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

import {sketch} from 'sketch';
import {P5Lib, randomFloat, randomInt, SketchContext} from 'common';

type ColorLine = {
    p1: P5Lib.Vector,
    p2: P5Lib.Vector,
    h1: number,
    h2: number,
    numSections: number
};

const lines: ColorLine[] = [];

sketch.setup = (): void => {
    sketch.createCanvas(sketch.windowWidth, sketch.windowHeight);
    SketchContext.initialize(sketch);

    const count: number = randomInt(20, 500);
    const spacing: number = sketch.width / count;
    const start: number = spacing / 2.0;

    for (let i: number = 0; i < count; i++) {
        const x1: number = randomFloat(0, sketch.width);
        const y1: number = (i * spacing) + start + randomFloat(-spacing, spacing);
        const x2: number = randomFloat(0, sketch.width);
        const y2: number = (i * spacing) + start + randomFloat(-spacing, spacing);
        const h1: number = randomInt(0, 360);
        const h2: number = randomInt(0, 360);
        const s: number = randomInt(5, 20);
        lines.push({
            p1: (new P5Lib.Vector(x1, y1)),
            p2: (new P5Lib.Vector(x2, y2)),
            h1: h1,
            h2: h2,
            numSections: s
        });
    }
}

sketch.draw = (): void => {
    sketch.background(0);

    for (let line of lines) {
        displayLine(line);
    }
}

function displayLine(line: ColorLine): void {
    let start: P5Lib.Vector = line.p1.copy();
    let end: P5Lib.Vector;

    for (let i: number = 1; i <= line.numSections; i++) {
        let colorPercentage: number = (i - 1) * (1.0 / line.numSections);
        let percentage: number = i * (1.0 / line.numSections);
        end = P5Lib.Vector.lerp(line.p1, line.p2, percentage);
        let currentHue: number = Math.floor(sketch.lerp(line.h1, line.h2, colorPercentage));
        sketch.stroke(sketch.color(`hsl(${currentHue}, 100%, 50%)`));
        sketch.line(start.x, start.y, end.x, end.y);
        start.set(end);
    }
}
