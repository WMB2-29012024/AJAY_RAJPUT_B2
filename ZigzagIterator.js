// Given two 1d vectors, implement an iterator to return their elements alternately.

// For example, given two 1d vectors:
// v1 = [1, 2]
// v2 = [3, 4, 5, 6]

// By calling next() repeatedly until hasNext() returns false, the order of elements returned by next should be: [1, 3, 2, 4, 5, 6].

// Example 1:
// i = ZigzagIterator([1, 2], [3, 4, 5, 6])
// print(i.next()) # returns 1
// print(i.next()) # returns 3
// print(i.next()) # returns 2
// print(i.next()) # returns 4
// print(i.next()) # returns 5
// print(i.next()) # returns 6
// print(i.hasNext()) # returns False


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
        return this.count === 0 ? null : this.front.data;
    }
    isEmpty() {
        if (this.count === 0) {
            return true
        }
        return false
    }

    dequeue() {
        const popElement = this.front;
        this.front = popElement.next;
        if (this.front === null) { this.rear = null }
        this.count -= 1;
        return popElement.data
    }
}
const v1 = [1, 2];
const v2 = [3, 4, 5, 6];

class ZigzagIterator {

    constructor(arr1, arr2) {
        this.arr1 = [];
        this.arr2 = []
        this.queue= new Queue(arr1.length+arr2.length);
        let i=0;
    while(i<arr1.length && arr2.length){
        this.queue.enqueue(arr1[i]);
        this.queue.enqueue(arr2[i]);
        i++
    }
    while(i<arr1.length){
        this.queue.enqueue(arr1[i]);
        i++;
    }
    while(i<arr2.length){
        this.queue.enqueue(arr2[i]);
        i++;

    }

    }
    next() { return this.queue.dequeue()}
    hasNext() { return !this.queue.isEmpty()}
}
const i= new ZigzagIterator(v1, v2);
console.log(i.next());
console.log(i.next());
console.log(i.next());
console.log(i.next());
console.log(i.next());
console.log(i.hasNext());
console.log(i.next());
console.log(i.hasNext());