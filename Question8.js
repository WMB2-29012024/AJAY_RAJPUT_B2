
function currAndImmediateNext(arr){
let store=[];

for(let i=0;i<2;i++){
    store.push(arr[i]);
    store.push(arr[i+1]);
}
return store;
}





const numArr = currAndImmediateNext([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    
console.log(numArr);
