//  if and else Statement
let balance = 7000;

if (balance > 9000) {
  console.log("You have the money for this trip. Let's go!");
} else if (balance > 8000) {
  console.log("You only have enough money for a staycation");
} else {
  console.log("Sorry, not enough money. Save more!");
}


// Switch Statement
let age = 20;
switch (age) {
  case 10:
    console.log("Age is 10");
    break;
  case 20:
    console.log("Age is 20");
    break;
  default:
    console.log("Age is neither 10 or 20");
}
//  String in Switch
switch (1) {
  case "1":
    console.log("Hello World!");
    break;
}

// Boolean in Switch
switch (0) {
  case true:
    console.log("Hello True!");
    break;
  case false:
    console.log("Bonjour False!");
    break;
  default:
    console.log("No matching case");
}

// problem encounter when ommitted break
switch (0) {
  case 1:
    console.log("Value is one");
  case 0:
    console.log("Value is zero");
  default:
    console.log("No matching case");
}

//  Expression but the case must be exactly with the switch argument
switch (20) {
  case 10 + 10:
    console.log("value is twenty");
    break;
}

//  Example of code switch can't run

switch (age) {
  case age < 10:
    console.log("Value is less than ten");
    break;
  case age <= 20:
    console.log("Value is less than twenty");
    break;
  default:
    console.log("Value is twenty or more");
}

//  random thought
let weekdayNumber = 7;

if (weekdayNumber === 0) {
  console.log("Sunday");
} else if (weekdayNumber === 1) {
  console.log("Monday");
} else if (weekdayNumber === 2) {
  console.log("Tuesday");
} else if (weekdayNumber === 3) {
  console.log("Wednesday");
} else if (weekdayNumber === 4) {
  console.log("Thursday");
} else if (weekdayNumber === 5) {
  console.log("Friday");
} else if (weekdayNumber === 6) {
  console.log("Saturday");
} else {
  console.log("The weekday number is invalid");
}


switch (weekdayNumber) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  default:
    console.log("The weekday number is invalid");
}

// A primary school is giving different rewards based on the student's grade:

// Students that got an A will get a Chocolate
// Students that got a B will get a Cookie
// Students that got a C will get a Candy
// For any other value, print "No reward to give."
// Create a variable named grade that will store the student's grade.

let grade = "E"

switch (grade){
  case "A":
    console.log("Students that got an A will get a Chocolate");
    break;
  case "B":
    console.log("Students that got a B will get a Cookie");
    break;
  case "C":
    console.log("Students that got a C will get a Candy");
    break;
  default:
    console.log("No reward to give.");
}

// Loop Statement
//  FOR Loop

// for (let x = 0; x <= 10; --x) {
//     console.log(x);
//   }

  for (let x = 1; x < 20; x += 1) {
    console.log(x);
  }

//For example, let's say you're writing a program to flip a coin.
//You need to find how many times the coin lands on heads when tossed 10 times.
// You can do it by using the Math.random method:

// When the number is lower than 0.5 you need to increment the tails counter
// When the number is 0.5 and up you must increment the heads counter
  let heads = 0;
let tails = 0;
for (x = 1; x <= 20; x++) {
  if (Math.random() < 0.5) {
    tails++;
  } else {
    heads++;
  }
}

console.log("Tossed the coin ten times");
console.log(`Number of heads: ${heads}`);
console.log(`Number of tails: ${tails}`);

// While 

let i = 0;

while (i <= 10) {
  console.log(`The value of i = ${i}`);
  i+=2;
}

let flips = 0;
let isHeads = false;

while (!isHeads) {
  flips++;
  isHeads = Math.random() < 0.5;
}

console.log(`It took ${flips} flips to land on heads.`);

console.log(" " ==  0)
