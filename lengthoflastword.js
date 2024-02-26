/**
 * @param {string} s
 * @return {number}
 * Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal 
substring
 consisting of non-space characters only.

 

Example 1:

Input: s = "Hello World"
Output: 5
 */
var  s = "   fly me   to   the moon  "

var lengthOfLastWord = function(s) {
    if(s&&s.length===1){
        return 1;
    }
    let lastLetterIndex = s.length-1;
for(let i=lastLetterIndex;i>=0;i--){
    if(s[i]!==" "){
        lastLetterIndex=i;
        break;
    }

}
let lastWord="";
for(let j=lastLetterIndex; j>0;j--){
    if(s[j]!==" "){
        lastWord+=s[j];
    }
    else{
        break;
    }
}
return lastWord.length;


    }
    console.log(lengthOfLastWord(s));
