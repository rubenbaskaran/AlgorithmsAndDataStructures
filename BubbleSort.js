/* BubbleSort */

var numbers = [9,7,2,4,6,1,3,8,5];
console.log(numbers);

for(var i = 0; i < numbers.length; i++)
{
    for(var j = 0; j < numbers.length - i - 1; j++)
    {
        var temp = numbers[j + 1];
        if(numbers[j] > numbers[j + 1])
        {
            smallNumber = numbers[j + 1];
            bigNumber = numbers[j];

            numbers[j] = smallNumber;
            numbers[j + 1] = bigNumber;
        }
    }
}

console.log(numbers);