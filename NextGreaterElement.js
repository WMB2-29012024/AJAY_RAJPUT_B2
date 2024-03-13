// Given an array, print the Next Greater Element (NGE) for every element.
// The Next Greater Element for an element x is the first greater element on the right side of x in the array.

// Elements for which no greater element exist, consider the next greater element as -1.

// Examples

// Example 1:
// Input: [4, 5, 2, 25]
// Output: [5, 25, 25, -1]
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
const arr =[4, 5, 2, 25];
const nextGreaterElem=(arr)=>{
    const stack = new Stack(arr.size);
    const newArr=[...arr];
for(let i=arr.length-1; i>=0;i--){
   let currrElem =arr[i];
   while(!stack.isEmpty() && currrElem>stack.peek()){
    stack.stackPop();
   }
   newArr[i]=stack.isEmpty()? -1 : stack.peek();
   stack.stackPush(currrElem)
}
return newArr} 
console.log(nextGreaterElem(arr));