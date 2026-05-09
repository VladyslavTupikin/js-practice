#!/usr/bin/env node

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

        let swapped = true;
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
