let a,b;
[a,b]=[2,3];
console.log(a);
console.log(b);

[a,b,c,...d]=[1,2,3,4,5,6,7,8,9];
console.log(a);
console.log(b);
console.log(c);
console.log(d);

//Array destructuring
({a,b,c,...d}={a:34,b:345,c:67,d:45,e:35});
console.log(a,b,c,d);

const fruits=['Apple','Bananas','Mangoes'];
[a,b,c]=fruits;
console.log(a,b,c);

// Object destructuring
const person={
    name:"person",
    age:"23",
    gender:"male",
    net:1233,
    start:function(){console.log('started');}
}
const {name,age,gender}=person;
console.log(name,age,person);
