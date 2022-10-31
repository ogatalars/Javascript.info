// let userName = "John";

// function showMessage() {
//   let message = "Hello, " + userName;
//   alert(message);
// }

// showMessage(); // Hello, John

let userName = "John";

function showMessage() {
  userName = "Bob"; // (1) changed the outer variable

  let message = "Hello, " + userName;
  alert(message);
}

alert(userName); // John before the function call

showMessage();

alert(userName); // Bob, the value was modified by the function
