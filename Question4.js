// Branch Name: B2_W4_D5
      
/* Question 4: Write a for loop to find and log the smallest element in the array.
*/

const numArr = [10, 2, 30, 4, 50];

let smallestElement=numArr[0];
for(let i =0; i<numArr.length;i++){
if(smallestElement>=numArr[i]){
    smallestElement=numArr[i];
}
}
console.log(smallestElement);

