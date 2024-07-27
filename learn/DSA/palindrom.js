// This function checks if a given number is a palindrome or not.
// It takes a single parameter, 'num', which is the number to be checked.
// It returns a boolean value: true if 'num' is a palindrome, and false otherwise.
const checkPalindromNumber = (num) => {

   // Initialize an empty string to store the reversed number.
   let reversedNum = ""

   // Loop through each digit of 'num' and append it to 'reversedNum' in reverse order.
   // The loop starts from the last digit and goes up to the first digit.
   for (let i = 1; i <= num.toString().length; i++)  reversedNum += num.toString()[num.toString().length - i]

   // Compare the reversed number with the original number.
   // If they are equal, return true (indicating that 'num' is a palindrome).
   // Otherwise, return false.
   if (Number(reversedNum) === num) return true

   // If the loop completes without finding a match, return false.
   return false

}

console.log(checkPalindromNumber(121))