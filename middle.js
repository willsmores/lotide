const eqArrays = function(arr1, arr2) {

  for (let i = 0; i < arr1.length; i++) {
    // Check the value at the same index of each array
    if (arr1[i] !== arr2[i]) {
      // If they don't match, the arrays are not equal
      return false;
    }
  }
  // If the loop completes, the arrays are equal
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (!eqArrays(arr1, arr2)) {
    console.log(`🤢🤢🤢 Assertion Failed: ${arr1} !== ${arr2}`);
  } else {
    console.log(`😍😍😍 Assertion Passed: ${arr1} === ${arr2}`);
  }
};

const middle = function(array) {

  const theMiddle = [];
  const middleIndex = Math.round(array.length / 2) - 1;

  // the array contains fewer than 3 numbers
  if (array.length <= 2) {
    return theMiddle;
  }

  // the array is an odd length
  if (array.length % 2 !== 0) {
    theMiddle.push(array[middleIndex]);
  }

  // the array is an even length
  if (array.length % 2 === 0) {
    theMiddle.push(array[middleIndex]);
    theMiddle.push(array[middleIndex + 1]);
  }

  return theMiddle;
};

// Test cases
assertArraysEqual(middle([1, 2]), []); // should PASS
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // should PASS
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // should PASS
assertArraysEqual(middle([1, 2, 3]), []); // should FAIL
assertArraysEqual(middle([1, 2, 3, 4, 5]), [4]); // should FAIL
assertArraysEqual(middle([2, 4, 6, 8, 10, 12]), [6, 8]); // should PASS