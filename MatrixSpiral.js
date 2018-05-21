/* MatrixSpiral */

DrawMatrixSpiral(5);

function DrawMatrixSpiral(n)
{
    var matrixArray = [];
    var startRow = 0;
    var startColumn = 0;
    var endColumn = n - 1;
    var endRow = n - 1;
    var counter = 1;
    var maxCounter = n * n;

    // Populate matrixArray with arrays
    for (var i = 0; i < n; i++)
    {
        matrixArray.push([]);
    }

    while (counter <= maxCounter)
    {
        // Horizontal to the right        
        for (var x = startColumn; x <= endColumn; x++)
        {
            matrixArray[startRow][x] = counter;
            counter++;            
        }
        startRow++;

        // Vertical to the bottom        
        for (var x = startRow; x <= endRow; x++)
        {
            matrixArray[x][endRow] = counter;
            counter++;            
        }
        endColumn--;

        // Horizontal to the left        
        for (var x = endColumn; x >= startColumn; x--)
        {
            matrixArray[endRow][x] = counter;
            counter++;            
        }
        endRow--;

        // Vertical to the top            
        for (var x = endRow; x >= startRow; x--)
        {
            matrixArray[x][startColumn] = counter;
            counter++;            
        }
        startColumn++;
    }

    for(var array of matrixArray)
    {
        console.log(array);
    }    
}