// Creating a demo matrix
let demoMatrix = [[11, 12, 13], [21, 22, 23], [31, 32, 33], [41, 42, 43]];

// Creating an empty array to store columns
let columns = [];

// Looping through each row of the matrix
for (let i = 0; i < demoMatrix.length; i++) {
   const row = demoMatrix[i];

   // Printing each row
   console.log(`row ${i}: ${row}`);

   // Checking if the current row index is less than the length of the current row
   // If true, then the current row is being pushed into the 'columns' array
   if (i < row.length) {
      // Using map() method to create a new array where each element is the element at index 'i' in each sub-array of 'demoMatrix'
      columns.push(demoMatrix.map(x => x[i]));
   }
}

// Printing the 'columns' array
console.log(columns);
