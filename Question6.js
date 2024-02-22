function every4thElement(arr){
let store=[];
for(let i=0; i<arr.length;i+=4){
    store.push(arr[i]);

}
return store
}

const numArr = every4thElement([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

console.log(numArr);
