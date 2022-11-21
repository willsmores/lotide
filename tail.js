const tail = function(arr) {
  if (arr.length === 0 || arr.length === 1) {
    return [];
  }
  
  if (arr) {
    return arr.slice(1);
  } else {
    return undefined;
  }
};

module.exports = tail;