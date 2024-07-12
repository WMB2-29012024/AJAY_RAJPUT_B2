// Given a stack, sort it using only stack operations (push and pop).

// You can use an additional temporary stack, but you may not copy the elements into any other data structure (such as an array). The values in the stack are to be sorted in descending order, with the largest elements on top.

// Examples

// Input: [34, 3, 31, 98, 92, 23]
// Output: [3, 23, 31, 34, 92, 98]

class Stack {
    constructor(size) {
        this.maxSize = size;
        this.stackSize = 0;
        this.stack = [];
    }
    stackPush(item) {
        if (this.stackSize >= this.maxSize) {
            return new Error("Stack OverFlow");
        }
        this.stack.push(item);
        this.stackSize += 1;
        return this.stackSize;
    }

    peek() {
        if (this.stackSize === 0) {
            return ("Stack is empty");
        }
        this.lastElem = this.stackPop();
        this.stackPush(this.lastElem);
        return this.lastElem;
    }
    stackPop() {
        if (this.stackSize === 0) {
            return new Error("Stack underFlow");
        }
        this.removedItem = this.stack.pop();
        this.stackSize -= 1;
        return this.removedItem;
    }
    isEmpty() {
        if (this.stackSize === 0) {
            return true;
        }
        else { return false; }
    }

}
const arr = [34, 3, 31, 98, 92, 23];
const sortedArray = (arr) => {
    const stack = new Stack(arr.size);
    let stack2 = [...arr];
    for (let i = 0; i <stack2.length;i++){
        let currrElem=arr[i];
        if(stack2.isEmpty()){
            stack2.stackPush(currrElem);
        }
        else{
            
        }
    }
    
}


//SortingStack.js