// let reg=/irfan/;
let reg=/irfan/g;//g means global
// let reg=/irfan/i;//i means case insensitive
// console.log(reg);
// console.log(reg.source);

let s="this is irfan and also irfan";
// Functions to match expressions

// exec
// let result=reg.exec(s);
// console.log(result);
//  result=reg.exec(s);
// console.log(result);
//  result=reg.exec(s);
// console.log(result);

// test() - Returns true or false
// let result2=reg.test(s);
// console.log(result2);

// match()-It will return an array of results or null
// let results3=s.match(reg);
// console.log(results3);

// search()-Returns index of first match else -1
let result4=s.search(reg);
console.log(result4);

// Replace -Returns
let result5=s.replace(reg,'person');
console.log(result5);
