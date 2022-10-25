let s = "my" + "string";
alert(s); // mystring

alert("1" + 2); // "12"
alert(2 + "1"); // "21"
alert(2 + 2 + "1"); // "41" and not "221"
alert("1" + 2 + 2); // "122" and not "14"
alert(6 - "2"); // 4, converts '2' to a number
alert("6" / "2"); // 3, converts both operands to numbers

// The binary + is the only operator that supports strings in such a way. Other arithmetic operators work only with numbers and always convert their operands to numbers.

// let apples = "2";
// let oranges = "3";

// alert(apples + oranges); // "23", the binary plus concatenates strings

let apples = "2";
let oranges = "3";

// both values converted to numbers before the binary plus
alert(+apples + +oranges); // 5

// the longer variant
// alert( Number(apples) + Number(oranges) ); // 5
