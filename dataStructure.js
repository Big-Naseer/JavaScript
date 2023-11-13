let listOfdata = ["number", "String", "Boolean", "undifined"];
console.log(listOfdata[2]);

let mixArray = ["bird", true, 24, 2.75];
console.log(mixArray[2]);

mixArray[1] = false;
console.log(mixArray);

mixArray.push("Car");
console.log(mixArray);

mixArray.pop();
console.log(mixArray);

mixArray.unshift("shoe");
console.log(mixArray);

mixArray.shift();
console.log(mixArray);

let birds = ["Owl", "Eagle", "Parrot", "Falcon"];
console.log(birds[0]);

let pos = birds.indexOf("Owl");
console.log(pos);

console.log(birds.length);

// Exercise
// Create an array named colors that include the 'red', 'green, and 'blue' colors.

// First, add a 'black' color after the last index of the array. Then print the array.

// Next, remove the value 'red' and swap the position of 'green' and 'blue'. Print the array.

// Finally, add the color 'yellow' on the first index of the array, then print the array.

let colors = ["red", "green", "blue"];

colors.push("black");
console.log(colors);

colors.shift();
const swapElements = (array, index1, index2) => {
  let temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
};
swapElements(colors, 0, 1);
console.log(colors);

colors.unshift("yellow");
console.log(colors);
