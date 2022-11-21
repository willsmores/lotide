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

document.exports = findKeyByValue;

