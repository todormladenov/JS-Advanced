function solve() {
    let btnElements = document.querySelectorAll('button');

    let checkBtnElement = btnElements[0];
    let clearBtnElement = btnElements[1];

    checkBtnElement.addEventListener('click', check);
    clearBtnElement.addEventListener('click', clear);

    function check(){
        let tdElementsArr = Array.from(document.querySelectorAll('tbody tr td input'));
        let rows = Array.from(document.querySelectorAll('tbody tr')).length;

        let matrix = []

        for (let i = 0; i < tdElementsArr.length; i++){
            let result = [];
            for (let j = 0; j < rows; j++){
                result.push(tdElementsArr[0].value);
                tdElementsArr.shift();
            }
            matrix.push(result);
        }

        for (let i = 0; i < matrix.length; i++){
            for (let j = 0; j < matrix.length; j++){
                if (matrix[i][j] === matrix[i][j+1]){
                    break;
                }
                if (matrix[i][j] === matrix[i+1][j]) {
                    
                }
            }
        }
    }

    function clear(){

    }
    
}