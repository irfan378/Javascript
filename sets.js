// Set stores unique values.
const mySet=new Set();//Intialize an empty set.

// Adding values to this set
mySet.add('this');
mySet.add('my name');
mySet.add('this');
mySet.add(34);
mySet.add(true);

console.log(mySet);

//Use a constructor to intiliaze the set.
let mySet2=new Set([1,45,'this',false,{a:8,b:8},'this']);
console.log(mySet2);

// Set size
console.log(mySet.size);

// Check wheather set contains the element.
console.log(mySet.has(346));

// remove a element
mySet.delete('this');
console.log(mySet);

//Iterating a set
// Using for of loop
for(let item of mySet){
    console.log(item);
}

// Using forEach loop
mySet.forEach((item)=>{
    console.log(item);
});

let a=Array.from(mySet);
console.log(a);