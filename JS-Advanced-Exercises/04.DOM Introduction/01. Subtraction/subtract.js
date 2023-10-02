function subtract() {
    let firstNumberElement = document.getElementById('firstNumber');
    let secondNumberElement = document.getElementById('secondNumber');

    let firstNumber = Number(firstNumberElement.value)
    let secondNumber = Number(secondNumberElement.value)

    let result = document.getElementById('result');

    result.textContent = firstNumber - secondNumber;
}