const Anumber = new Number(5000000);
console.log(Anumber.toLocaleString()); // Converts a number to a string by using the current or specified locale., default is USA format
console.log(Anumber.toLocaleString("en-IN")); // indian currenct format

console.log(Anumber.toFixed(2)); // Returns a string representing a number in fixed-point notation.
// Number of digits after the decimal point. Must be in the range 0 - 20, inclusive

// --------------- Math -----------
// ----- constants -------
console.log(Math.PI); // value of PI
console.log(Math.SQRT2); // value of square root of 2

// ----- methods --------
console.log(Math.round(5.3)); // 5
console.log(Math.round(5.6)); // 6
console.log(Math.ceil(5.3)); // 6
console.log(Math.floor(5.3)); //5
console.log(Math.abs(-5)); // 5 - converts the negative value into positive

// -------- random -------
console.log(Math.random()); // it'll generate a random number between 0 and 1

const min = 1;
const max = 6;
const randomNumberOfDice = Math.floor(Math.random() * (max - min + 1) + min);
console.log(randomNumberOfDice);
