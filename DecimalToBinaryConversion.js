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
const num = 16;
const decimalToBinary = (num) => {
    if (num===0){return "0";}

    const stack = new Stack(num);
    while (num > 0) {
        let rem = num % 2;
        stack.stackPush(rem);
       num = Math.floor(num/2)
    }
    let str=''
    while(!stack.isEmpty()){
        str+=stack.stackPop();
    }
    return str
}
console.log(decimalToBinary(num));
