const personPrototypes={
    greeting:function(){
        return `Hello there ${this.firstname} ${this.lastname}`;
    },
    getsMarried:function(newLastName){
        this.lastname=newLastName;
    }
}

const mary=Object.create(personPrototypes);
mary.firstname='Mary';
mary.lastname='Williams';
mary.age=30;

mary.getsMarried('Thompson');

console.log(mary.greeting());

const brad=Object.create(personPrototypes,{
    firstname:{value:'Brad'},
    lastname:{value:'Traversy'},
    age:{value:36}
});
console.log(brad);
console.log(brad.greeting());