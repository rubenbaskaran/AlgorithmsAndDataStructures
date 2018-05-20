/* Vowels */

Vowels("This Is A Test String");

function Vowels(string)
{
    counter = 0;    
    for (var char of string.toLowerCase())
    {
        if (char == "a" || char == "e" ||
            char == "i" || char == "o" || char == "u")
        {
            counter++;
        }
    }

    console.log("'" + string + "'" + "got " + counter + " vowels.")
}