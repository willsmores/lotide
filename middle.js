const middle = function(array) {

  const theMiddle = [];
  const middleIndex = Math.round(array.length / 2) - 1;

  // the array contains fewer than 3 numbers
  if (array.length <= 2) {
    return theMiddle;
  }

  // the array is an odd length
  if (array.length % 2 !== 0) {
    theMiddle.push(array[middleIndex]);
  }

  // the array is an even length
  if (array.length % 2 === 0) {
    theMiddle.push(array[middleIndex]);
    theMiddle.push(array[middleIndex + 1]);
  }

  return theMiddle;
};

module.exports = middle;