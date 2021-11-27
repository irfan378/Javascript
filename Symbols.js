// Symbols
const syml=Symbol('My identifier');
const syml2=Symbol('My identifier');
console.log(syml);

const k1=Symbol('identifier for k1');
const k2=Symbol('for k2');

myObj={};
myObj[k1]="person1";
myObj[k2]="person2";
myObj["name"]="good boy";

console.log(myObj);
console.log(myObj[k1]);
console.log(myObj[k2]);

//Symbols are ignored in for in loop
for(key in myObj){
    console.log(key,myObj[key]);
}

console.log(JSON.stringify(myObj));