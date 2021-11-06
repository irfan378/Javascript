class Person{
    constructor(firstname,lastname){
        this.firstname=firstname;
        this.lastname=lastname;
    }
    greeting(){
        return `Hello there ${this.firstname} ${this.lastname}`;
    }
}
class Customer extends Person{
    constructor(firstname,lastname,phone,membership) {
    super(firstname,lastname);

    this.phone=phone;
    this.membership=membership;
    }
    
    static getMembership(){
        return 500;
    }

}
const john=new Customer('John','Doe','555-555-5555','standard');
console.log(john.greeting());
console.log(Customer.getMembership());