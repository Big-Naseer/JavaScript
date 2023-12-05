let x = 4;
let y = 5;
y++
let z = x+=y;

console.log(z)
x++; // Increment x by 1
console.log(x); // Outputs: 6


const obj = { name: 'Sling Academy', address: 'Hidden Forest' };
obj.newProperty = 'New Property';
console.log(obj);

let prime = [1,2,3,4,5,6,7,8,9,0]

// for(i=0; i< prime.length; i++){
//     prime[i] + 1

// } return prime

for (let i = 0; i < prime.length; i++) {
    const element = prime[i];
    
}

return prime[1]

function add(x, y){
	return x + y
}


function multiply(a, b, c){ // a = 1, b = 2, c = 3
	const num1 = add(a, b) // num1 = add(1, 2) = 3
	const num2 = add(b, c) // num2 = add(2, 3) = 5
    
	return num1 * num2 // 15
}

multiply(1, 2, 3)
