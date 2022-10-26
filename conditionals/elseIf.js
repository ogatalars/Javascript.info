let year = prompt(
  "In which year was the ECMAScript-2015 specification published?",
  ""
);

if (year < 2016) {
  console.log("Too early");
} else if (year > 2014) {
  console.log("Too late");
} else {
  console.log("Exactly!");
}

// In the code above, JavaScript first checks year < 2015. If that is falsy, it goes to the next condition year > 2015. If that is also falsy, it shows the last alert.

// There can be more else if blocks. The final else is optional.
