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
        var x = startColumn;
        while (x <= endColumn)
        {
            matrixArray[startRow][x] = counter;
            counter++;
            x++;
        }
        startRow++;

        // Vertical to the bottom
        var y = startRow;
        while (y <= endRow)
        {
            matrixArray[y][endRow] = counter;
            counter++;
            y++;
        }
        endColumn--;

        // Horizontal to the left
        var z = endColumn;
        while (z >= startColumn)
        {
            matrixArray[endRow][z] = counter;
            counter++;
            z--;
        }
        endRow--;

        // Vertical to the top    
        var v = endRow;
        while (v >= startRow)
        {
            matrixArray[v][startColumn] = counter;
            counter++;
            v--;
        }
        startColumn++;
    }

    console.log(matrixArray);
}