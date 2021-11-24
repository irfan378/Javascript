let people=['person1','person2','person3','person4'];
// for loop
// for (let index = 0; index < people.length; index++) {
//     const element = people[index];
//     console.log(element);
// }

// for in loop
let obj={
    name:"person5",
    language:"javascript",
    hobbies:"Web Development"
}

// iterating an object using for loop

// for (let index = 0; index < Object.keys(obj).length; index++) {
//     const element = obj[Object.keys(obj)[index]];
//     console.log(element);

// }

// iterating an object using for in loop
// for (let key in obj){
//     console.log(obj[key]);
// }

// Iterating a String using for in loop
myString="This is my string";

// for (let char in myString){
//     console.log(myString[char]);
// }     
        

// for of loop
for(let name of people){
    console.log(name);
}

for(let name of myString){
    console.log(name);
}