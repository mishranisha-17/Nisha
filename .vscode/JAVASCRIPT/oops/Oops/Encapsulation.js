//  Encapsulation can be defined as “the packing of data and functions into one component”.
// Packing, which is also known as bundling, grouping and bindin
// simply means to bring together data and the methods which oprate on data
//   The component can be a function, a class or an object
//Encapsulation (GET SET method)

 class Person{
        constructor(name, age, collegeName){
            this.name = name;
            this.age  = age;
            this.collegeName = collegeName;
        }
        
    }

function Person() {
    this.name = 'nisha'
}

Person.prototype.age = 36;


const p1 = new Person();

console.log(p1.age); //40

// Person.prototype = { age: 50 }

// const p3 = new Person();

// console.log(p3.age); 
// console.log(p1.age);

