function calculator() {
    let firstNum;
    let secondNum;
    let result;

    return {
        init: function (selector1, selector2, resultSelector) {
            firstNum = document.querySelector(selector1);
            secondNum = document.querySelector(selector2);
            result = document.querySelector(resultSelector);
        },
        add: function () {
            return result.value = Number(firstNum.value) + Number(secondNum.value);
        },
        subtract: function () {
            return result.value = Number(firstNum.value) - Number(secondNum.value);
        }
    }

}
const calculate = calculator ();
calculate.init ('#num1', '#num2', '#result');




