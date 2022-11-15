const eqArrays = function(arr1, arr2) {

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      // Check the value at the same index of each array
      if (arr1[i] !== arr2[i]) {
        // If they don't match, the arrays are not equal
        return false;
      }
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
assertArraysEqual(['1','2','3'],['1','2','3']); // Should PASS