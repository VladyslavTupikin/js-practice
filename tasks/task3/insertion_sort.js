#!/usr/bin/env node

"use strict";

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let j = i;
    let key = array[i];

    while (j > 0 && array[j - 1] > key) {
      [array[j], array[j - 1]] = [array[j - 1], array[j]];
      j--;
    }
  }
}

async function main() {
  const arrInt = [9, -1, 4, -1, 8, 3, -9, 4, 3, 7, -5, 9, 8, 1, 2, 3];

  console.log(`Unsorted Array: \n${arrInt}`);

  insertionSort(arrInt);

  console.log("");
  console.log(`Insert Sorted Array: \n${arrInt}`);
}

if (require.main === module) main();
