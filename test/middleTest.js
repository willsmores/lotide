const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

// Test cases
assertArraysEqual(middle([1, 2]), []); // should PASS
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // should PASS
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // should PASS
assertArraysEqual(middle([1, 2, 3]), []); // should FAIL
assertArraysEqual(middle([1, 2, 3, 4, 5]), [4]); // should FAIL
assertArraysEqual(middle([2, 4, 6, 8, 10, 12]), [6, 8]); // should PASS