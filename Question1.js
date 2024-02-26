// Branch Name: B2_W4_D5

/* Question 1: Write a for loop to log each element multiplied by 2.
*/

const numArr = [1, 2, 3, 4, 5];
const func = () => {
    let newNumArr = [];
    for (let i = 0; i < numArr.length; i++) {
        newNumArr.push(2 * (numArr[i]));

    }
    console.log(newNumArr);
}
func();
