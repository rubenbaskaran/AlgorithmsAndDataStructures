/* Palindrome */

var inputString = "rruburr"
var reversedString = "";

for (var character of inputString)
{
    reversedString = character + reversedString;
}

if (inputString == reversedString)
{
    console.log("This is a palindrome");
}
else
{
    console.log("this is not a palindrome");
}