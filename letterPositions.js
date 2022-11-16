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

const letterPositions = function(sentence) {
  const results = {};
  
  for (const char in sentence) {
    // console.log(sentence[char]);
    // console.log(char);
    if (sentence[char] !== ' ') {
      if (!results[sentence[char]]) {
        // if the char does not exist as an object key, add it and add the index to an array
        results[sentence[char]] = [Number(char)];
      } else {
        // if the char does exist as an object key, push the index to the value array
        results[sentence[char]].push(Number(char));
      }
    }
  }
  // console.log(results);
  return results;
};

// Test cases
const result1 = letterPositions('hello');
assertArraysEqual(result1["h"], [3]);  // should FAIL
assertArraysEqual(result1["h"], [0]);  // should PASS
assertArraysEqual(result1["l"], [2, 3]);  // should PASS
const result2 = letterPositions('lighthouse in the house');
assertArraysEqual(result2["h"], [3, 5, 15, 18]);  // should PASS
assertArraysEqual(result2["s"], [1, 11]);  // should FAIL
assertArraysEqual(result2["l"], [0]);  // should PASS


