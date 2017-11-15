// Args object no longer bound w/ arrow functions

const add = function (a, b) {
  console.log(arguments);
  return a + b;
};

const addArrow = (a, b) => {
  // console.log(arguments); UNDEFINED with arrow functions
  return a + b;
};

// console.log(add(5, 6, 500));
// console.log(addArrow(5, 6, 500));

// this keyword no longer bound

const user = {
  name: 'JP',
  cities: ['Los Angeles', 'Portland'],
  printPlacesLived: function () {
    // const that = this;
    // console.log(this.name);
    // console.log(this.cities);
    // this.cities.forEach(function(city) {
    //   console.log(that.name + ' ' + city); // must use a different var
    // });
    //
    // this.cities.forEach((city) => {
    //   console.log(this.name + ' ' + city); // 'this' works with arrow (use arrow functions)
    // });

    return this.cities.map((city) =>  city + ' is a city'); // doesnt mess with original array
  }
};

// console.log(user.printPlacesLived());
// user.printPlacesLived();

const multiplier = {
  // array of #
  // multiply by
  //multiply

  numbers: [1, 2, 3, 4, 5],
  multiplyBy: 2,
  multiply() {
    return this.numbers.map((number) => number * this.multiplyBy)
  }
}

console.log(multiplier.multiply());
