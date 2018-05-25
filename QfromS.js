/* QfromS */

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
        return this.stack.pop();
    }

    Peek()
    {
        return this.stack[this.stack.length - 1];        
    }
}

class Queue
{
    constructor()
    {        
        this.stackA = new Stack();
        this.stackB = new Stack();
    }

    Add(item)
    {
        this.stackA.Push(item);
    }

    Remove()
    {
        while(this.stackA.Peek())
        {
            this.stackB.Push(this.stackA.Pop())
        }

        var returnValue = this.stackB.Pop();

        while(this.stackB.Peek())
        {
            this.stackA.Push(this.stackB.Pop());
        }

        return returnValue;
    }

    Peek()
    {
        while(this.stackA.Peek())
        {
            this.stackB.Push(this.stackA.Pop())
        }

        var returnValue = this.stackB.Peek();

        while(this.stackB.Peek())
        {
            this.stackA.Push(this.stackB.Pop());
        }

        return returnValue;
    }

    Print()
    {
        console.log(this.stackA);
    }
}

var queue = new Queue();
queue.Add(1);
queue.Add(2);
queue.Add(3);
queue.Print();
console.log("Next: " + queue.Peek());
console.log("Removed: " + queue.Remove());
console.log("Next: " + queue.Peek());
console.log("Removed: " + queue.Remove());
queue.Print();