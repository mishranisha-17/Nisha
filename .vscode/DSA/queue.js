// queue can contain elements of different data type.
// Queues are based on the FIFO principle
// Queue has a dynamic and fixed size.
// array cantain elements of same data type
// Array has a fixed size.
// Insertion and deletion in array can be done at any index in the array.
// The stack can contain elements of the different data types. Stack has only one type.
// Stacks are based on the LIFO principle, i.e., the element inserted at the last, is the first element to come out of the list.
// Insertion and deletion in stacks take place only from one end of the list called the top.
// Queue has a dynamic and fixed size.	Array has a fixed size.
// Stack has a dynamic and fixed size.


class Queue {
    constructor() {
       this.enqueueStack = [];
       this.dequeueStack = [];
    }
    enqueue(item) {
       this.enqueueStack.push(item);
    }
    dequeue() {
       if (this.dequeueStack.length === 0) {
    
          // move everything from enqueueStack to dequeueStack
          while (this.enqueueStack.length > 0) {
             const item = this.enqueueStack.pop();
             this.dequeueStack.push(item);
          }
       }
 
       // dequeue from dequeueStack
       return this.dequeueStack.pop();
    }
 }
