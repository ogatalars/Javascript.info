let a = (1 + 2, 3 + 5);
console.log(a);

// Please note that the comma operator has very low precedence, lower than =, so parentheses are important in the example above.

// Without them: a = 1 + 2, 3 + 4 evaluates + first, summing the numbers into a = 3, 7, then the assignment operator = assigns a = 3, and the rest is ignored. It’s like (a = 1 + 2), 3 + 4.
