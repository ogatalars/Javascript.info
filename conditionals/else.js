// The if statement may contain an optional “else” block. It executes when the condition is falsy.
let year = prompt(
  "In which year was the ECMAScript-2015 specification published?",
  ""
);

if (year == 2015) {
  alert("You guessed it right!");
} else {
  alert("How can you be so wrong?"); // any value except 2015
}
