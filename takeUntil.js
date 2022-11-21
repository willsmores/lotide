const takeUntil = function(array, callback) {
  // Blank array to hold the array slice
  const newSlice = [];

  // Loop through the array
  for (let value of array) {
    // console.log(callback(value));
    if (!callback(value)) {
      newSlice.push(value);
    } else {
      return newSlice;
    }
  }
};

module.exports = takeUntil;