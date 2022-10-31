// for (begin; condition; step) {
//   // ... loop body ...
// }

for (let i = 0; i < 3; i++) {
  // shows 0, then 1, then 2
  alert(i);
}

// part
// begin	let i = 0	Executes once upon entering the loop.
// condition	i < 3	Checked before every loop iteration. If false, the loop stops.
// body	alert(i)	Runs again and again while the condition is truthy.
// step	i++	Executes after the body on each iteration.

// Run begin
// → (if condition → run body and run step)
// → (if condition → run body and run step)
// → (if condition → run body and run step)
// → ...

// for (let i = 0; i < 3; i++) alert(i)

// run begin
let i = 0;
// if condition → run body and run step
if (i < 3) {
  alert(i);
  i++;
}
// if condition → run body and run step
if (i < 3) {
  alert(i);
  i++;
}
// if condition → run body and run step
if (i < 3) {
  alert(i);
  i++;
}
// ...finish, because now i == 3
