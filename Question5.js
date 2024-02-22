function alternateArrayGeneratorFromLastIndex(arr){
    let store=[];
    for(let i=(arr.length-1);i>=0;i--){
        store+=arr[i];

    }
    return store;
}



const numArr = alternateArrayGeneratorFromLastIndex([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(numArr);
