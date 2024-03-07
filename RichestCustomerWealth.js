// const arr = [[1, 2], [3, 4], [5, 6]]
// const arr = [[5,2,3],[0,6,7]]
const arr =[[10,100],[200,20],[30,300]]
let maxSum = 0;
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    let elem = arr[i];
    for (let j = 0; j < elem.length; j++) {
        sum += elem[j];
    }
    if (maxSum < sum) { maxSum = sum; }
    sum = 0
}
console.log(maxSum)
