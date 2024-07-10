def add_two_matrices(matrix_A, matrix_B):
    """
    This function adds two matrices together and returns the result.
    It first checks if the matrices are the same size. If not, it raises a ValueError.
    Then it initializes an empty list to store the result.
    It uses two nested loops to iterate over the rows and columns of the matrices.
    For each element, it adds the corresponding elements from matrix_A and matrix_B.
    The result is appended to the result list.
    Finally, it prints the result.
    """
    # Check if the matrices are the same size
    if len(matrix_A) != len(matrix_B) or len(matrix_A[0]) != len(matrix_B[0]):
        raise ValueError("The matrices are not the same size")

    # Initialize an empty list to store the result
    result = []

    # Iterate over the rows of matrix_A
    for i in range(len(matrix_A)):
        # Initialize an empty list to store the current row
        row = []

        # Iterate over the columns of the current row
        for j in range(len(matrix_A[0])):
            # Add the corresponding elements from matrix_A and matrix_B
            sum_element = matrix_A[i][j] + matrix_B[i][j]
            # Append the sum to the current row
            row.append(sum_element)

        # Append the current row to the result list
        result.append(row)

    # return the result
    return result

      
   
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

print(add_two_matrices(matrixA, matrixB))