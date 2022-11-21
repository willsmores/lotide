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

module.exports = findKey;