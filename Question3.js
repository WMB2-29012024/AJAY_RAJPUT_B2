function reversedString(str){
    let newStrArr="";

let size= str.length-1;
for(size;size>=0;size--){
    newStrArr+=str[size] ; 
}

return newStrArr;
}
 const k= reversedString("asdasdzxczxc");
 console.log(k);
