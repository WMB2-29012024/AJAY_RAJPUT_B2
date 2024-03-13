// Given an absolute file path in a Unix-style file system, simplify it by converting “..” to the previous directory and removing any “.” or multiple slashes. The resulting string should represent the shortest absolute path.

// Examples:

// Example 1.

// Input: "/a//b////c/d//././/.."
// Output: "/a/b/c"
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
const s="/home//foo/";
const simplifyPath = (s)=>{
    const newArray=s.split("/");
const stack = new Stack(newArray.length);

for(let i=0; i<newArray.length;i++){
    let elem = newArray[i];
    if(elem>="a" && elem<="z"){
        stack.stackPush(elem)
    }
    else if(!stack.isEmpty() && elem===".."){
        stack.stackPop()
    }
    
}
let str="";
let output="";
while(!stack.isEmpty()){
    str="/"+stack.stackPop()+str;

}
console.log(str);
console.log(stack);
return str.length ? str : "/"
}
console.log(simplifyPath(s));