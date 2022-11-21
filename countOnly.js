const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    // make sure item exists in array
    if (itemsToCount[item]) {
      if (results[item]) {
        // if the item key already exists in the obj, increment by 1
        results[item] += 1;
      } else {
        // if not, create the key and set equal to 1
        results[item] = 1;
      }
    }
  }

  return results;
};

document.exports = countOnly;