function pow(x, n) {
  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

// describe("pow", function () {
//   it("raises to n-th power", function () {
//     assert.equal(pow(2, 3), 8);
//     assert.equal(pow(3, 4), 81);
//   });
// });

// describe("pow", function () {
//   it("2 raised to power 3 is 8", function () {
//     assert.equal(pow(2, 3), 8);
//   });

//   it("3 raised to power 4 is 81", function () {
//     assert.equal(pow(3, 4), 81);
//   });
// });

// The principal difference is that when assert triggers an error, the it block immediately terminates. So, in the first variant if the first assert fails, then we’ll never see the result of the second assert.

// Making tests separate is useful to get more information about what’s going on, so the second variant is better.

// And besides that, there’s one more rule that’s good to follow.

describe("pow", function () {
  function makeTest(x) {
    let expected = x * x * x;
    it(`${x} in the power 3 is ${expected}`, function () {
      assert.equal(pow(x, 3), expected);
    });
  }

  for (let x = 1; x <= 5; x++) {
    makeTest(x);
  }
});
