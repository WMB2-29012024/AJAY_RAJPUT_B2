
// const numArr = countFrequency([1, 2, 3, 4, 1, 5, 6, 2, 8, 8, 8, 10]);
// console.log(numArr);


// function countFrequency(arr) {
//     const store = [];
//     let k = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (!store.includes(arr[i])) store.push(arr[i])
//         let count = 0;
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[i] === arr[j]) {
//                 count++;
//             }
//         }
//         if (store !== arr[i]) console.log("value:", arr[i], "repeatation:", count);

//     } return store;

// }





const numArr = countFrequency([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(numArr);


function countFrequency(arr) {
    const obj = {}
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]]) obj[arr[i]]++
        else obj[arr[i]] = 1
    }
    return obj
}
