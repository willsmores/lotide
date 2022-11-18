const eqArrays = function(arr1, arr2) {

  // Return false if the arrays are different lengths
  if (arr1.length !== arr2.length) {
    return false;
  }

  // Return true if both arrays are empty
  if (arr1.length === 0 && arr2.length === 0) {
    return true;
  }

  // Return false if either array is empty
  if (arr1.length === 0 || arr2.length === 0) {
    return false;
  }
  
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

const takeUntil = function(array, callback) {
  // Blank array to hold the array slice
  const newSlice = [];

  // Loop through the array
  for (let value of array) {
    // console.log(callback(value));
    if (!callback(value)) {
      newSlice.push(value);
    } else {
      return newSlice;
    }
  }
};

// Test cases
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
assertArraysEqual(takeUntil(data1, x => x < 0), [ 1, 2, 5, 7, 2 ]); // should PASS
assertArraysEqual(takeUntil(data1, x => x > 0), [ 1, 2, 5, 7, 2 ]); // should FAIL
assertArraysEqual(takeUntil(data1, x => x < 0), [ 5, 7, 2, -1, 2, 4 ]); // should FAIL

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
assertArraysEqual(takeUntil(data2, x => x === ','), ["I've", "been", "to", "Hollywood"]); // should PASS
assertArraysEqual(takeUntil(data2, x => x === ','), ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"]); // should FAIL
assertArraysEqual(takeUntil(data2, x => x === 'Hollywood'), ["I've", "been", "to"]); // should PASS