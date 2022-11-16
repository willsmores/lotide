const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😍😍😍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤢🤢🤢 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {

  const lowerCaseSentence = sentence.toLowerCase();
  const letterCount = {};

  for (let char of lowerCaseSentence) {
    // ignores spaces in string
    if (char !== ' ') {
      if (!letterCount[char]) {
        // if the char does not exist as an object key, add it and set to 1
        letterCount[char] = 1;
      } else {
        // if the char does exist as an object key, increment value by 1
        letterCount[char]++;
      }
    }
  }

  return letterCount;
};

// console.table(countLetters('lighthouse in the house'));
// console.table(countLetters('LHL'));

const result1 = countLetters('lighthouse in the house');
const result2 = countLetters('LHL');

assertEqual(result1["h"], 4);  // should PASS
assertEqual(result1["h"], 1);  // should FAIL
assertEqual(result1["e"], 4);  // should FAIL
assertEqual(result2["l"], 2);  // should PASS
assertEqual(result2["h"], 1);  // should PASS