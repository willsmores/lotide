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

const eqObjects = function(object1, object2) {

  // If the object lengths don't match... false!
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  // Loop through keys in object1
  for (const key in object1) {
    // If both keys are arrays, pass them to the eqArrays function
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      // If they don't match... false!
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    }
    // If the value for this key in object1 does not match the same key in object2... false!
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  // All other conditions will return true
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  // console.log(`Example label: ${inspect(actual)}`);

  if (!eqObjects(actual, expected)) {
    console.log(`🤢🤢🤢 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  } else {
    console.log(`😍😍😍 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  }
};

// Test cases
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const cd = { c: "2", d: "1" };
const cde = { c: "2", d: "1", e: ["1", "2"] };

assertObjectsEqual(ab, ab); // should PASS
assertObjectsEqual(ab, ba); // should PASS
assertObjectsEqual(ab, cd); // should FAIL
assertObjectsEqual(cd, cde); // should FAIL