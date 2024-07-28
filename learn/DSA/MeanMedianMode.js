const arr = [1, 3, 2, 4];
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

const median = (sortedArr) => {

   const evenMedian = (n = sortedArr.length) => {
      const nBy2Index = (n / 2); // (n/2)th item
      const nBy2Plus1Index = ((n / 2) + 1) // {(n/2) + 1}th item
      const finalEvenMedianValue = (((sortedArr[nBy2Index - 1] + sortedArr[nBy2Plus1Index - 1])) / 2); // [(n/2)th item + {(n/2) + 1}th item] / 2

      return parseFloat(finalEvenMedianValue)
   }
   const oddMedian = (n = sortedArr.length) => {
      const nthIndex = (n + 1) / 2
      return parseFloat(sortedArr[nthIndex - 1])
   }

   if (sortedArr.length % 2 === 0) return evenMedian()
   else return oddMedian()

}

// console.log(mean(arr))
// console.log(mode(arr))
console.log(median(arr))