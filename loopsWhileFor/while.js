while (condition) {
  // code
  // so-called "loop body"
}
// While the condition is truthy, the code from the loop body is executed.
let i = 0;
while (i < 3) {
  // shows 0, then 1, then 2
  console.log(i);
  i++;
}
// A single execution of the loop body is called an iteration. The loop in the example above makes three iterations.

// If i++ was missing from the example above, the loop would repeat (in theory) forever. In practice, the browser provides ways to stop such loops, and in server-side JavaScript, we can kill the process.

// Any expression or variable can be a loop condition, not just comparisons: the condition is evaluated and converted to a boolean by while.

// For instance, a shorter way to write while (i != 0) is while (i):

let y = 3;
while (y) {
  console.log(i);
  y--;
}
