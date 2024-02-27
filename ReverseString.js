/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 * Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

 

Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
 */
let s = ["H","a","n","n","a","h"]

var reverseString = function (s) {
    for (let i = 0; i < s.length; i++) {
        const temp = s[i];
        s[i] = s[s.length - 1]
        s[s.length- 1] = temp;
    }
};
 console.log(reverseString(s));
