const MY_OBJECT = { key: "value" };
MY_OBJECT.key = "otherValue";

console.log(MY_OBJECT);

const fish = ["Lion", , "Angel"];
console.log(fish);

// function myFunc(theObject) {
//     theObject.make = "Toyota";
//   }

//   const mycar = {
//     make: "Honda",
//     model: "Accord",
//     year: 1998,
//   };

//   console.log(mycar.make); // "Honda"
//   myFunc(mycar);
//   console.log(mycar.make); // "Toyota"

/*function map(f, a) {
    const result = new Array(a.length);
    for (let i = 0; i < a.length; i++) {
      result[i] = f(a[i]);
    }
    return result;
  }
  
  const cube = function (x) {
    return x * x * x;
  };
  
  const numbers = [0, 1, 2, 5, 10];
  console.log(map(cube, numbers)); // [0, 1, 8, 125, 1000]

  function showLength(name, callback) { 
    callback(name); 
  } 
    
  // function expression `nameLength` 
  const nameLength = function (name) { 
    console.log(`Given Name ${name} which  
    is ${name.length} chars long`); 
  }; 
    
  // Passing `nameLength` as a callback function 
  showLength("GeeksforGeek", nameLength); */

// understanding splice()
// const arr = [0, 1, 2, 3, 5, 6, 7 , 8, 9];
// arr.splice(4, 3, 4);
// console.log(arr)

// const

// const greet = contr('hi');
// const gretwith = greet('Nas');
// console.log(gretwith);

// function printAr(...args) {
//   console.log(args);;
// }
// printAr(1,2,3,4,5)

// let user = {
//   name: "John",
//   age: 30
// };

// let key = ("name");

// // access by variable
// console.log( user[key] );

// let fruit =("apple");

// let bag = {
//   [fruit]: 5, // the name of the property is taken from the variable fruit
// };

// console.log( bag.apple); // 5 if fruit="apple"

let fruit = ("apple");
let bag = {};

// take property name from the fruit variable
bag[fruit] = undefined;

console.log(bag.fruit);

function makeUser(name, age) {
  return {
    name: name,
    age: age,
    // ...other properties
  };
}

let users = makeUser("John", 30);
console.log(users);

// let obj = {
//   for: 1,
//   let: 2,
//   return: 3
// };

// console.log( obj.for + obj.let + obj.return );  

let obj = {};
obj.__proto__ = 5; // assign a number
console.log(obj);

// let animal = {
//   eats: true
// };
// let rabbit = {
//   jumps: true
// };

// rabbit.__proto__ = animal; // (*)

// we can find both properties in rabbit now:
// console.log( rabbit);
// console.log( rabbit.eats ); // true (**)
// console.log( rabbit.jumps ); // true

// let animal = {
//   eats: true,
//   walk() {
//     console.log("Animal walk");
//   }
// };

// let rabbit = {
//   jumps: true,
//   __proto__: animal
// };

// // walk is taken from the prototype

// // rabbit.walk(); // Animal walk

// let longEar = {
//   earLength: 10,
//   __proto__: rabbit
// };

// // walk is taken from the prototype chain
// longEar.walk(); // Animal walk
// console.log(longEar.eats); // true (from rabbit)

// let animal = {
//   eats: true,
//   walk() {
//     /* this method won't be used by rabbit */
//   }
// };

// let rabbit = {
//   __proto__: animal
// };

// rabbit.walk = function() {
//   console.log("Rabbit! Bounce-bounce!");
// };

// rabbit.walk(); // Rabbit! Bounce-bounce!


let user = {
  name: "John",
  surname: "Smith",

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },

  get fullName() {
    return `${this.name} ${this.surname}`;
  }
};

let admin = {
  __proto__: user,
  isAdmin: true
};

console.log(admin.fullName); // John Smith (*)

// setter triggers!
admin.fullName = "Alice Cooper"; // (**)

console.log(admin.fullName); // Alice Cooper, state of admin modified
console.log(user.fullName); // John Smith, state of user protected

// animal has methods
// let animal = {
//   walk() {
//     if (!this.isSleeping) {
//       alert(`I walk`);
//     }
//   },
//   sleep() {
//     this.isSleeping = true;
//   }
// };

// let rabbit = {
//   name: "White Rabbit",
//   __proto__: animal
// };

// // modifies rabbit.isSleeping
// rabbit.sleep();

// // alert(rabbit.isSleeping); // true
// // alert(animal.isSleeping);

// let animal = {
//   jumps: null
// };
// let rabbit = {
//   __proto__: animal,
//   jumps: true
// };

// console.log( rabbit.jumps ); // ? (1)

// delete rabbit.jumps;

// console.log( rabbit.jumps ); // ? (2)

// delete animal.jumps;

// console.log( rabbit.jumps ); // ? (3)

let animal = {
  eat() {
    this.full = true;
  }
};

let rabbit = {
  __proto__: animal
};

console.log(rabbit.eat())
rabbit.eat()