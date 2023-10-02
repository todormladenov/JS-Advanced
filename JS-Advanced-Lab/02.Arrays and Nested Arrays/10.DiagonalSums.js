function diagonalSums(matrix) {

    let diagonalOne = 0;
    let diagonalTwo = 0;
    let startIndex = 0;
    let lastIndex = matrix[0].length - 1;

    for (let i = 0; i < matrix.length; i++){
      diagonalOne += matrix[i][startIndex++];
      diagonalTwo += matrix[i][lastIndex--];
    }

    console.log(`${diagonalOne} ${diagonalTwo}`);

}
diagonalSums([[20, 40],
[10, 60]])
diagonalSums([[3, 5, 17],
[-1, 7, 14],
[1, -8, 89]])