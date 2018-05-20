/* Vowels */

Vowels("This Is A Test String");

function Vowels(string)
{
    counter = 0;
    var arrayOfVowels = ['a', 'e', 'i', 'o', 'u'];
    
    for (var char of string.toLowerCase())
    {
        if (arrayOfVowels.includes(char))
        {
            counter++;
        }
    }

    console.log("'" + string + "'" + "got " + counter + " vowels.")
}