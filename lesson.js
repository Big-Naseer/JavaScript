
// function num(a,b){
// let power = 1
// for (let i =0; i<b; i++){
// power*=a
// }
// return power
// }
// console.log(num(2,2))


// function prime(numb){
//     if (numb > 1 && numb % 2 != 0) {
//         return true
//     } return numb === 2;
// }

// if (prime(5)){
//     console.log(`This is a prime number`);
// } 

// else {
//     console.log(`no`)
// }

// function arraysum(numList){
// let sum = 0
// for(let numb of numList){
//     sum+=numb;
// }
// return sum
// }
// console.log(arraysum([1,2,3,4,5,6,7,8,9,0]))

// const printArgs = function () {
//   console.log(arguments);
// };

// printArgs(1, 2, 3);

// function calculateSquare(side) {
    
    // squareSide = side
    // squareArea = side * side
    // squarePerimeter = 4 * side
//     return side;
//     }
    // calculateSquare(8);
    // console.log(`The square side is: ${squareSide}`);
    // console.log(`The area of the square is: ${squareArea}`)
    // console.log(`The perimeter of the square: ${squarePerimeter}`)

//     const calculateSquare = side => {
//         let squareSide = side;
//         let squareArea = side * side;
//         let squarePerimeter = 4 * side;
//         return {squareSide, squareArea, squarePerimeter};
//  };
//     let result = calculateSquare(8);
//     console.log(`The square side is: ${result.squareSide}`);
//     console.log(`The area of the square is: ${result.squareArea}`)
//     console.log(`The perimeter of the square: ${result.squarePerimeter}`)

    // function calculateSquare(side) {
    //     let squareSide = side;
    //     let squareArea = side * side;
    //     let squarePerimeter = 4 * side;
    //     return { squareSide, squareArea, squarePerimeter };
    // }
    
    // // Call the function and store the returned values in a variable
    // let result = calculateSquare(8);
    
    // // Access the values from the result object
    // console.log(`The square side is: ${result.squareSide}`);
    // console.log(`The square area is: ${result.squareArea}`);
    // console.log(`The square perimeter is: ${result.squarePerimeter}`);

    // const calculateSquare = side => {
    //     let squareSide = side;
    //     let squareArea = side * side;
    //     let squarePerimeter = 4 * side;
    //     return { squareSide, squareArea, squarePerimeter };
    // };
    
    // // Call the function and store the returned values in a variable
    // let result = calculateSquare(8);
    
    // // Access the values from the result object
    // console.log(`The square side is: ${result.squareSide}`);
    // console.log(`The area of the square is: ${result.squareArea}`);
    // console.log(`The perimeter of the square is: ${result.squarePerimeter}`);
    
    // Function passed as an argument
function calculate(num1, num2, operation) {
    return operation(num1, num2);
  }
  
  const sub = function(a, b) {
    return a - b;
  };
  
  console.log(calculate(5, 3, sub)); // Outputs: 8
  