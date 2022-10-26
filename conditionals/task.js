// 1
let official = prompt("What is the official name of JS?");
official == "ECMAScript" ? "Right" : "You don't know EcmaScript?";

//2
let number = prompt("Digit a number");
if (number >= 0) {
  console.log(1);
} else if (number < 0) {
  console.log(-1);
} else {
  console.log(0);
}

//3
// let result;
// a + b < 4 ? result === "Below" : result === "Over";
let result = a + b < 4 ? "Below" : "Over";

//4
// let message;

// if (login == "Employee") {
//   message = "Hello";
// } else if (login == "Director") {
//   message = "Greetings";
// } else if (login == "") {
//   message = "No login";
// } else {
//   message = "";
// }
let message =
  login == "Employee"
    ? "Hello"
    : login == "Director"
    ? "Greetings"
    : login == ""
    ? "No login"
    : "";
