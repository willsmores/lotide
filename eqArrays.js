const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😍😍😍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤢🤢🤢 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2]), true); // => should FAIL
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), false); // => should FAIL
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => should PASS
assertEqual(eqArrays(['1', '2', '3'], ['1', '2', '3']), true); // => should PASS
assertEqual(eqArrays(['1', '2', '3'], ['1', '2', 3]), false); // => should PASS
assertEqual(eqArrays(['1', '2', '3'], ['1', '2', 3]), true); // => should FAIL