const numArr = [1, 234_45, 89,75, 4e9];
let numArrSize=numArr.length-1;
let a=[];
for(numArrSize;numArrSize>=0;numArrSize--){
   let newArr= numArr[numArrSize];
 a.push(newArr);
}console.log(a);

const strArr = ["asd", "qwe", "ert", "asdasdzxczxc"];
 numArrSize=strArr.length-1;
 let b=[];
for(numArrSize;numArrSize>=0;numArrSize--){
    newArr= numArr[numArrSize];
b.push(newArr)
}
console.log(b);


const mixArr = ["first", "234_45", {first: "Web", last: "Masters"}, true];
 numArrSize=mixArr.length-1;
 let c=[];
for(numArrSize;numArrSize>=0;numArrSize--){
    newArr= mixArr[numArrSize];
c.push(newArr)
}
console.log(c);
