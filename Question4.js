function alternateArrayGenerator(arr){
    let store=[];
for(let i=0;i<arr.length;i+=2){
    store+=arr[i];
}
return store;
}
const love =alternateArrayGenerator([1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11]);
console.log(love);

