/* Vowels */

Vowels("This Is A Test String");

function Vowels(string)
{
    counter = 0;
    var stringLowerCase = string.toLowerCase();
    for (var char of stringLowerCase)
    {
        if (char == "a" || char == "e" ||
            char == "i" || char == "o" || char == "u")
        {
            counter++;
        }
    }

    console.log("'" + string + "'" + "got " + counter + " vowels.")
}