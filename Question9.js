////B2_W4_D2


//Question 9.  Create an array with only positive, and negative numbers, and log its length.

const arr=[1,2,3,4,5,-1,-8,-6,7,5];
let storeNegative=[];
let storePositive=[];
    
for(let i = 0; i<arr.length;i++){
if(arr[i]<0){
storeNegative.push(arr[i]);}
else{
    storePositive.push(arr[i]);
}
}
console.log("array length is: ",arr.length, "Positive : ",storePositive, "Positive length is: ",storePositive.length,"Negative is : ",storeNegative,"Negative length is: ",storeNegative.length);