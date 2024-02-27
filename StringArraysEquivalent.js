/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 * Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.

A string is represented by an array if the array elements concatenated in order forms the string.

 

Example 1:

Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
Output: true
Explanation:
word1 represents string "ab" + "c" -> "abc"
word2 represents string "a" + "bc" -> "abc"
The strings are the same, so return true.
 */
let word1 = ["ab", "c"], word2 = ["a", "bc"]
var arrayStringsAreEqual = (word1, word2) =>
{
let  str1= '';
for(let i=0; i<word1.length;i++){
    str1+=word1[i];
} let str2='';
for(let j=0; j<word2.length;j++){
    str2+=word2[j];
}
if(str1===str2){
    return true;
}
else{return false;}
    
};
console.log(arrayStringsAreEqual(word1,word2)); 