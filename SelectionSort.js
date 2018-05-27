/* SelectionSort */

var numbers = [5, 2, 3, 8, 4, 9, 7, 1, 6, 0, 15, 14, 13, 11, 12, 10];

for (var i = 0; i < numbers.length; i++)
{
    var indexOfMin = i;

    for (var j = i + 1; j < numbers.length; j++)
    {
        if (numbers[indexOfMin] > numbers[j])
        {
            indexOfMin = j;
        }
    }

    if (i != indexOfMin)
    {
        temp = numbers[i];
        numbers[i] = numbers[indexOfMin];
        numbers[indexOfMin] = temp;
    }
}

console.log(numbers);