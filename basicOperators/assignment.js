// Let’s note that an assignment = is also an operator. It is listed in the precedence table with the very low priority of 2.

// That’s why, when we assign a variable, like x = 2 * 2 + 1, the calculations are done first and then the = is evaluated, storing the result in x.
let x = 2 * 2 + 1;

alert(x); // 5

// The fact of = being an operator, not a “magical” language construct has an interesting implication.

// All operators in JavaScript return a value. That’s obvious for + and -, but also true for =.

// The call x = value writes the value into x and then returns it.

// Here’s a demo that uses an assignment as part of a more complex expression:

let a = 1;
let b = 2;
let c = 3 - (a = b + 1);

console.log(c);
alert(a); // 3
alert(c); // 0
