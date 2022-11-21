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

module.exports = countLetters;