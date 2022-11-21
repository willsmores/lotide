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
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  // All other conditions will return true
  return true;
};

document.exports = eqObjects;