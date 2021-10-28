const firstName='william';
const lastName='jhonson';
const age=36;
const str='Hello there my name is Irfan';
const tags='web design,web development,programming';

let val;

val=firstName+lastName;

// Concatenation
val=firstName+' '+lastName;

// Append
val='Irfan ';
val+='Farooq';

val='Hello, my name is '+firstName+' and I am ' + age;

// Escaping
val='That\'s awesome, I can\'t wait';

// Length
val=firstName.length;

// concat
val=firstName.toUpperCase();
val=firstName.toLowerCase();

val=firstName[2];

// indexOf()
val=firstName.indexOf('l');
val=firstName.lastIndexOf('l');

// charAt
val=firstName.charAt('2');
// Get last char
val=firstName.charAt(firstName.length-1);

// Substring
val=firstName.substring(0,4);

// Slice
val=firstName.slice(0,4);
val=firstName.slice(-3);

// Split
val=str.split(' ');
val=tags.split(',');

// Replace
val=str.replace('Irfan','Anybody');

// inlcudes()
val=str.includes('Hello');

console.log(val);
