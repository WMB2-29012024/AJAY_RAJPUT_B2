// Branch Name: B2_W4_D3

//  Question 14: There are 2 different arrays, write a for-loop, that should log elements at the same index in both the arrays. 
//The loop should run till the longer array's length.

const numArr1 = [1, 2, 3, 4, 5]
const numArr2 = [6, 7, 8, 9, 10, 11, 12]

const finalArr = sameIndexLogRun(numArr1, numArr2);

function sameIndexLogRun(arr1, arr2) {
    let maxLength = Math.max(arr1.length, arr2.length);

    for (let i = 0; i < maxLength; i++) {
     console.log(arr1[i], arr2[i]);
}
}



// for getting output null instead of undefined at vacate places--->


// const numArr1 = [1, 2, 3, 4, 5]
// const numArr2 = [6, 7, 8, 9, 10, 11, 12]
// const finalArr = sameIndexLogRun(numArr1, numArr2)
// function sameIndexLogRun(arr1, arr2) {
//     let maxLength = Math.max(arr1.length, arr2.length)
//     for (let i = 0; i < maxLength; i++) {
//         arr1[i] = arr1[i] === undefined ? null : arr1[i];
//     console.log(arr1[i], arr2[i]);

//     }
// }

