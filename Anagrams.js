/* Anagrams */

console.log(Anagrams("u!b!r   b", "r u b b"));

function Anagrams(inputOne, inputTwo)
{
    var stringOne = inputOne.toLowerCase();
    var stringTwo = inputTwo.toLowerCase();
    var characterCountingObjectOne = {};
    var characterCountingObjectTwo = {};

    // Populate character counting objects with stringOne and stringTwo
    PopulateCharacterCountingObject(characterCountingObjectOne, stringOne);    
    PopulateCharacterCountingObject(characterCountingObjectTwo, stringTwo);

    // Compare character counting objects with stringOne and stringTwo
    if (!CompareCharacterCountingObjects(characterCountingObjectOne, characterCountingObjectTwo, stringOne) ||
        !CompareCharacterCountingObjects(characterCountingObjectOne, characterCountingObjectTwo, stringTwo))
    {
        return false;
    }

    return true;
}

function PopulateCharacterCountingObject(characterCountingObjectOne, string)
{
    for (var character of string)
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
}

function CompareCharacterCountingObjects(characterCountingObjectOne, characterCountingObjectTwo, string)
{
    for (var character of string)
    {        
        if (character == " " || character == "!")
        {
            continue;
        }

        if (characterCountingObjectOne[character] != characterCountingObjectTwo[character])
        {
            return false;
        }
    }

    return true;
}