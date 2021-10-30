// Function Declerations
function greet(firstName = "John", lastName = "Doe") {
    // if(typeof firstName==='undefined'){firstName='john'}
    // if(typeof lastName==='undefined'){lastName='Doe'}
    // console.log('Hello');
    return "Hello " + firstName + " " + lastName;
}
// console.log(greet());

// Function Expressions

const square = function (x = 3) {
    return x * x;
};
// console.log(square());

// Immediately invokable function expressions-IIFEs
// (function(){
//     console.log('IIFE Ran...');
// })();
(function (name) {
    console.log("Hello " + name);
})("Irfan");

// Property Methods
const todo = {
    add: function () {
        console.log('Add todo...');
    },
    edit: function () {
        console.log('Edit todo...');
    }
}
todo.delete = function () {
    console.log('Delete todo....');
}
todo.add();
todo.edit(22);
todo.delete();