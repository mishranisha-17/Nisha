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