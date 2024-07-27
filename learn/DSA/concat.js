
// merge two sorted array without .concat() method
const mergeTwoSortedArray = (arr1, arr2) => {
   let finalArray = [];

   for (const item of arr1) finalArray.push(item)
   for (const item of arr2) finalArray.push(item)

   finalArray.sort((a, b) => a - b);

   return finalArray;
}

console.log(mergeTwoSortedArray([1, 2, 3], [1, 4, 5]));
