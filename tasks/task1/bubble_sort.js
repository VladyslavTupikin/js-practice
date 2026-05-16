#!/usr/bin/env node

/*
bubble_sort.js: Test script for JS bubble sort algorithm.
Copyright (C) 2026  Vladyslav Tupikin
Contact: vladtupikin7@gmail.com

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

"use strict";

function bubbleSort(array) {
  let i = 0;
  let j = 0;

  const arrayLength = array.length;

  for (i = 0; i < arrayLength; i++) {
    let swapped = false;

    for (j = 0; j < arrayLength - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        const tmp = array[j];

        array[j] = array[j + 1];
        array[j + 1] = tmp;

        swapped = true;
      }
    }

    if (swapped === true) {
      break;
    }
  }
}

async function main() {
  const arrInt = [9, -1, 4, -1, 8, 3, -9, 4, 3, 7, -5, 9, 8, 1, 2, 3];

  console.log(`Unsorted Array: \n${arrInt}`);

  bubbleSort(arrInt);

  console.log("");
  console.log(`bubble Sorted Array: \n${arrInt}`);
}

if (require.main === module) main();
