// String

const name1='jeff';
const name2=new String('Jeff');

// name2.foo='bar';
// console.log(name2);

console.log(typeof name2);

if(name1==='jeff'){
    console.log('YES');
}
else{
    console.log('NO');
}

// Number
const num1=5;
const num2=new Number(5);

// Boolean
const bool1=true;
const bool2=new Boolean(true);

// Function
const getSum1=function(x,y){
    return x+y;
}
const getSum2=new Function('x','y','return 1+1');
console.log(getSum2(1,1));

// Objects
const john1={name:"john"};
const john2=new Object({name:"John"});

// Arrays
const arr1=[2,3,35,5];
const arr2=new Array(2,34,5,5);

// Regular expressions
const re1=/\w+/;
const re2=new RegExp('\\w+');

console.log(re2);