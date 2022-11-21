const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {

  it("returns [] for [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  
  it("returns [3] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });

  it("returns [6, 8] for [2, 4, 6, 8, 10, 12]", () => {
    assert.deepEqual(middle([2, 4, 6, 8, 10, 12]), [6, 8]);
  });

});