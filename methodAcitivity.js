// this is activity is to test our knowledge on the various methods in javascript
// below are some of the methods we used for the activity
let isString = "    character    "

let isStringLen =  isString.length
console.log(isStringLen)

let concatIsString = isString.concat(" of an animal")
console.log(concatIsString)

let sliceIsString = isString.slice(3, 7)
console.log(sliceIsString)

let repeatIsString = isString.repeat(3)
console.log(repeatIsString)

let valueOfIsString = isString.valueOf()
console.log(valueOfIsString)

let substringOfIsString = isString.substring(3 , 7)
console.log(substringOfIsString)

let isStringEndsWith = isString.endsWith("r")
console.log(isStringEndsWith)

let isStringLastIndexOf = isString.lastIndexOf("ter", 4)  // TODO read the documentation on this method
console.log(isStringLastIndexOf)

let isStringIncludes = isString.includes("z")
console.log(isStringIncludes)

let trimmedIsString = isString.trim()
console.log(trimmedIsString)

let loweredCasedIsString = isString.toLowerCase()
console.log(loweredCasedIsString)

let upperCasedIsString = isString.toUpperCase()
console.log(upperCasedIsString)

let isStringAt = isString.at(5)
console.log(isStringAt)

let isStringPadEnd = isString.padEnd(12, "istics")
console.log(isStringPadEnd)

let trimIsStringLeft = isString.trimStart()
console.log(trimIsStringLeft)

//number method
let age = 9
let squareRootOfAge = Math.sqrt(age)
console.log(squareRootOfAge)


// boolean
let isQualify = true
isQualify.valueOf()