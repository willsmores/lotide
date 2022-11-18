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

assertArraysEqual([1,2,3],[1,2,'3']); // Should FAIL
assertArraysEqual([1,2,3],[1,2,3]); // Should PASS
assertArraysEqual([1,2,3],[3,2,1]); // Should FAIL
assertArraysEqual([1,2,3,4,5],[1,2,3]); // Should FAIL
assertArraysEqual([1,2,3],[1,2,3,4,5]); // Should FAIL
assertArraysEqual(['1','2','3'],['1','2','3']); // Should PASS