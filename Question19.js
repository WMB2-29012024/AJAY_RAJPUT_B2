////B2_W4_D2


//Question 19.  Add another key in the same object “version”, value should latest released version of JS (“es6”)

let obj={primitiveTypes:[17,true, "ajay",755n, null, undefined,Symbol()]}; 
obj["objectDataTypes"]=["array","object","map","set","JSON","class","weakmap","weakset"];
obj.version="es6";
console.log(obj);