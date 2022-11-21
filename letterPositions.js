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

document.exports = letterPositions;


