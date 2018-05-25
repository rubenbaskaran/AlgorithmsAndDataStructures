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
        return this.queue.pop();
    }

    Print()
    {
        console.log(this.queue);
    }

    Peek()
    {
        return this.queue[this.queue.length - 1];
    }

    Weave(queueOne, queueTwo)
    {        
        while (queueOne.Peek() || queueTwo.Peek())
        {
            if (queueOne.Peek())
            {
                this.Add(queueOne.Remove());
            }

            if (queueTwo.Peek())
            {
                this.Add(queueTwo.Remove());
            }
        }
    }
}

var queueOne = new Queue();
var queueTwo = new Queue();
var mergedQueue = new Queue();

queueOne.Add(1);
queueOne.Add(2);
queueOne.Add(3);
queueTwo.Add("A");
queueTwo.Add("B");
queueTwo.Add("C");
queueOne.Print();
queueTwo.Print();

mergedQueue.Weave(queueOne, queueTwo);
mergedQueue.Print();