let a = {};
let b = a; // copy the reference
console.log(a == b); // true, both variables reference the same object
console.log(a === b); // true

let c = {};
let d = {}; // two independent objects

console.log(c == d); // false
// o que diferencia são as referencias de localização na memória.
