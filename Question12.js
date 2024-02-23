//Branch Name B2_W4_D4

//Write a for-loop to log every element, starting from middle of the array


const numArr = middleArrayStart([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(numArr);

function middleArrayStart(arr){
    let length=arr.length;
let store=[];
        startIndex=(Math.round(length/2));
    console.log(startIndex);
for(startIndex; startIndex<arr.length;startIndex++){
    store.push(arr[startIndex]);
}
return store;
}