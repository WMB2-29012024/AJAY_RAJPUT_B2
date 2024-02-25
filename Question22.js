////B2_W4_D2


//Question 22.  Use the set method to add one more data type in the above map.set(“object”, “non-primitive”)
const obj= new Map([["array","non-primitive"],["object","non-primitive"],["map","non-primitive"],["set","non-primitive"],["class","non-primitive"],["date","non-primitive"],["weakset","non-primitive"],["weakmmap","non-primitive"],["JSON","non-primitive"]]);
obj.set('Number',"primitive");
console.log(obj);