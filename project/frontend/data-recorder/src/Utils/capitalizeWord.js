export function capitalizeWord(word) {
   // Check if the input is a valid string
   if (typeof word !== "string" || word.length === 0) {
      return "Invalid input";
   }

   // Capitalize the first letter and concatenate the rest of the word
   return word.charAt(0).toUpperCase() + word.slice(1);
}
