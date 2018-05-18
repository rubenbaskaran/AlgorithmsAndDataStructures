/* ArrayChunk */

console.log(ArrayChunk(['a', 'b', 'c', 'd','e','f','g','h','i'], 3));

function ArrayChunk(array, size)
{       
    var outputArray = [];
    for (var i = 0; i < array.length; i += size)
    {        
        outputArray.push(array.slice(i, i+size));        
    }
    return outputArray;
}