
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
