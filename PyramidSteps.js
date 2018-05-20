/* PyramidSteps */

PyramidSteps(10);

function PyramidSteps(numberOfRows)
{
    var numberOfHashtags = 1;
    var widthOfPyramidBottom = numberOfRows * 2 - 1;

    for (var i = 0; i < numberOfRows; i++)
    {        
        var hashtagsString = "";
        var sideSpacesString = "";
        var numbersOfSideSpaces = 0;                

        for (var j = 0; j < numberOfHashtags; j++)
        {
            hashtagsString += "#";
        }

        if (numberOfHashtags != widthOfPyramidBottom)
        {
            var numbersOfSideSpaces = (widthOfPyramidBottom - numberOfHashtags) / 2;
        }

        for (var k = 0; k < numbersOfSideSpaces; k++)
        {
            sideSpacesString += " ";
        }

        console.log("'" + sideSpacesString + hashtagsString + sideSpacesString + "'");

        numberOfHashtags += 2;
    }
}