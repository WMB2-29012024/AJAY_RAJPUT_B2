//Branch Name B2_W4_D4

// Question 8:Write a for-loop, and log the current and its immediate next element



function currAndImmediateNext(arr){
let store=[];
for(let i=0;(i<arr.length-1);i++){
    if(i===(arr.length-1)){
    store.push(arr[i]);
}
    else{
        store.push([arr[i],arr[i+1]]);
}
}
return store;
}
const numArr = currAndImmediateNext([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    
console.log(numArr);
