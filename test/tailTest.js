const assertEqual = require('../assertEqual');
const tail = require('../tail');

// Test cases
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

const words = ['Yo Yo', 'Lighthouse', 'Labs'];
tail(words);
assertEqual(words.length, 3); // Should PASS (original array has not been altered)


const result2 = tail([1, 2, 3, 4]);
assertEqual(result2.length, 3); // ensure we get back two elements
assertEqual(result2[0], 2); // ensure first element is "Lighthouse"
assertEqual(result2[1], 3); // ensure second element is "Labs"
assertEqual(result2[2], 4); // ensure second element is "Labs"

const result3 = tail([4, 5, 6, 7]);
assertEqual(result3.length, 4); // should FAIL
assertEqual(result3[0], 5); // should PASS
assertEqual(result3[1], 6); // should PASS
assertEqual(result3[2], 8); // should FAIL