/**
 * This function takes two matrices as input: matrixA and matrixB.
 * It subtracts each element of matrixB from the corresponding element of matrixA.
 * The resulting matrix is then logged to the console.
 * 
 * @param {Array<Array<number>>} matrixA - The first matrix to be subtracted.
 * @param {Array<Array<number>>} matrixB - The matrix to subtract from matrixA.
 */
const substractionOfTwoMatrices = (matrixA, matrixB) => {

   // Initialize an empty array to store the resulting matrix.
   let result = [];

   // Loop through each row of matrixA.
   for (let i = 0; i < matrixA.length; i++) {

      // Initialize an empty array to store the resulting row.
      result[i] = [];

      // Loop through each element in the row.
      for (let j = 0; j < matrixA[i].length; j++) {

         // Subtract the corresponding element of matrixB from the element of matrixA.
         // Store this difference in the resulting matrix.
         result[i][j] = matrixA[i][j] - matrixB[i][j];
      }
   }

   // Log the resulting matrix to the console.
   console.log(result)
}

const matrixA = [
   [1, 2, 3],
   [4, 5, 6],
   [7, 8, 9]
]

const matrixB = [
   [9, 8, 7],
   [6, 5, 4],
   [3, 2, 1]
]

substractionOfTwoMatrices(matrixA, matrixB);