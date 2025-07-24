const reverseStr = (str) => {
   // ---- ALGORITHM ---- 
   // step 1 - take a perameter as string (str)
   // step 2 - create a variable where our final ouput will store (finalStr) and we'll modify this.
   // step 3 - start the for loop to iterate the string (str)
   // step 4 - get the one by one single charector from backward
   // step 5 - store that single charector to that (finalStr) variable
   // step 6 - return our (finalStr) variable

   let finalStr = "";
   for (let i = 0; i < str.length; i++) {
      const char = str[str.length - (i+1)];
      finalStr += char
   }

   return finalStr;
}
 

console.log(reverseStr("raj"))
