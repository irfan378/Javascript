class Person{
    constructor(firstname,lastname,dob){
        this.firstname=firstname;
        this.lastname=lastname;
        this.birthday=new Date(dob);
    }
    greeting(){
        return `Hello there ${this.firstname} ${this.lastname}`;
    }
    calculateAge(){
        const diff=Date.now()-this.birthday.getTime();
        const ageDate=new Date(diff);
        return Math.abs(ageDate.getUTCFullYear()-1970);
    }
    getsMarried(newlastname){
        this.lastname=newlastname;
    }
    static addNumbers(x,y){
        return x+y;
    }
}
const mary=new Person('Mary','Williams','11-3-1980');

mary.getsMarried('Thompson');

console.log(mary);
console.log(mary.greeting());

console.log(Person.addNumbers(1,2));