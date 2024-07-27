const arr = [23, 4, 5, 633, 79, 2, 1, 78, 9, 2, 3, 3, 2, 2, 2, 2, 2];
arr.sort((a, b) => a - b);

const mean = (sortedArr) => {
   const sumOfAllTheElementsOfAnArr = sortedArr.reduce((acc, value) => acc + value, 0)
   return sumOfAllTheElementsOfAnArr / sortedArr.length;
}


// This function calculates the mode of a sorted array. 
// The mode is the value that appears most frequently in an array.
const mode = (sortedArr) => {
   // Initialize an object to store the count of each number in the array.
   let count = {};

   // Initialize variables to keep track of the maximum count and the corresponding number.
   let maxCount = 0;
   let maxNum = 0;

   // Loop through each number in the sorted array.
   for (let num of sortedArr) {

      // Increment the count of the current number in the count object.
      // If the count for the current number is not yet initialized, initialize it to 1.
      count[num] = count[num] + 1 || 1;

      // If the count for the current number is greater than the current maximum count,
      // update the maximum count and the corresponding number.
      if (count[num] > maxCount) {
         maxCount = count[num];
         maxNum = num;
      }
   }

   // Return the number with the maximum count.
   return maxNum;
}

console.log(mean(arr))
console.log(mode(arr))