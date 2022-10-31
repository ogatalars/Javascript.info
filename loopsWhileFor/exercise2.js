// let n = 100;
// for (let i = 2; i <= n; i++) {
//   if (n % 2 == 0) {
//     console.log(i);
//     console.log("é primo");
//   }
// }

let n = 100;

nextPrime: for (let i = 2; i <= n; i++) {
  // for each i...

  for (let j = 2; j < i; j++) {
    // look for a divisor..
    if (i % j == 0) continue nextPrime; // not a prime, go next i
  }

  console.log(i); // a prime
}
