def substract_two_matrices(matrix_A, matrix_B):
   """
   This function subtracts matrix_B from matrix_A and returns the result.
   It initializes an empty list to store the result.
   It uses two nested loops to iterate over the rows and columns of the matrices.
   For each element, it subtracts the corresponding elements from matrix_A and matrix_B.
   The result is appended to the result list.
   Finally, it prints the result.
   """
   # Initialize an empty list to store the result
   result = []

   # Iterate over the rows of matrix_A
   for i in range(len(matrix_A)):
      # Initialize an empty list to store the current row
      row = []

      # Iterate over the columns of the current row
      for j in range(len(matrix_A[0])):
         # Subtract the corresponding elements from matrix_A and matrix_B
         difference_element = matrix_A[i][j] - matrix_B[i][j]
         # Append the difference to the current row
         row.append(difference_element)

      # Append the current row to the result list
      result.append(row)

   # Print the result
   print(result)

matrixA = [
   [1, 2, 3],
   [4, 5, 6],
   [7, 8, 9]
]

matrixB = [
   [9, 8, 7],
   [6, 5, 4],
   [3, 2, 1]
]

substract_two_matrices(matrixA, matrixB)
