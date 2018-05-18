/* MaxChar */

console.log(MaxChar("this is a test string"));

function MaxChar(inputString)
{
    var returnValue = ["", 0];

    for (var character of inputString)
    {
        if (character == " ")
        {
            continue;
        }

        var counter = 0;
        for (var i = 0; i < inputString.length; i++)
        {
            if (character == inputString[i])
            {
                counter++;
            }
        }

        if (counter > returnValue[1])
        {
            returnValue = [character, counter];
        }     
    }

    return "The most often occuring letter in '" + inputString + "' is " + returnValue[0];
}