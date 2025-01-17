/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   this.stomach = [];
// }
// Person.prototype.greet = function() {
//   return `my name is ${this.name} and I am ${this.age}`;
// };
// Person.prototype.eat = function(food) {
//   this.stomach.push(food);
//   // return??
// };
// Person.prototype.poop = function() {
//   this.stomach = [];
// };

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.stomach = [];
  }
  greet() {
    return `my name is ${this.name} and I am ${this.age}`;
  }
  eat(food) {
    this.stomach.push(food);
    return `i've eaten all this: ${this.stomach}`;
  }
  poop() {
    this.stomach = [];
    return `i've pooped, my stomach is empty!`;
  }
}

const James = new Person("James", 40);

/*

TASK 2

- Build a Car constructor that takes model name and make.
- Give cars the ability to drive a distance.
- By driving a car, the distance driven should be added to an "odometer" property.
- Give cars the ability to crash.
- A crashed car can't be driven any more. Attempts return a string "I crashed at x miles!", x being the miles in the odometer.
- Give cars the ability to be repaired.
- A repaired car can be driven again.

*/

// function Car(make, model) {
//   this.make = make;
//   this.model = model;
//   this.odometer = 0;
//   this.running = true;
// }
// Car.prototype.drive = function(distance) {
//   if (this.running === true) {
//     this.odometer = this.odometer + distance;
//     return `total miles ${this.odometer}`;
//   } else {
//     return `I've been crashed, I've only been driven ${this.odometer} miles`;
//   }
// };
// Car.prototype.crash = function() {
//   this.running = false;
//   return `I've been crashed, I've only been driven ${this.odometer} miles`;
// };
// Car.prototype.repair = function() {
//   this.running = true;
//   return `I've been repaired`;
// };

class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
    this.odometer = 0;
    this.running = true;
  }
  drive(distance) {
    if (this.running === true) {
      this.odometer = this.odometer + distance;
      return `total miles ${this.odometer}`;
    } else {
      return `I've been crashed, I've only been driven ${this.odometer} miles`;
    }
  }
  crash() {
    this.running = false;
    return `I've been crashed and need repair`;
  }
  repair() {
    this.running = true;
    return `I've been repaired`;
  }
}

const car = new Car("ford", "fiesta");

/*

TASK 3

- Build a Baby constructor that subclasses the Person built earlier.
- Babies of course inherit the ability to greet, which can be strange.
- Babies should have the ability to play, which persons don't.
- By playing, a string is returned with some text of your choosing.

*/

// function Baby(name, age) {
//   Person.call(this, name, age);
// }
// Baby.prototype = Object.create(Person.prototype);
// Baby.prototype.play = function() {
//   return `I'm ${this.age} and playing with a knife`;
// };

class Baby extends Person {
  play() {
    return `I'm ${this.age} and playing with a knife`;
  }
}

const newBaby = new Baby("Joe", 1);

/*

TASK 4

Use your imagination and come up with constructors that allow to build objects
With amazing and original capabilities. Build 3 small ones, or a very
complicated one with lots of state. Surprise us!

*/

/*

STRETCH TASK

Object oriented design is commonly used in video games. You will be implementing several constructor functions with their correct inheritance hierarchy.
In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.
At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.

Each constructor function has unique properties and methods that are defined in their block comments below:
*/

/*
=== GameObject ===
* createdAt
* name
* dimensions (These represent the character's size in the video game)
* destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

function GameObject({ createdAt, name, dimensions }) {
  this.createdAt = createdAt;
  this.name = name;
  this.dimensions = dimensions;
}
GameObject.prototype.destroy = function() {
  return `${this.name} was removed from the game.`;
};

/*
=== CharacterStats ===
* healthPoints
* takeDamage() // prototype method -> returns the string '<object name> took damage.'
* should inherit destroy() from GameObject's prototype
*/

function CharacterStats({ createdAt, name, dimensions, healthPoints }) {
  GameObject.call(this, { createdAt, name, dimensions });
  this.healthPoints = healthPoints;
}
CharacterStats.prototype = Object.create(GameObject.prototype);
CharacterStats.prototype.takeDamage = function() {
  return `${this.name} took damage.`;
};

/*
=== Humanoid (Having an appearance or character resembling that of a human.) ===
* team
* weapons
* language
* greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
* should inherit destroy() from GameObject through CharacterStats
* should inherit takeDamage() from CharacterStats
*/

function Humanoid({
  createdAt,
  name,
  dimensions,
  healthPoints,
  team,
  weapons,
  language
}) {
  CharacterStats.call(this, { createdAt, name, dimensions, healthPoints });
  this.team = team;
  this.weapons = weapons;
  this.language = language;
}
Humanoid.prototype = Object.create(CharacterStats.prototype);
Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}`;
};

/*
 * Inheritance chain: GameObject -> CharacterStats -> Humanoid
 * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
 * Instances of CharacterStats should have all of the same properties as GameObject.
 */

// Test you work by un-commenting these 3 objects and the list of console logs below:

const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1
  },
  healthPoints: 5,
  name: "Bruce",
  team: "Mage Guild",
  weapons: ["Staff of Shamalama"],
  language: "Common Tongue"
});
const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2
  },
  healthPoints: 15,
  name: "Sir Mustachio",
  team: "The Round Table",
  weapons: ["Giant Sword", "Shield"],
  language: "Common Tongue"
});
const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4
  },
  healthPoints: 10,
  name: "Lilith",
  team: "Forest Kingdom",
  weapons: ["Bow", "Dagger"],
  language: "Elvish"
});
// console.log(mage.createdAt); // Today's date
// console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
// console.log(swordsman.healthPoints); // 15
// console.log(mage.name); // Bruce
// console.log(swordsman.team); // The Round Table
// console.log(mage.weapons); // Staff of Shamalama
// console.log(archer.language); // Elvish
// console.log(archer.greet()); // Lilith offers a greeting in Elvish.
// console.log(mage.takeDamage()); // Bruce took damage.
// console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
