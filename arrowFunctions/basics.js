// let func = (arg1, arg2) => expression
// let func = function(arg1, arg2, ..., argN) {
//     return expression;
//   };
let sum = (a, b) => a + b;
/* This arrow function is a shorter form of:

let sum = function(a, b) {
  return a + b;
};
*/
let double = (n) => n * 2;
// roughly the same as: let double = function(n) { return n * 2 }

alert(double(3)); // 6
// If there are no arguments, parentheses are empty, but they must be present:
let sayHi = () => alert("Hello!");

sayHi();
