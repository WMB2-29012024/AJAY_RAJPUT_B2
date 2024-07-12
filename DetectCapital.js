/**
 * @param {string} word
 * @return {boolean}
 * We define the usage of capitals in a word to be right when one of the following cases holds:

All letters in this word are capitals, like "USA".
All letters in this word are not capitals, like "leetcode".
Only the first letter in this word is capital, like "Google".
Given a string word, return true if the usage of capitals in it is right.

 

Example 1:

Input: word = "USA"
Output: true
 */
word = "Leetcode"
var detectCapitalUse = function(word) {
    if (word === toMyUpperCase(word)) { return true }
     if (word === toMyLowerCase(word)) { return true }
     let firstLetter = toMyUpperCase(word[0]);
     let restString = toMyLowerCase(mySubString(word, 1));
     if (word === (firstLetter + restString)) { return true }
     return false;
 };
 var toMyUpperCase = (s) => {
     let str = '';    
     for (let i = 0; i < s.length; i++) {
         let charCode = s.charCodeAt(i);
         if (charCode >= 97 && charCode <= 122) {
             str += String.fromCharCode(charCode - 32);
         }
         else {
             str += s[i];
         }
     }
  
    
     return str;
 };
 var toMyLowerCase = (s) => {
     let str = '';

     for (let i = 0; i < s.length; i++) {

         let charCode = s.charCodeAt(i);
         if (charCode >= 65 && charCode <= 90) {
             str += String.fromCharCode(charCode + 32);
         }
         else {
             str += s[i];
         }
     }     return str;
 };
 var mySubString = (s, firstIndex, lastIndex = s.length) => {
 
     let str = ''
     for (let i = firstIndex; i < lastIndex; i++) {
         str += s[i];
     }
     return str; 
 };
 console.log(detectCapitalUse(word));