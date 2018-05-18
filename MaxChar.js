/* MaxChar */

console.log(MaxChar("aaabbbccc"));

function MaxChar(inputString)
{
    var returnObject = { "counter": 0, characters: [] };

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

        // If new MaxChar then empty array and add new MaxChar
        if (counter > returnObject["counter"])
        {
            returnObject["counter"] = counter;
            returnObject["characters"] = [];
            returnObject["characters"].push(character);
        }
        // If equal MaxChar then add to array if it hasn't already been added
        else if (counter == returnObject["counter"])
        {
            if (returnObject["characters"].indexOf(character) < 0)
            {
                returnObject["characters"].push(character);
            }
        }
    }

    // Concatenation of characters for output message
    var outputString = "";
    for (var char of returnObject["characters"])
    {
        if (outputString == "")
        {
            outputString = char;
        }
        else
        {
            outputString += " & " + char;
        }
    }

    return "The most often occuring letter(s) in '" + inputString + "' is/are " +
        outputString + ". It/they occur(s) " + returnObject["counter"] + " time(s)";
}