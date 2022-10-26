// The boolean NOT operator is represented with an exclamation sign !.
let value = true;
let result = !value;
console.log(result);
// The operator accepts a single argument and does the following:

// Converts the operand to boolean type: true/false.
// Returns the inverse value.
alert(!true); // false
alert(!0); // true

// A double NOT !! is sometimes used for converting a value to boolean type:
alert(!!"non-empty string"); // true
alert(!!null); // false
