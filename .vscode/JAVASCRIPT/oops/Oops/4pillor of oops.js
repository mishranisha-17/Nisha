// four pillars are Inheritance, Polymorphism, Encapsulation and Abstraction.

//  Encapsulation(get,set method)

function Person() {
    this.name = 'nisha'
}


Person.prototype.age = 40;


const p1 = new Person();

console.log(p1.age); //40

Person.prototype = { age: 50 }

const p3 = new Person();

console.log(p3.age); 
console.log(p1.age);

