/* RegularExpressions */

var string = "||hello_ world123!? :-)||";

console.log(string.replace(/[^A-Z\s]+/gi, "")); // OUTPUT:hello world

console.log(string.replace(/[^A-Z\/]+/gi, "")); // OUTPUT:helloworld

console.log(string.replace(/[^0-9\s]+/gi, "")); // OUTPUT: 123

console.log(string.replace(/[^0-9\/]+/gi, "")); // OUTPUT:123

console.log(string.replace(/[^A-Z0-9\s]+/gi, "")); // OUTPUT:hello world123

console.log(string.replace(/[^A-Z0-9\/]+/gi, "")); // OUTPUT:helloworld123