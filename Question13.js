// Branch Name: B2_W4_D3

//  Question 13: Write a for-loop:
// Start from 0th index, log every element,
// then go to next index, log all next elements,
// continue till last element 


const numArr = logAllNextElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(numArr)
function logAllNextElements(arr) {

    let store = [];
    for (let i = 0; i <= arr.length - 1; i++) {

        for (let j = i; j < arr.length; j++) {
            store.push(arr[j]);
        }
        console.log(store)
        store = [];
    }
    return store
}

