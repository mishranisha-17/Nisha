// function Employee() {
//     this.name = 'Arun';
//     this.id = 101;
// }

// var Obj1 = new Employee();
// Employee.prototype.salary = 100000;
// console.log(Obj1.salary); //100000

// // var Obj2 = new Employee();
// // Employee.prototype.salary=100000;
// // console.log(obj1.salary);//100000

// var obj2 = new Employee();
// Employee.prototype.profile=function(){
//     console.log(Hi,my self)
// }

// function Person() {
//     this.name = 'shakul'
// }


// Person.prototype.age = 40;


// const p1 = new Person();

// console.log(p1.age); //40

// Person.prototype = { age: 50 }

// const p3 = new Person();

// console.log(p3.age); 
// console.log(p1.age);

class User {
    #password;
    constructor(name, userName, password) {
      this.name = name;
      this.userName = userName;
      this.#password = password;
    }
  
    login(userName, password) {
      if (userName === this.userName && password === this.#password) {
        console.log('Login Successfully');
      } else {
        console.log('Authentication Failed!!');
      }
    }
  
    // setPassword(newPassword) {
    //   this.#password = newPassword;
    // }

    getPassword(){
        
    }
  };
  
  const p1 = new User("shakul", "shakul",'password:)');
  const js = new User('JavaScript', 'js', 'python:)');
  
  
  p1.login("shak" ,'password:)'); 
  js.login('javas', 'python:)'); 
  
  console.log(p1.name); 
  console.log(p1.password); 
  //console.logp1.#password); 
  
  
