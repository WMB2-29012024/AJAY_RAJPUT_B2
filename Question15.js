// Branch Name: B2_W4_D3

//  Question 15: There are 2 different arrays, write a for-loop, that:
// starts from 0th index, on array one,
// matches all the elements of the array two,
// if any element matches, logs true, and continue to next element
// once all the elements are looped on array 2, go to next element in array 1, then continue from step 1.

const numArr1 = [1, 2, 3, 4, 5]
const numArr2 = [6, 7, 8, 5, 4, 11, 12]    
  
const finalArr= checkSameElement(numArr1,numArr2)

function checkSameElement(arr1,arr2){
    for(let i=0;i<arr1.length;i++){

        for(let j=0;j<arr2.length;j++){
            if(arr1[i]===arr2[j]){console.log("true:",arr1[i] ," matches")}
        }
    }
}

