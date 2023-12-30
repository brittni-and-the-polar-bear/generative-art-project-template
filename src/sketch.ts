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

import PLib from 'p5';

import Color from "./common/color/color";

import '../assets/styles/sketch.css';

function sketch(p5: PLib): void {
    p5.setup = (): void => {
        p5.createCanvas(p5.windowWidth, p5.windowHeight, p5.WEBGL);
    }

    p5.draw = () : void => {
        p5.background(0, 0, 255);
        p5.rectMode(p5.CENTER);

        const colorA: Color = new Color(p5, p5.color(255, 0, 255));
        p5.fill(colorA.color);
        p5.rect(0, 0, 250, 250);

        const colorB: Color = new Color(p5);
        p5.fill(colorB.color);
        p5.rect(0, 0, 75, 75);
    }

    p5.windowResized = () : void => {
        p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
    }
}

new PLib(sketch);
