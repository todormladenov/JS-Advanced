function solve() {
    let btnElements = document.querySelectorAll('button');

    let trElements = document.querySelectorAll('tbody tr');
    let tdElements = document.querySelectorAll('tbody tr td');
    let inputElements = document.querySelectorAll('tbody tr td input');
    let tableElement = document.querySelector('table');
    let pCheckElement = document.querySelector('div p');

    let checkBtnElement = btnElements[0];
    let clearBtnElement = btnElements[1];

    checkBtnElement.addEventListener('click', check);
    clearBtnElement.addEventListener('click', clear);

    function check() {

        let cols = tdElements.length / trElements.length;
        let rows = tdElements.length / cols;

        let inputElementsArray = Array.from(inputElements);

        let rowOne = inputElementsArray.splice(0, rows);
        let rowTwo = inputElementsArray.splice(0, rows);
        let rowThree = inputElementsArray.splice(0, rows);

        let matrix = [];
        matrix.push(rowOne);
        matrix.push(rowTwo);
        matrix.push(rowThree);

        let isSolved = true;

        for (let i = 0; i < cols; i++) {
            if (rowOne[i].value === rowTwo[i].value || rowOne[i].value === rowThree[i].value || rowTwo[i].value === rowThree[i].value) {
                isSolved = false;
            }

            for (let j = 0; j < rows; j++) {
                let areEqual = matrix[j].every((num, index) => num.value === matrix[j][i].value);

                if (areEqual) {
                    isSolved = false;
                }
            }

            if (!isSolved) {
                break;
            }
        }

        if (isSolved) {
            tableElement.style.border = '2px solid green';
            pCheckElement.textContent = 'You solve it! Congratulations!';
            pCheckElement.style.color = 'green';
        } else {
            tableElement.style.border = '2px solid red';
            pCheckElement.textContent = 'NOP! You are not done yet...';
            pCheckElement.style.color = 'red';
        }



    }

    function clear() {
        for (let el of inputElements) {
            el.value = '';
        }
        tableElement.style.border = '';
        pCheckElement.textContent = '';
        pCheckElement.style.color = '';
    }

}