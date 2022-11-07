// declaration
// A Function Declaration can be called earlier than it is defined.  a global Function Declaration is visible in the whole script, no matter where it is.
function sum(a, b) {
  return a + b;
}
// expression
//A Function Expression is created when the execution reaches it and is usable only from that moment
let sum = function (a, b) {
  return a + b;
};

sayHi("John"); // Hello, John

function sayHi(name) {
  alert(`Hello, ${name}`);
}

// THIS NOT WORK

// sayHi("John"); // error!

// let sayHi = function(name) {  // (*) no magic any more
//   alert( `Hello, ${name}` );
// };
