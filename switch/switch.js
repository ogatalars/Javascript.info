// switch(x) {
//     case 'value1':  // if (x === 'value1')
//       ...
//       [break]

//     case 'value2':  // if (x === 'value2')
//       ...
//       [break]

//     default:
//       ...
//       [break]
//   }
let a = 2 + 2;

switch (a) {
  case 3:
    alert("Too small");
    break;
  case 4:
    alert("Exactly!");
    break;
  case 5:
    alert("Too big");
    break;
  default:
    alert("I don't know such values");
}
