const person={
firstName:'Irfan',
lastName:'Farooq',
age:19,
email:'irfan@irfan.com',
hobbies:['coding'],
adress:{
    city:'sringar',
    state:'jammu and kashmir'
},
getBirthYear:function(){
    return 2021-this.age;
}
}
let val;
val=person;
// Get specific value
val=person.firstName;
val=person['lastName'];
val=person.age;
val=person.hobbies[0];
val=person.adress.state;
val=person.adress['city'];
val=person.getBirthYear();

console.log(val);

const people=[
    {name:'Irfan', age: 19},
    {name:'Tahseen', age: 30},
    {name:'Danish', age: 32}
    
]
for(let i=0;i<people.length;i++){
    console.log(people[i].name);
}
