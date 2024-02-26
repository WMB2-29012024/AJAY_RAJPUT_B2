/**
 * @param {number} num
 * @return {number}
 * Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.
 

Example 1:

Input: num = 38
Output: 2
Explanation: The process is
38 --> 3 + 8 --> 11
11 --> 1 + 1 --> 2 
Since 2 has only one digit, return it
 */
let num = 18;
var addDigits = (inputNum) =>{
let stringNum= String(inputNum);
if(stringNum.length===1){
return inputNum;    
}
    while(stringNum.length!==1){
        let sum=0;
        for(let i=0; i<stringNum.length;i++){
            sum+=Number(stringNum[i]);
        }
        stringNum=String(sum);
    }
    return Number(stringNum);
};
console.log(addDigits(num));
