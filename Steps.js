/* Steps */

Steps(10);

function Steps(numberOfSteps)
{
    var outputString = "";
    for (var i = 1; i < numberOfSteps + 1; i++)
    {
        // Insert i numbers of "#" equal to the row number
        for (var j = 0; j < i; j++)
        {
            outputString += "#";
        }

        // Fill out the remaining space with " " equal to the total space minus the inserted numbers of "#"
        for (var k = 0; k < numberOfSteps - i; k++)
        {
            outputString += " ";
        }

        console.log("'" + outputString + "'");
        outputString = "";
    }
}