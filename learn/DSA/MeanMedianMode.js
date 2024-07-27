const arr = [23, 4, 5, 633, 79, 2, 1, 78, 9, 2, 3, 3, 2, 2, 2, 2, 2];
arr.sort((a, b) => a - b);

const mean = (sortedArr) => {
   const sumOfAllTheElementsOfAnArr = sortedArr.reduce((acc, value) => acc + value, 0)
   return sumOfAllTheElementsOfAnArr / sortedArr.length;
}


const mode = (sortedArr) => {
   let repeatedElement = {};
   sortedArr.map(el => repeatedElement[el] = repeatedElement[el] + 1 || 1)

   const max = Math.max(...Object.values(repeatedElement))
   const lagestKey = Object.keys(repeatedElement).filter(key => repeatedElement[key] === max)

   return Number(lagestKey[0])
}

console.log(mean(arr))
console.log(mode(arr))