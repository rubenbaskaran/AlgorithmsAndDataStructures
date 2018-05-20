/* Steps */

Steps(10);

function Steps(numberOfSteps)
{
    var outputString = "";
    for (var i = 1; i < numberOfSteps + 1; i++)
    {
        for (var j = 0; j < i; j++)
        {
            outputString += "#";
        }

        for (var k = 0; k < numberOfSteps - i; k++)
        {
            outputString += " ";
        }

        console.log("'" + outputString + "'");
        outputString = "";
    }
}