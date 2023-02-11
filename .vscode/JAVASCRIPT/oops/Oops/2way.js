//  structure of object-oriented programming(OOPS):
//  Classes are user-defined data types that act as the blueprint for individual objects, attributes and methods.
// Objects are instances of a class created with specifically defined data. Objects can correspond to real-world objects or an abstract entity. When class is defined initially, the description is the only object that is defined.
// Methods are functions that are defined inside a class that describe the behaviors of an object.

// class food{
//     construcer(season,color){
//         this.s=season;
//         this.c=color;
//     }
// }
//     var indian=new food("summer","yellow");
// console.log(indian.s)
// console.log(indian)





// function vehicle(name,engine){
//     this.name=name
//     this.engine=engine
//     this.methodnamehere=()=>{
//         console.log(this.name,this.engine)
//         console.log
//     }
// }
// var audi=new vehicle("audi","BS6")
// var RangeRover=new vehicle("RangeRover","BS6")
// console.log(audi.name);
// console.log(audi.engine);





class Gamer {

    constructor(weapon) {

     this.weapon = weapon;

     this.health = 100;

    }

    receiveDamage() {

     this.health = this.health - 10;

    }

   }

   class player extends Gamer {
    receiveDamage() {

        this.health = this.health - 5;
   
       }
   
      }
   
      const player1 = new player("staff");
   
       player1.receiveDamage();
   
      console.log(player1.health);
      