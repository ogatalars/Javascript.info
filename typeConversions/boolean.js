alert(Boolean(1)); // true
alert(Boolean(0)); // false

alert(Boolean("hello")); // true
alert(Boolean("")); // false
// Please note: the string with zero "0" is true
alert(Boolean("0")); // true
alert(Boolean(" ")); // spaces, also true (any non-empty string is true)
