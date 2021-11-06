// Person Constructor
function Person(firstname,lastname){
    this.firstname=firstname;
    this.lastname=lastname;
}
// Greeting
Person.prototype.greeting=function(){
    return `Hello there ${this.firstname} ${this.lastname}`;
}
const person1=new Person('John','Doe');

// console.log(person1.greeting());

// Customer constructor
function Customer(firstname,lastname,phone,membership){
    Person.call(this,firstname,lastname);

    this.phone=phone;
    this.membership=membership;
}
// Inherit the person prototype methods
Customer.prototype=Object.create(Person.prototype);

// Make customer prototype return customer()
Customer.prototype.constructor=Customer;

// Create customer
const customer1=new Customer('Tom','Smith','555-555-5555','Standard');

console.log(customer1);
// customer greeting
Customer.prototype.greeting=function(){
    return `Hello there ${this.firstname} ${this.lastname} welcome to our company`;
}
console.log(customer1.greeting());