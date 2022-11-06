// Let’s reiterate: no matter how the function is created, a function is a value. Both examples above store a function in the sayHi variable.
function sayHi() {
  alert("Hello");
}

alert(sayHi); // shows the function code

// Please note that the last line does not run the function, because there are no parentheses after sayHi. There are programming languages where any mention of a function name causes its execution, but JavaScript is not like that.

// In JavaScript, a function is a value, so we can deal with it as a value. The code above shows its string representation, which is the source code.

// Surely, a function is a special value, in the sense that we can call it like sayHi().

// But it’s still a value. So we can work with it like with other kinds of values.
