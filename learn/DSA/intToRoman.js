/**
 * 
 * @param {number} num 
 * @returns {string}
 */

// This function converts a positive integer into a Roman numeral string.
// It takes a single parameter, 'num', which is the number to be converted.
// It returns a string representing the Roman numeral equivalent of 'num'.
const intToRoman = (num) => {
   // Define an object that maps Roman numeral symbols to their corresponding
   // integer values.
   const romanSymbolObj = {
      V̅: 5000,
      M: 1000,
      CM: 900,
      CD: 400,
      D: 500,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
   }

   // Initialize an empty string to store the final Roman numeral value.
   let finalValue = ''

   // Iterate through each key-value pair in the romanSymbolObj object.
   Object.entries(romanSymbolObj).forEach(([letter, n]) => {
      console.log([letter, n])

      // Calculate the number of times the current Roman symbol should be repeated.
      const repeatCount = Math.floor(num / n)

      // Append the current Roman symbol to the finalValue string the appropriate number of times.
      finalValue += letter.repeat(repeatCount)

      // Subtract the current value from the input number to prepare for the next iteration.
      num %= n
   })

   // Return the final Roman numeral value.
   return finalValue
}

console.log(intToRoman(3749))