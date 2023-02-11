const car = {
    make: 'Honda',
    model: 'Civic',
    year: 2019,
    printOut: function () {
      console.log(this.year + ' ' + this.make + ' ' + this.model);
    },
  };
  car.printOut();
// Output: 2019 Honda Civic

// Referenced as a property
//var method = car.printOut;

//car.year = 2020;

//method();
// Output: undefined undefined undefined;
// 'this' is being referenced outside an object context
// can be fixed by explicitly setting the object context with 'bind()'

//method = car.printOut.bind(car);

//method();
// Output: 2020 Honda Civic