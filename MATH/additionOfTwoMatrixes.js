
const gettingColumns = (matrix) => {
   let finalArray = [];
   for (let i = 0; i < matrix.length; i++) {
      const row = matrix[i];
      if (i < row.length) {
         finalArray.push(matrix.map(x => x[i]));
      }
   }
   return finalArray;
}

console.log(gettingColumns([[11, 12, 13], [21, 22, 23], [31, 32, 33]]));

// const additionOfTwoMatrixes = (matrix1, matrix2) => {

// }