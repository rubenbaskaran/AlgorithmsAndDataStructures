/* Anagrams */

console.log(Anagrams("!r!u!b!e!n!e!", " u b n e R e ! "));

function Anagrams(inputOne, inputTwo)
{
    var stringOne = inputOne.toLowerCase();
    var stringTwo = inputTwo.toLowerCase();
    
    var characterCountingObjectOne = {};
    var characterCountingObjectTwo = {};

    // Create character counting object for stringOne
    for (var character of stringOne)
    {
        if (!characterCountingObjectOne[character])
        {
            characterCountingObjectOne[character] = 1;
        }
        else
        {
            characterCountingObjectOne[character] = characterCountingObjectOne[character] + 1;
        }
    }

    // Create character counting object for stringTwo
    for (var character of stringTwo)
    {
        if (!characterCountingObjectTwo[character])
        {
            characterCountingObjectTwo[character] = 1;
        }
        else
        {
            characterCountingObjectTwo[character] = characterCountingObjectTwo[character] + 1;
        }
    }

    // Compare character counting object for stringOne with equivalent for stringTwo
    for (var character of stringOne)
    {
        // Ignore spaces and exclamation marks
        if (character == " " || character == "!")
        {
            continue;
        }

        if (characterCountingObjectOne[character] != characterCountingObjectTwo[character])
        {
            return false;
        }
    }

    // Compare character counting object for stringTwo with equivalent for stringOne
    for (var character of stringTwo)
    {
        // Ignore spaces and exclamation marks
        if (character == " " || character == "!")
        {
            continue;
        }

        if (characterCountingObjectTwo[character] != characterCountingObjectOne[character])
        {
            return false;
        }
    }

    return true;
}