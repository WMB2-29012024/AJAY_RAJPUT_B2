// Palindrome Check using Queue

// Problem Statement
// Given a string, determine if that string is a palindrome using a queue data structure.

// A palindrome is a word, number, phrase, or other sequence of characters that reads the same forward and backward, ignoring spaces, punctuation, and capitalization.

// Examples:

// Input: "madam"
// Output: True
// Explanation: The word "madam" reads the same forwards and backwards.

// Input: "openai"
// Output: False
// Explanation: The word "openai" does not read the same forwards and backwards.

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
const string="A man a plan a canal Panama";
const upgradedString =string.toLowerCase().replaceAll(" ","");
const palindromeCheck =(upgradedString)=>{
    const queue= new Queue(upgradedString.length);
    let newString="";
    for(let i=upgradedString.length-1;i>=0;i--){
  queue.enqueue(upgradedString.charAt(i));
    }
while(!queue.isEmpty()){
  newString += queue.dequeue();
}
console.log(newString);
console.log(upgradedString);
if(newString===upgradedString){return true}
return false
}
console.log(palindromeCheck(upgradedString));