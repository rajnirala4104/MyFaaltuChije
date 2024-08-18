let num = "97";
console.log(typeof num); // OUTPUT: string

num = Number(num); // this is type conversion in javascript. here we're converting a String into Number
console.log(typeof num); // OUTPUT: number

let num2 = "97asdf";
console.log(typeof num2); // OUTPUT: string

num2 = Number(num2);
console.log(typeof num2); // OUTPUT: number
console.log(num2); // NaN: not a number - i don't know what should i call it a "bug" or "feature"

// similarly if you want to convert a "undefined" into a "number" it'll show "NaN" as value and "number" as type
let undefinedVariable;
undefinedVariable = Number(undefinedVariable);
console.log(typeof undefinedVariable); // OUTPUT: number
console.log(undefinedVariable); // OUTPUT: NaN

// some real life example
let userNumber1 = 45;
let userNumber2InString = "45";
console.log(userNumber1 + userNumber2InString); // OUTPUT: 4545
userNumber2InString = Number(userNumber2InString);
console.log(userNumber1 + userNumber2InString); // OUTPUT: 90
