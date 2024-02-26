//CountingWordsWithPrefix
/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 * You are given an array of strings words and a string pref.

Return the number of strings in words that contain pref as a prefix.

A prefix of a string s is any leading contiguous substring of s.

 

Example 1:

Input: words = ["pay","attention","practice","attend"], pref = "at"
Output: 2
Explanation: The 2 strings that contain "at" as a prefix are: "attention" and "attend".
 */
let words = ["pay", "attention", "practice", "attend"], pref = "at";
var prefixCount = (words, pref) => {
    let count = 0;
    for (let i = 0; i < words.length; i++) {
        let isPrefix = true;
        for (let j = 0; j < pref.length; j++) {
            if (words[i][j] !== pref[j]) {
                isPrefix = false;
                break;
            }
        }
        if (isPrefix) {
            count++
        }

    }
    return count;

};
console.log(prefixCount(words,pref));