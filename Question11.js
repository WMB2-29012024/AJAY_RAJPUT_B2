//Branch Name B2_W4_D4

//Question 11:Write a for-loop and count frequency of each element in the array. Store the element and its frequency in an object.


const numArr = countFrequency([1, 2, 3, 2,2, 1,2,6,4, 5, 6, 7, 8, 9, 10,10]);
console.log(numArr);


function countFrequency(arr) {
    const obj = {}
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]]) {( ++obj[arr[i]]);//obj[arr[i]]=obj[arr[i]]+1;
        //Note: obj[arr[i]]++ also give same output as it get updated just after but when we check the key:value in object through console(add another console.log() here  to check) we can see the clear difference. 
        }
        else {obj[arr[i]] = 1;}
    }
    return obj
}



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

