class Person { //common to be uppercased in es6
  constructor(name = 'Anonymous', age = 0) {
    // this.name = name || 'No name'; -- LIKE RUBY
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    return `Hello ${this.name}`;
  }

  getDescription() {
    return `${this.name} is ${this.age}`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age); // refers/calls to parent
    this.major = major;
  }

  hasMajor() {
    return !!this.major;
  }

  getDescription() {
    let description = super.getDescription(); //grabs parent function

    if (this.hasMajor()) {
      description += ` Major is ${this.major}`;
    }

    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }

  hasHomeLocation() {
    return !!this.homeLocation();
  }

  getGreeting() {
    let getGreeting = super.getGreeting();

    if (this.hasHomeLocation) {
      getGreeting += `, you are visiting from ${this.homeLocation}`;
    }

    return getGreeting;
  }
}


const me = new Traveler('JP', 25, 'Portland');
console.log(me);

const other = new Student();
console.log(other);

console.log(me.getGreeting());
console.log(other.getDescription());

// console.log(me.hasMajor());
console.log(other.hasMajor());
