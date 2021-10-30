const id = "100";
// Equal to
// if(id==100){
//     console.log('Correct');
// }
// else{
//     console.log('incorrect');
// }
// // Not equal to
// if(id!=100){
//     console.log('Correct');
// }
// else{
//     console.log('incorrect');
// }
// // Equal to value and type
// if(id===100){
//     console.log('Correct');
// }
// else{
//     console.log('incorrect');
// }
// if(id!==100){
//     console.log('Correct');
// }
// else{
//     console.log('incorrect');
// }
// Test if Undefined
// if(typeof id!=='undefined'){
// console.log(`The ID is ${id}`);
// }
// else{
//     console.log('No ID');
// }

// Greater or less than
// if (id >= 100) {
//   console.log(`The ID is ${id}`);
// } else {
//   console.log("No ID");
// }

// If else
// const color='red';
// if(color==='red'){
//     console.log('color is red');
// }
// else if(color==='blue'){
//     console.log('color is blue');
// }
// else{
//     console.log('Color is not red or blue');
// }

// Logical operators
// && AND
const name = "steve";
const age = 30;
if (age > 0 && age < 12) {
    console.log(`${name} is a child`);
} else if (age >= 13 && age <= 19) {
    console.log(`${name} is a teenager`);
} else {
    console.log(`${name} is an adult`);
}
// OR ||
if (age < 16 || age > 65) {
    console.log(`${name} cannot run in race`);
}
else {
    console.log(`${name} is registered for the race`);
}

// Terenary operator
console.log(id === 100 ? 'correct' : 'incorrect');