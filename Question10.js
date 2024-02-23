//Branch Name B2_W4_D4
/*
Write a for-loop, and log the current, its immediate previous, and its immediate next element,

Put the elements in a new object, and push that object in an array.

Return that array at the end of the loop
*/





// function currPrevNext(arr) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         let obj = {
//             previous: i > 0 ? arr[i - 1] : null,
//             current: arr[i],
//             next: i < arr.length - 1 ? arr[i + 1] : null
//         };
//         result.push(obj);
//     }
//     return result;
// }
function currPrevNext(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let obj = {}
        obj = {
            previous: arr[i - 1] || null,
            current: arr[i],
            next: arr[i + 1] || null
        };
        result.push(obj);
    }
    return result;
}

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const resultArr = currPrevNext(numArr);
console.log(resultArr);














/*function currPrevNext(arr){
    let store = [];
    for(let i = 0; i < arr.length; i++){
        let currStore, previousStore, nextStore;
        if(i === 0){
            currStore = arr[i];
            previousStore = null;
            nextStore = arr[i + 1];
        } else if(i === arr.length - 1){
            currStore = arr[i];
            previousStore = arr[i - 1];
            nextStore = null;
        } else {
            currStore = arr[i];
            previousStore = arr[i - 1];
            nextStore = arr[i + 1];
        }
        store.push([currStore, previousStore, nextStore]);
    }
    return store;
}

const numArr = currPrevNext([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(numArr);*/
