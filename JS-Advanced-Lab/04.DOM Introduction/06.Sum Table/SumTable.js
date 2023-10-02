function sumTable() {

    let priceElement = document.querySelectorAll('tr td:nth-of-type(2)');
    let priceElementArr = Array.from(priceElement)


    let totalSumElement = priceElementArr.pop();
    totalSumElement.textContent = priceElementArr.reduce((a, b) => {
        return a + Number(b.textContent);
    }, 0);

}