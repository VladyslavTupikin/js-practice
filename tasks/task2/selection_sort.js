#!/usr/bin/env node

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
