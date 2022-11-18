const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😍😍😍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤢🤢🤢 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = (obj, callback) => {
  // Loop through the object
  for (let item in obj) {
    // Once the callback returns true...
    if (callback(obj[item])) {
      // Return the object key
      return item;
    }
  }
  // If the callback conditions are not met, return undefined
  return undefined;
};

// Test cases
const data1 = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

assertEqual(findKey(data1, x => x.stars === 2), 'noma'); // should PASS
assertEqual(findKey(data1, x => x.stars === 3), 'Akaleri'); // should PASS
assertEqual(findKey(data1, x => x.stars === 1), 'Akaleri'); // should FAIL
assertEqual(findKey(data1, x => x.stars > 2), 'Akaleri'); // should PASS
assertEqual(findKey(data1, x => x.stars === 5), undefined); // should PASS
assertEqual(findKey(data1, x => x.stars === 1), 'Nikki'); // should FAIL