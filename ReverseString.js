/* ReverseString */

var testString = "This is a test string";
var reversedString = "";

for (var i = 0; i < testString.length; i++)
{
    reversedString = testString[i] + reversedString;
}

console.log("Normal: " + testString);
console.log("Reversed: " + reversedString);