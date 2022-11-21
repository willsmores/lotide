const assertEqual = require('../assertEqual');

// Test code
assertEqual('Lighthouse Labs', 'Bootcamp'); // Should FAIL
assertEqual('Lighthouse Labs', 'Lighthouse Labs'); // Should PASS
assertEqual(1, 1); // Should PASS
assertEqual(1, 1.5); // Should FAIL