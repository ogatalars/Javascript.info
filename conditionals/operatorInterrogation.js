// let accessAllowed;
let age = prompt("How old are you?", "");

if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}

alert(accessAllowed);

// let result = condition ? value1 : value2;
let accessAllowed = age > 18 ? true : false;
