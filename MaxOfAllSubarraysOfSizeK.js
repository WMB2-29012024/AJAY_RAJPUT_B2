
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
const arr = [1, 2, 3, 1, 4, 5, 2, 3, 6];
const k = 3;

const MaxOfAllSubAubArrays=(arr,k)=>{
    let max=-1;
    let output=[];
    const queue= new Queue(arr);
    for(let i=0;i<arr.length;i++){
        max=Math.max(max,arr[i]);
        if(i>=k-1){
           queue.enqueue(max);
        }

    }
    while(!queue.isEmpty()){
        output.push(queue.dequeue())
    }
    return output;
}
console.log(MaxOfAllSubAubArrays(arr,k));