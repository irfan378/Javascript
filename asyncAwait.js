async function irfan(){
    console.log('Inside irfan function');
    const response=await fetch('https://api.github.com/users');
    console.log('Before response');
    const users=await response.json();
    console.log('users resolved');
    return users;
}
console.log("Before calling irfan");
let a=irfan();
console.log("After calling irfan");
console.log(a);
a.then(data=>console.log(data))
console.log("Last line of this js file");