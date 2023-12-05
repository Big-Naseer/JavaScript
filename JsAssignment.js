function squareOfANumber(a, b) {
  let power = 1;
  for (let i = 0; i < b; i++) {
    power *= a;
  }

  return power;
}

//usage
console.log(squareOfANumber(2, 4));

function primeNumberChecker(number) {
  if (number > 1 && number && number !== 2 && number % 2 !== 0) {
    return true;
  }

  // this condition will return true if number is 2 which is
  // a prime number and false otherwise
  else return number === 2;
}

// usage
if (primeNumberChecker(2)) {
  console.log("It's a prime number");
} else {
  console.log("It's not a prime number");
}

function sumNumbOfArray(numbArray) {
  let sum = 0;
  for (let index in numbArray) {
    sum += numbArray[index];
  }
  return sum;
}

// use case

console.log(sumNumbOfArray([1, 2, 3, 4, 5, 6, 7, 8, 9]));

function reverseSentence(sentence) {
  // convert the sentence to an array of words
  let wordArray = sentence.split(" ");

  // now loop through the array of words
  for (let i = 0; i < wordArray.length; i++) {
    // now convert each word to an array of chars
    let charArray = wordArray[i].split("");

    let startIndex = 0;
    let endIndex = charArray.length - 1;

    while (startIndex < endIndex) {
      let temp = charArray[startIndex];

      // now start the switching of index
      charArray[startIndex] = charArray[endIndex];
      charArray[endIndex] = temp;

      startIndex++;
      endIndex--;
    }

    // our charArray has been successfully reversed just join it and assign it to word[1]
    wordArray[i] = charArray.join("");
  }

  //
  return wordArray.join(" ");
}

console.log(reverseSentence("Hello World"));

function longestWordsInASentence(sentence) {
  // convert the sentence to an array of words
  let words = sentence.split(" ");

  // now that we have the array of words, we can check the length of
  // each word and arrange them in descending order
  words.sort((a, b) => b.length - a.length);

  // use the join method

  // make a variable that will store in the largest words
  let longestWords = [];
  // now that we have sorted the array in descending order we can use an if
  // statement to make sure that the sentence is more than 3 words
  if (words.length > 2) {
    // now we can use a loop to add the hash(#) to the 3 longest words
    for (let i = 0; i < 3; i++) {
      words[i] = "#" + words[i];
      longestWords.push(words[i]);
    }
  }

  if (words.length > 0) {
    return longestWords.join(" ");
  } else return "The sentence is too short";
}

console.log(longestWordsInASentence("The elephant in the building"));

function charFrequency(str) {
  // create an empty object
  let frequencyObj = {};

  // now we can loop through each of the string and
  // check if they are inside the obj

  for (let char of str) {
    // check if the char exits in the object
    if (char in frequencyObj) {
      // add one to the value of the key
      frequencyObj[char]++;
    } else {
      // it does not exit so set the value to 1
      frequencyObj[char] = 1;
    }
  }

  return frequencyObj;
}

console.log(charFrequency("Hello"));
