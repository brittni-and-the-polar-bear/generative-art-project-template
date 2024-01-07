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

import {allColors} from 'all-colors';

class ColorSearch {
    private readonly _colors: Set<string> = new Set<string>();
    private static _colorSearch: ColorSearch;

    public static hasColor(hexString: string): boolean {
        let found: boolean;

        if (!ColorSearch._colorSearch) {
            ColorSearch._colorSearch = new ColorSearch();
        }

        if (hexString.length > 10) {
            found = false;
        } else {
            if (!hexString.startsWith('#')) {
                hexString = '#' + hexString;
            }

            hexString = hexString.toUpperCase();
            found = ColorSearch.colors.has(hexString) ?? false;
        }


        return found;
    }

    private constructor() {
        for (let c of allColors) {
            this.colors.add(c.hexString);
        }
    }

    private static get colorSearch(): ColorSearch {
        return ColorSearch._colorSearch;
    }

    private get colors(): Set<string> {
        return this._colors;
    }

    private static get colors(): Set<string> {
        return ColorSearch.colorSearch.colors;
    }
}

export {ColorSearch};
export default ColorSearch;
