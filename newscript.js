let message = "Hello World!";
let hello;
console.log(message);
console.log(hello);

hello = message;

console.log(message);
console.log(hello);

let admin;
let names = "Nasiru";
console.log(admin);
console.log(names);
admin = names;
console.log(admin);

let ourPlanetName;
let currentUserName;

// console.log(typeof variable);

// function hoist() {
//     a = 20;
//     var b = 100;
//   }

//   hoist();

//   console.log(a);
/* 
  Accessible as a global variable outside hoist() function
  Output: 20
  */

//   console.log(b);
/*
  Since it was declared, it is confined to the hoist() function scope.
  We can't print it out outside the confines of the hoist() function.
  Output: ReferenceError: b is not defined
  */
//   console.log(hoist()); // Output: undefined

//   var hoist = 'The variable has been hoisted.';

// function hoist() {
//   let message = "Hoisting is all the rage!";
//   return message;
// }

// hoist();
// 'use strict';

// let hoist;

// console.log(hoist); // Output: ReferenceError: hoist is not defined ...
// hoist = 'The variable has been hoisted.';

// const PI = 3.142;

// PI = 22/7; // Let's reassign the value of PI

// console.log(PI); // Output: TypeError: Assignment to constant variable.

// console.log(hoist); // Output: ReferenceError: hoist is not defined
// const hoist = 'The variable has been hoisted.';
// function getCircumference(radius) {
//     console.log(circumference)
//     circumference = PI*radius*2;
//     const PI = 22/7;
//   }
  
//   getCircumference(2)

// const PI;
// console.log(PI); // Ouput: SyntaxError: Missing initializer in const declaration
// PI=3.142;

// hoisted(); // Output: "This function has been hoisted."

// function hoisted() {
//   console.log('This function has been hoisted.');
// };

/*var double;

function double(num) {
  return (num*2);
}

console.log(typeof double); // Output: number*/

/*var Frodo = new Hobbit();
Frodo.height = 100;
Frodo.weight = 300;
console.log(Frodo); // Output: ReferenceError: Hobbit is not defined

class Hobbit {
    constructor(height, weight) {
      this.height = height;
      this.weight = weight;
    }
  } */

  class Hobbit {
    constructor(height, weight) {
      this.height = height;
      this.weight = weight;
    }
  }
  
  var Frodo = new Hobbit();
  Frodo.height = 100;
  Frodo.weight = 300;

  var Simg = new Hobbit();
  Simg.height = 300;
  Simg.weight = 600;
  console.log(Frodo); // Output: { height: 100, weight: 300 }
  console.log(Simg);
  console.log(Hobbi);