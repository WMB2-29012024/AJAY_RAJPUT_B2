////B2_W4_D2


//Question 23.  Check and log true/false if any data type with value other than “non-primitive” is stored in the above map

const obj= new Map([["array","non-primitive"],["object","non-primitive"],["map","non-primitive"],["set","non-primitive"],["class","non-primitive"],["date","non-primitive"],["weakset","non-primitive"],["weakmmap","non-primitive"],["JSON","non-primitive"]]);
let k=obj.values();
for(const [key,value]of obj){
let isNonPrimitive= value !== "non-primitive";
    console.log(` ${key} : ${isNonPrimitive} `);

}