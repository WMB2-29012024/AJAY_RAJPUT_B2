////B2_W4_D2


//Question 18.  Add another key “objectDataTypes” to the same object using square notation, and value should be an array of strings containing names of all object data types in JS, then log the object
let obj={primitiveTypes:[17,true, "ajay",755n, null, undefined,Symbol()]}; 
obj["objectDataTypes"]=["array","object","map","set","JSON","class","weakmap","weakset"];
console.log(obj);