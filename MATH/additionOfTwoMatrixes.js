// This function adds two matrices together. It takes two parameters:
// matrixA and matrixB. Both parameters should be 2D arrays representing
// matrices. The function throws an error if the matrices have different
// dimensions (i.e., they don't have the same number of rows and columns).
// If the matrices are valid, the function returns a new matrix that is the
// sum of matrixA and matrixB.
/**
 * 
 *  @param {Array<Array<number>>} matrixA - The first matrix to be subtracted.
 * @param {Array<Array<number>>} matrixB - The matrix to subtract from matrixA.
 */
const addTwoMatrices = (matrixA, matrixB) => {

   // Check if the matrices have the same dimensions.
   // If they don't, throw an error.
   if (matrixA.length !== matrixB.length || matrixA[0].length !== matrixB[0].length) {
      throw new Error("Matrices must have the same dimensions");
   }

   // Initialize an empty array to store the resulting matrix.
   let result = [];

   // Loop through each row of matrixA.
   for (let i = 0; i < matrixA.length; i++) {

      // Initialize an empty array to store the resulting row.
      result[i] = [];

      // Loop through each element in the row.
      for (let j = 0; j < matrixA[i].length; j++) {

         // Calculate the sum of the corresponding elements in matrixA and matrixB.
         // Store this sum in the resulting matrix.
         result[i][j] = matrixA[i][j] + matrixB[i][j];
      }
   }

   // Return the resulting matrix.
   return result;
}

// Example matrices
let matrixA = [
   [1, 2, 3],
   [4, 5, 6],
   [7, 8, 9]
];

let matrixB = [
   [9, 8, 7],
   [6, 5, 4],
   [3, 2, 1]
];

console.log(addTwoMatrices(matrixA, matrixB));
