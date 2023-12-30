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

import { sketch } from "sketch";
import { Color } from "common";

sketch.draw = (): void => {
    sketch.background(0, 255, 255);
    sketch.rectMode(sketch.CENTER);

    const colorA: Color = new Color(sketch, sketch.color(255));
    sketch.fill(colorA.color);
    sketch.rect(0, 0, 250, 250);

    const colorB: Color = new Color(sketch);
    sketch.fill(colorB.color);
    sketch.rect(0, 0, 75, 75);
}
