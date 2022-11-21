const assertArraysEqual = require('../assertArraysEqual');

// Test cases
assertArraysEqual([1,2,3],[1,2,'3']); // Should FAIL
assertArraysEqual([1,2,3],[1,2,3]); // Should PASS
assertArraysEqual([1,2,3],[3,2,1]); // Should FAIL
assertArraysEqual([1,2,3,4,5],[1,2,3]); // Should FAIL
assertArraysEqual([1,2,3],[1,2,3,4,5]); // Should FAIL
assertArraysEqual(['1','2','3'],['1','2','3']); // Should PASS