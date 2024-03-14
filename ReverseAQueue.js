class Node {
    constructor(data) {
        this.data = data;
        this.next = null;

    }
}
class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.count = 0;
    }
    enqueue(data) {//push
        const dataNode = new Node(data)//{data: , next:null}
        // this.rear =this.front = dataNode
        if (this.count === 0) {
            this.front = dataNode;
            this.rear = this.front;
            this.count += 1;
        }
        else {
            this.rear.next = dataNode;
            this.rear = dataNode;
            this.count += 1;
        }
        return this.count;
    }
    peek() {
        return this.size === 0 ? null : this.front.data;
    }
    dequeue() {
        const popElement = this.front;
        this.front = popElement.next;
        if (this.front === null) { this.rear = null }
        this.count -= 1;
        return popElement
    }
}
class Stack {
    constructor(size) {
        this.stack = [];
        this.maxSize = size;
        this.stackSize = 0;
    }

    stackPush(item) {
        if (this.stackSize >= this.maxSize) {
            return new Error("Stack Overflow")
        }
        this.stack.push(item)
        this.stackSize += 1
        return this.stackSize
    }

    stackPop() {
        if (this.stackSize === 0) {
            return new Error("Stack Underflow")
        }
        this.removedItem = this.stack.pop()
        this.stackSize -= 1
        return this.removedItem
    }

    isEmpty() {
        if (this.stackSize === 0) {
            return true
        }
        return false
    }

    peek() {
        if (this.stackSize === 0) {
            return "Stack is Empty"
        }
        else {
            const lastElem = this.stackPop()
            this.stackPush(lastElem)
            return lastElem
        }
    }



}
const arr = [5,7,9];
const reverseQueue = () => {
    const stack = new Stack(arr.size);
    for (let i = 0; i < arr.length; i++) {
        stack.stackPush(arr[i]);
    }
    const queue = new Queue(arr.length);
    while (!stack.isEmpty()) {

        queue.enqueue(stack.stackPop());
    }
    return JSON.stringify(queue);
}
console.log(reverseQueue(arr));