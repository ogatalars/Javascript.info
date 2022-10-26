// The AND operator is represented with two ampersands &&:

result = a && b;
alert(true && true); // true
alert(false && true); // false
alert(true && false); // false
alert(false && false); // false
let hour = 12;
let minute = 30;

if (hour == 12 && minute == 30) {
  alert("The time is 12:30");
}

// The AND && operator does the following:

// Evaluates operands from left to right.
// For each operand, converts it to a boolean. If the result is false, stops and returns the original value of that operand.
// If all operands have been evaluated (i.e. all were truthy), returns the last operand.
// AND returns the second operand:
alert(1 && 0); // 0
alert(1 && 5); // 5

// if the first operand is falsy,
// AND returns it. The second operand is ignored
alert(null && 5); // null
alert(0 && "no matter what"); // 0

// The precedence of AND && operator is higher than OR ||
