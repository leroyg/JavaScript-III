/* ==== Prototypes Challenge

  1. Study the console.log() and object method invocations at the bottom of the page. Update the Animal and Dog constructors so that the logs and methods match the commented result next to them.
  
  2. Stretch Challenge: Create a new constructor function called Cat. Add properties and a method unique to a cat.  Make sure cat inherits from Animal so you can use all of the properties and methods found there.


You can check your work here:

https://codepen.io/lambdaschool/pen/yxjRJa

*/


function Animal(attributes) {
    this.weight = attributes.weight;
    this.height = attributes.height;
    this.food = attributes.food;
    this.animalCommonName = attributes.animalCommonName;
  }
  
  Animal.prototype.eat = function() {
    console.log(`The ${this.animalCommonName} eats ${this.food}`);
  }

  Animal.prototype.speak = function() {
    console.log(`${this.name} says: ${this.talk}`);
}

  function Dog(dogAttributes) {
    // Connect the attributes so we can use the this keyword
    Animal.call(this, dogAttributes);
    this.name = dogAttributes.name;
    this.talk = dogAttributes.talk;
  }
  // Set up our __proto__ inheritance to Animal
  Dog.prototype = Object.create(Animal.prototype);

//   Dog.prototype.speak = function() {
//     console.log(`${this.name} says: ${this.talk}`);
// }
  
  const dog = new Dog({
    'name': 'Dr. Doggo',
    'animalCommonName': "dog",
    'weight': 40,
    'height': 12,
    'food': 'meat',
    'talk': 'Woof!'
  });
  
  console.log(dog.animalCommonName); // "dog"
  dog.eat(); // "The dog eats meat"
  dog.speak(); // "Dr. Doggo says: Woof!"


  function Cat(catAttributes) {
      Animal.call(this, catAttributes);
      this.name = catAttributes.name;
      this.talk = catAttributes.talk;
      this.favoriteToy = catAttributes.favoriteToy;
  }

    // Set up our __proto__ inheritance to Animal
    Cat.prototype = Object.create(Animal.prototype);

  const cat = new Cat({
    'name': 'Senora Feline',
    'animalCommonName': "cat",
    'weight': 22,
    'height': 10,
    'food': `Cat Chow`,
    'talk': 'Meeeowwww',
    'favoriteToy': `Ball`
  });

  console.log(cat.animalCommonName); // "dog"
  cat.eat(); // "The dog eats meat"
  cat.speak(); // "Dr. Doggo says: Woof!"