function equalNeighbors(inputAsMatrix) {

    let result = 0

    for (let i = 0; i < inputAsMatrix.length; i++) {

        for (let j = 0; j < inputAsMatrix[i].length; j++) {
            if (i < inputAsMatrix.length - 1) {
                if (inputAsMatrix[i][j] === inputAsMatrix[i + 1][j]) {
                    result++;
                }   
            }

            if (inputAsMatrix[i][j] === inputAsMatrix[i][j + 1]) {
                result++;
            }
        }
    }

    console.log(result);

}
equalNeighbors([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']])
equalNeighbors([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']])
equalNeighbors([[2, 2, 5, 7, 4],
[4, 0, 5, 3, 4],
[2, 5, 5, 4, 2]])