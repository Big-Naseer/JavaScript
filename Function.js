// function messTime(ps) {
//   console.log(ps);
// }

// messTime("i love you");
// messTime("i miss you");
// messTime("Allah is great");

function checkDriverAge() {
  var age = prompt("What is your age?");

  if (Number(age) < 18) {
    alert("Sorry, you are too yound to drive this car. Powering off");
  } else if (Number(age) > 18) {
    alert("Powering On. Enjoy the ride!");
  } else if (Number(age) === 18) {
    alert("Congratulations on your first year of driving. Enjoy the ride!");
  }
}
greet("Nathan", "rainy");
function greet(name, weather) {
  console.log(`Hello, ${name}!`);
  console.log(`It's ${weather} today, right?`);
}


function add(x, y){
	return x + y
}


function multiply(a, b, c){ // a = 1, b = 2, c = 3
	const num1 = add(a, b) // num1 = add(1, 2) = 3
	const num2 = add(b, c) // num2 = add(2, 3) = 5
    
	return num1 * num2 // 15
}

multiply(1, 2, 3)

console.log(multiply(1,2, 3))

//  Example of default and non-default parameter

function greet(weather, name = "Nathan") {
    console.log(`Hello, ${name}!`);
    console.log(`It's ${weather} today, right?`);
  }
  
  greet("sunny");

  function checkAge(age) {
    if (age > 18) {
      return "You may get a car license";
    }
    return "You may not get a car license yet";
  }
  
  // console.log(checkAge(20));
  console.log(checkAge(15));

  function greet(name) {
    console.log(`Hello! ${name}`);
    return;
    console.log("Good bye!");
  }
  
  greet("love")