/**
 * @param {number} n
 * @return {number}
 * You are given a positive integer n. Each digit of n has a sign according to the following rules:

The most significant digit is assigned a positive sign.
Each other digit has an opposite sign to its adjacent digits.
Return the sum of all digits with their corresponding sign.

 

Example 1:

Input: n = 521
Output: 4
Explanation: (+5) + (-2) + (+1) = 4.
 */

const n = 521;
var alternateDigitSum = function (n) {
    let k = String(n)
    let evenSum = '';
    let oddSum = '';
    for (let i = 0; i < k.length; i++) {

        if (i % 2 == 0) {
            evenSum += k[i];
        }
        else {
            oddSum += k[i];
        }
    }

    let evenToArray = []
    for (let i = 0; i < evenSum.length; i++) {
        evenToArray.push(evenSum[i]);
    }

    let finalEvenSum = 0;
    for (let i = 0; i < evenToArray.length; i++) {
        finalEvenSum += Number(evenToArray[i]);
    }

    let oddToArray = []
    for (let i = 0; i < oddSum.length; i++) {
        oddToArray.push(oddSum[i]);
    }

    let finalOddSum = 0;
    for (let i = 0; i < oddToArray.length; i++) {
        finalOddSum += Number(oddToArray[i]);
    }

    return finalEvenSum - finalOddSum;
}

alternateDigitSum(n);
