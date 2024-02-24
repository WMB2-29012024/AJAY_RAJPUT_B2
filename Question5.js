//Branch Name B2_W4_D4
//Question 5:Write a for-loop to log every alternate element, starting from last index



function alternateArrayGeneratorFromLastIndex(arr){
    let store=[];
    for(let i=(arr.length-1);i>=0;i-=2){
        store.push(arr[i]);

    }
    return store;
}



const numArr = alternateArrayGeneratorFromLastIndex([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(numArr);
