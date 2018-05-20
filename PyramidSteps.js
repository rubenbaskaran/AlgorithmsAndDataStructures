/* PyramidSteps */

PyramidSteps(10);

function PyramidSteps(numberOfRows)
{
    var hashtagsPerRowArray = [];
    var counter = 1;

    // Calculating number of hashtags for each row
    for (var i = 0; i < numberOfRows; i++)
    {
        hashtagsPerRowArray.push(counter);        
        counter += 2;
    }
    
    var widthOfPyramidBottom = hashtagsPerRowArray[hashtagsPerRowArray.length-1];

    for (var numberOfHashtags of hashtagsPerRowArray)
    {
        var hashtagsString = "";
        var sideSpacesString = "";
        var numbersOfSideSpaces = 0;

        // Calculating number of spaces for each side of the hashtags
        if (numberOfHashtags != widthOfPyramidBottom)
        {
            var numbersOfSideSpaces = (widthOfPyramidBottom - numberOfHashtags) / 2;
        }

        for(var i = 0; i < numberOfHashtags; i++)
        {
            hashtagsString += "#";
        }

        for (var i = 0; i < numbersOfSideSpaces; i++)
        {
            sideSpacesString += " ";
        }

        console.log("'" + sideSpacesString + hashtagsString + sideSpacesString + "'");
    }
}