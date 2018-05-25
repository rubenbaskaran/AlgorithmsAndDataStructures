/* Stack */
/* First In Last Out */

class Stack
{
    constructor()
    {
        this.stack = [];
    }

    Push(item)
    {
        this.stack.push(item);
    }

    Pop()
    {
        this.stack.pop();
    }

    Peek()
    {
        return this.stack[this.stack.length-1];
    }

    Print()
    {
        console.log(this.stack);
    }
}

var stack = new Stack()
stack.Push(1);
stack.Push(2);
stack.Push(3);
stack.Print();
stack.Pop();
console.log(stack.Peek());
stack.Pop();
console.log(stack.Peek());
stack.Pop();
console.log(stack.Peek());