/**
 * @param {string} s
 * @return {number}
 * Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

 

Example 1:

Input: s = "leetcode"
Output: 0
 */
let s = "loveleetcode"

var firstUniqChar = (s) => {
    let obj = {};

    for (let i = 0; i < s.length; i++) {
        const currentletter = s[i];

        if (!obj[currentletter]) {
            obj[currentletter] = 1;
        }
        else {
            obj[currentletter] += 1;
        }
    }
    for (let j = 0; j < s.length; j++) {
        if (obj[s[j]] === 1) {
            return j;
        }
    }
    return -1;
};
console.log(firstUniqChar(s));
