/**
 * @param {string} s
 * @return {character}
 * Given a string s consisting of lowercase English letters, return the first letter to appear twice.

Note:

A letter a appears twice before another letter b if the second occurrence of a is before the second occurrence of b.
s will contain at least one letter that appears twice.
 

Example 1:

Input: s = "abccbaacz"
Output: "c"
Explanation:
The letter 'a' appears on the indexes 0, 5 and 6.
The letter 'b' appears on the indexes 1 and 4.
The letter 'c' appears on the indexes 2, 3 and 7.
The letter 'z' appears on the index 8.
The letter 'c' is the first letter to appear twice, because out of all the letters the index of its second occurrence is the smallest.
 */

// let s = "abccbaacz"
// var repeatedCharacter = function(s) {
    
//     let obj={};
//     let str={}
//     for (let i =0; i<s.length;i++){
//         obj+=s[i];
//         for(let j=i+1; j<s.length;j++){
//             if(s[j]=s[i]){
//                 str+=j;
//             }
//         }
//         console.log(obj);

//     }
// };
let n=521;
var alternateDigitSum = function(n) {
    let evenSum=0;
    let oddSum=0;
    for(let i=0;i<n.length;i+=2){
     evenSum+=n[i];
    }
    console.log(evenSum);
};
console.log(alternateDigitSum(n))
