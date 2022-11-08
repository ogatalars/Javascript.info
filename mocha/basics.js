describe("pow", function () {
  it("raises to n-th power", function () {
    assert.equal(pow(2, 3), 8);
  });
});

// describe("title", function() { ... })
// What functionality we’re describing? In our case we’re describing the function pow. Used to group “workers” – the it blocks.

// it("use case description", function() { ... })
// In the title of it we in a human-readable way describe the particular use case, and the second argument is a function that tests it.:

// assert.equal(value1, value2)
// The code inside it block, if the implementation is correct, should execute without errors.

// Functions assert.* are used to check whether pow works as expected. Right here we’re using one of them – assert.equal, it compares arguments and yields an error if they are not equal. Here it checks that the result of pow(2, 3) equals 8. There are other types of comparisons and checks, that we’ll add later.

// The specification can be executed, and it will run the test specified in it block.
