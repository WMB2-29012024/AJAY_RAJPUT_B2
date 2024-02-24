//Branch Name B2_W4_D4
//Question 6:Write a for-loop to log every 4th element, starting from 0th index




function every4thElement(arr){
let store=[];
for(let i=0; i<arr.length;i+=4){
    store.push(arr[i]);

}
return store
}

const numArr = every4thElement([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

console.log(numArr);
