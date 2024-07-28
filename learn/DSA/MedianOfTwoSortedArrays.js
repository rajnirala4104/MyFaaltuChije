const medianOfTwoSortedArrays = (arr1, arr2) => {
   const singleArr = [...arr1, ...arr2]
   singleArr.sort((a, b) => a - b)

   const evenMedian = (n = singleArr.length) => {

      const nBy2Index = (n / 2); // (n/2)th item
      const nBy2Plus1Index = ((n / 2) + 1) // {(n/2) + 1}th item
      const finalEvenMedianValue = ((singleArr[nBy2Index - 1] + singleArr[nBy2Plus1Index - 1]) / 2); // [(n/2)th item + {(n/2) + 1}th item] / 2

      return parseFloat(finalEvenMedianValue)
   }

   const oddMedian = (n = singleArr.length) => {
      const nThIndex = (n + 1) / 2
      return parseFloat(singleArr[nThIndex - 1]);
   }

   if (singleArr.length % 2 === 0) return evenMedian();
   else return oddMedian()
}

let arr1 = [1, 2]
let arr2 = [3, 4]

console.log(medianOfTwoSortedArrays(arr1, arr2))