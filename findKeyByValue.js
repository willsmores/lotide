const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😍😍😍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤢🤢🤢 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(obj, val) {
  // Loop through object keys
  for (let key in obj) {
    // if the value of the current key is the same as the val string
    if (obj[key] === val) {
      // return the current key
      return key;
    }
  }
};

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

// console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"); // should PASS
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined); // should PASS
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "comedy"); // should FAIL
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Simpsons"), "comedy"); // should FAIL
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sciFi"); // should PASS