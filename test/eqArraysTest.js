const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

// Test cases
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2]), true); // => should FAIL
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), false); // => should FAIL
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => should PASS
assertEqual(eqArrays(['1', '2', '3'], ['1', '2', '3']), true); // => should PASS
assertEqual(eqArrays(['1', '2', '3'], ['1', '2', 3]), false); // => should PASS
assertEqual(eqArrays(['1', '2', '3'], ['1', '2', 3]), true); // => should FAIL