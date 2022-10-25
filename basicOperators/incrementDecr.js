let counter = 2;
counter++;
console.log(counter);
counter--;
console.log(counter);

// //Increment/decrement can only be applied to variables. Trying to use it on a value like 5++ will give an error.
// The operators ++ and -- can be placed either before or after a variable.

// When the operator goes after the variable, it is in “postfix form”: counter++.
// The “prefix form” is when the operator goes before the variable: ++counter.

let a = ++counter;
console.log(a);
