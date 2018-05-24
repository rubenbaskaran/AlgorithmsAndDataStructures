/* Queue */

class Queue
{
    constructor()
    {
        this.queue = [];
    }

    Add(item)
    {
        this.queue.unshift(item);
    }

    Remove()
    {
        this.queue.pop();
    }

    Print()
    {
        console.log(this.queue);
    }
}

var queue = new Queue();
queue.Add(1);
queue.Print();
queue.Remove();
queue.Print();