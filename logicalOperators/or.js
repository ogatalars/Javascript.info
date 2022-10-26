let result = a || b;
alert(true || true); // true
alert(false || true); // true
alert(true || false); // true
alert(false || false); // false

let hour = 9;

if (hour < 10 || hour > 18) {
  alert("The office is closed.");
}

let hora = 12;
let isWeekend = true;

if (hora < 10 || hora > 18 || isWeekend) {
  alert("The office is closed."); // it is the weekend
}
