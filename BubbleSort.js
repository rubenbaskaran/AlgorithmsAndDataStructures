/* BubbleSort */

var numbers = [5,7,2,4,9,1,3,8,6];
console.log(numbers);

for(var i = 0; i < numbers.length; i++)
{
    for(var j = 0; j < numbers.length - i; j++)
    {
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