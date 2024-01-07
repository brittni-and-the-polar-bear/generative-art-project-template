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
import {Color, P5Lib, randomFloat, randomInt, SketchContext} from 'common';

let c1: Color;
let c2: Color;
let c3: Color;

let p1: P5Lib.Vector;
let p2: P5Lib.Vector;
let p3: P5Lib.Vector;

let p1Rate: P5Lib.Vector;
let p2Rate: P5Lib.Vector;
let p3Rate: P5Lib.Vector;

let points: P5Lib.Vector[] = [];
let pointRates: P5Lib.Vector[] = [];

sketch.setup = (): void => {
    sketch.createCanvas(sketch.windowWidth, sketch.windowHeight);
    SketchContext.initialize(sketch);

    c1 = new Color(sketch.color(randomInt(0, 255), randomInt(0, 255), randomInt(0, 255)));
    c2 = new Color(sketch.color(randomInt(0, 255), randomInt(0, 255), randomInt(0, 255)));
    c3 = new Color(sketch.color(randomInt(0, 255), randomInt(0, 255), randomInt(0, 255)));

    p1 = new P5Lib.Vector(randomFloat(0, sketch.width), randomFloat(0, sketch.height));
    p2 = new P5Lib.Vector(randomFloat(0, sketch.width), randomFloat(0, sketch.height));
    p3 = new P5Lib.Vector(randomFloat(0, sketch.width), randomFloat(0, sketch.height));

    p1Rate = new P5Lib.Vector(randomFloat(-3, 3), randomFloat(-3, 3));
    p2Rate = new P5Lib.Vector(randomFloat(-3, 3), randomFloat(-3, 3));
    p3Rate = new P5Lib.Vector(randomFloat(-3, 3), randomFloat(-3, 3));

    for (let i: number = 0; i < 5_000; i++) {
        points.push(new P5Lib.Vector(randomFloat(0, sketch.width), randomFloat(0, sketch.height)));
        pointRates.push(new P5Lib.Vector(randomFloat(-3, 3), randomFloat(-3, 3)));
    }
}

sketch.draw = (): void => {
    sketch.fill(0, 100);
    sketch.rect(-10, -10, sketch.width + 10, sketch.height + 10);

    const pc1: PointAndColor = {
        point: p1,
        color: c1
    }

    const pc2: PointAndColor = {
        point: p2,
        color: c2
    }

    const pc3: PointAndColor = {
        point: p3,
        color: c3
    }

    points.forEach((p: P5Lib.Vector, index: number): void => {
        let c: Color = calculateColor(new P5Lib.Vector(p.x, p.y), pc1, pc2, pc3);
        sketch.fill(c.color);
        sketch.noStroke();
        sketch.ellipse(p.x, p.y, 3, 3);
        let rate: P5Lib.Vector = pointRates[index];
        moveVector(p, rate);
    });

    moveVector(p1, p1Rate);
    moveVector(p2, p2Rate);
    moveVector(p3, p3Rate);
    console.log(sketch.frameRate());
}

type PointAndColor = {
    point: P5Lib.Vector,
    color: Color
};

function calculateColor(point: P5Lib.Vector,
                        p1: PointAndColor,
                        p2: PointAndColor,
                        p3: PointAndColor): Color {
    const dist1: number = sketch.dist(point.x, point.y, p1.point.x, p1.point.y);
    const dist2: number = sketch.dist(point.x, point.y, p2.point.x, p2.point.y);
    const dist3: number = sketch.dist(point.x, point.y, p3.point.x, p3.point.y);
    const maxDist: number = sketch.max(sketch.max(dist1, dist2), dist3);

    const r: number = (p1.color.red * ((maxDist - dist1) / maxDist))
        + (p2.color.red * ((maxDist - dist2) / maxDist))
        + (p3.color.red * ((maxDist - dist3) / maxDist));
    const g: number = (p1.color.green * ((maxDist - dist1) / maxDist))
        + (p2.color.green * ((maxDist - dist2) / maxDist))
        + (p3.color.green * ((maxDist - dist3) / maxDist));
    const b: number = (p1.color.blue * ((maxDist - dist1) / maxDist))
        + (p2.color.blue * ((maxDist - dist2) / maxDist))
        + (p3.color.blue * ((maxDist - dist3) / maxDist));

    return new Color(sketch.color(r, g, b));
}

function moveVector(v: P5Lib.Vector, vRate: P5Lib.Vector) {
    let x: number = v.x;
    let y: number = v.y;
    x += vRate.x
    y += vRate.y;

    if (x > sketch.width) {
        x = 0;
    } else if (x < 0) {
        x = sketch.width;
    }

    if (y > sketch.height) {
        y = 0;
    } else if (y < 0) {
        y = sketch.height;
    }

    v.set(x, y);
}
