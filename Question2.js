// Branch Name: B2_W4_D5
      
/* Question 2:  Write a for loop to log the sum of all elements.
*/

const numArr = [1, 2, 3, 4, 5];
const func=()=>{
    let sum=0;
    for(const elem of numArr){
      sum +=elem;
    }
return sum;
}
func();
console.log(func());
