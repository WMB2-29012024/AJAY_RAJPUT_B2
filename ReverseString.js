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
const s = "Hello, World!";
const reverseString = (s)=> {
    
    const stack = new Stack(s.length);
    for(let i=0; i<s.length; i++){
        const curr = s.charAt(i);
        stack.stackPush(curr);
    }
    
    let ans = "";
    while(!stack.isEmpty()){
        ans += stack.stackPop();
    }
    
    return ans;

}

console.log(reverseString(s));