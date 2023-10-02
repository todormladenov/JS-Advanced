function magicMatrices(matrix) {

    let isMagic = true;

    for(let row = 0; row < matrix.length - 1; row++){
        let sumOfFirstRow = matrix[row].reduce((a, b) => a + b);
        let sumOfSecondRow = matrix[row + 1].reduce((a, b) => a + b);
        let sumOfFirstCol = 0;
        let sumOfSecondCol = 0;

        for(let col = 0; col < matrix.length; col++){
            sumOfFirstCol += matrix[col][row];
            sumOfSecondCol += matrix[col][row + 1];
            
        }

        if (sumOfFirstRow !== sumOfSecondRow || sumOfFirstCol !== sumOfSecondCol) {
            isMagic = false;
            break;
        }
    }

    if (isMagic) {
        console.log(isMagic);
    } else {
        console.log(isMagic);
    }


}
magicMatrices([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]])
magicMatrices([[11, 32, 45],
[21, 0, 1],
[21, 1, 1]])
magicMatrices([[1, 0, 0],
[0, 0, 1],
[0, 1, 0]])
