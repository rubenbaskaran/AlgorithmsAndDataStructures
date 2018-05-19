/* Capitalization */

console.log(Capitalization("this is another test string with an additional message"));

function Capitalization(inputString)
{
    var inputStringArray = inputString.split(' ');
    var outputString = "";
    for (var word of inputStringArray)
    {
        var capitalizedWord = word[0].toUpperCase() + word.slice(1);        
        outputString == "" ? outputString = capitalizedWord + " " : outputString += capitalizedWord + " ";                
    }

    return outputString.trim();
}