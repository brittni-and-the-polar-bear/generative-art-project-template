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

import P5 from 'p5';

import '../assets/styles/sketch.css';

function sketch(p: P5): void {
    p.setup = (): void => {
        p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
    }

    p.draw = () : void => {
        p.background(0, 0, 255);
    }

    p.windowResized = () : void => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
    }
}

new P5(sketch);
