#!/usr/bin/env node

/*
Test script for JS selection sort algorithm.
Copyright (C) 2026  Vladyslav Tupikin

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

function findMinArr(array, start = 0) {
  let minIdx = start;
  let minVal = array[start];

  for (let i = start; i < array.length; i++) {
    if (minVal > array[i]) {
      minIdx = i;
      minVal = array[i];
    }
  }

  return [minIdx, minVal];
}

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    const [minIdx, minVal] = findMinArr(array, i);

    if (i !== minIdx) {
      [array[i], array[minIdx]] = [array[minIdx], array[i]];
    }
  }
}

async function main() {
  const arrInt = [9, -1, 4, -1, 8, 3, -9, 4, 3, 7, -5, 9, 8, 1, 2, 3];

  console.log(`Unsorted Array: \n${arrInt}`);

  selectionSort(arrInt);

  console.log("");
  console.log(`Insert Sorted Array: \n${arrInt}`);
}

if (require.main === module) main();
