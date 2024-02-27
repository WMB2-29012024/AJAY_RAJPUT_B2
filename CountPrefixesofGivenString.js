/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 * You are given a string array words and a string s, where words[i] and s comprise only of lowercase English letters.

Return the number of strings in words that are a prefix of s.

A prefix of a string is a substring that occurs at the beginning of the string. A substring is a contiguous sequence of characters within a string.

 

Example 1:

Input: words = ["a","b","c","ab","bc","abc"], s = "abc"
Output: 3
Explanation:
The strings in words which are a prefix of s = "abc" are:
"a", "ab", and "abc".
Thus the number of strings in words which are a prefix of s is 3.

 */
let words = ["a", "b", "c", "ab", "bc", "abc"], s = "abc";
var countPrefixes = (words, s) => {
    let count = 0;
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        for (let j = 0; j < s.length; j++) {
            if (word[j] !== s[j]) { break; }
            else if (j === words[i].length - 1) {
                count++;
            }
        }
    }
    return count;
};
console.log(countPrefixes(words, s));
