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

import {sketch} from "sketch";
import {Color, getSingleDimensionIndex} from "common";

sketch.setup = (): void => {
    sketch.createCanvas(500, 500);
}

sketch.draw = (): void => {
    const complete: number = 6;
    const rows: number = 10;
    const cols: number = 10;
    const black: Color = new Color(sketch.color('#000'));
    const green: Color = new Color(sketch.color('#228B22'));
    const white: Color = new Color(sketch.color('#F0F8F8'));
    const boxWidth: number = sketch.width / cols;
    const boxHeight: number = sketch.height / rows;
    sketch.background(255);
    sketch.stroke(black.color);
    sketch.strokeWeight(3);

    for (let row: number = 0; row < rows; row++) {
        const y: number = boxHeight * row;

        for (let col: number = 0; col < cols; col++) {
            const x: number = boxWidth * col;
            const index: number | undefined = getSingleDimensionIndex(row, col, rows, cols);

            if (typeof index === 'number' && index < complete) {
                sketch.fill(green.color);
            } else {
                sketch.fill(white.color);
            }

            sketch.rect(x, y, boxWidth, boxHeight);
        }
    }
}

sketch.resizeCanvas = (): void => {
    return;
}
