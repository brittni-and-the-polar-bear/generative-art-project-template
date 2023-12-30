#
# Copyright (C) 2023 Brittni Watkins.
#
# This file is a part of brittni and the polar bear's Generative Art Project Template,
# which is released under the GNU Affero General Public License, Version 3.0.
# You may not use this file except in compliance with the license.
#
# You should have received a copy of the GNU Affero General Public License
# along with this program. See LICENSE or go to
# https://www.gnu.org/licenses/agpl-3.0.en.html for full license details.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
# See the GNU Affero General Public License for more details.
#

while getopts d: flag
do
  case "${flag}" in
    d) dev=${OPTARG};;
    *) dev="false";;
  esac
done

echo 'Starting the /examples/color/color-grid.ts example.';

echo '(1/2): Removing old output';

rm -r ./dist ./zip;

if [ "$dev" == "true" ]
then
  echo '(2/2): Building project and starting development server';
  rollup --config ./examples-config/color/color-grid.rollup.config.mjs --watch;
else
  echo '(2/2): Building project';
  rollup --config ./examples-config/color/color-grid.rollup.config.mjs;
fi
