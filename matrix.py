
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]]

# one liner to create a zero matrix from a given matrix
# Assumes that the matrix is non-empty
zero_matrix = [[0 for _ in range(len(matrix[0]))] for _ in range(len(matrix))]


def printRows(matrix):
    print("Rows:")
    for row in matrix:
        print(row)

def printColumns(matrix):
    print("Columns:")
    num_columns = len(matrix[0])
    num_rows = len(matrix)
    for i in range(num_columns):
        for j in range(num_rows):
            print(matrix[j][i], end=" ")
        print()

printRows(matrix)
printColumns(matrix)
