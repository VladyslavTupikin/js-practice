#!/usr/bin/env node

/*
Test script for insertion and merge sort algorithms.
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

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let key = array[i];
    let j = i - 1;

    while (j >= 0 && key < array[j]) {
      array[j + 1] = array[j];
      j--;
    }

    array[j + 1] = key;
  }
}

function mergeSort(array) {
  if (array.length <= 1) {
    return;
  }

  const splitPoint = Math.floor(array.length / 2);

  let arrayA = array.slice(0, splitPoint);
  let arrayB = array.slice(splitPoint);

  mergeSort(arrayA);
  mergeSort(arrayB);

  let i = 0;
  let j = 0;
  let k = 0;

  while (i < arrayA.length && j < arrayB.length) {
    if (arrayA[i] <= arrayB[j]) {
      array[k] = arrayA[i];
      i++;
    } else {
      array[k] = arrayB[j];
      j++;
    }
    k++;
  }

  while (i < arrayA.length) {
    array[k++] = arrayA[i++];
  }

  while (j < arrayB.length) {
    array[k++] = arrayB[j++];
  }
}

async function main() {
  const arrInt = [9, -1, 4, -1, 8, 3, -9, 4, 3, 7, -5, 9, 8, 1, 2, 3];

  console.log(`Unsorted Array: \n${arrInt}`);

  insertionSort(arrInt);
  console.log("");
  console.log(`Insertion Sorted Array: \n${arrInt}\n`);

  const arrInt2 = [9, -1, 4, -1, 8, 3, -9, 4, 3, 7, -5, 9, 8, 1, 2, 3];

  console.log(`Unsorted Array: \n${arrInt2}`);
  mergeSort(arrInt);

  console.log("");
  console.log(`Merge Sorted Array: \n${arrInt}`);
}

if (require.main === module) main();
