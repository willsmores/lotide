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

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }

  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);

// Test cases
assertArraysEqual(map(["control", "control", "control", "control", "control"], word => word[0]), ['c','c','c','c','c']); // Should PASS
assertArraysEqual(map(["control", "control", "control", "control", "control"], word => word[0]), ['g','c','t','m','t']); // Should FAIL
assertArraysEqual(map(["ground", "control", "to", "major", "tom"], word => word[1]), ['r','o','o','a','o']); // Should PASS
assertArraysEqual(map(["ground", "control", "major", "tom"], word => word[1]), ['r','o','o','a','o']); // Should FAIL