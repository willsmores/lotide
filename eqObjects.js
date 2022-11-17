const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😍😍😍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤢🤢🤢 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
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
    if (object1[key] === object2[key]) {
      return false;
    }

  }
  // All other conditions will return true
  return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // should FAIL

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // should PASS

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // should FAIL

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // should PASS