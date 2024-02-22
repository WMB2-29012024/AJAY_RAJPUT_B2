
const numArr =currAndImmediatePreviousFromLast([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
console.log(numArr);
function currAndImmediatePreviousFromLast(arr){
    const store=[];
    for(let i=0 ; i<=(arr.length-1);i++){
        if(i===0){
            store.push([arr[i]]);
        }
        else{
            store.push([arr[i],arr[i-1]]);
        }
    }
    return store;
}