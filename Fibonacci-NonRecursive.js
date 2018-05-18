/* Fibonacci-NonRecursive */

j = 0;
k = 1;

for(var i = 0; i < 10 ; i++)
{
    newNumber = j + k;
    console.log(newNumber);
    j = k;
    k = newNumber;
}