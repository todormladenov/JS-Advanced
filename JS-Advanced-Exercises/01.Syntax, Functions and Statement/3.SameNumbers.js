function sameNumbers(num) {

    let isSame = true;
    let numToString = num.toString();
    let firstDig = numToString[0];
    let result = Number(firstDig);


    for (let i = 1; i < numToString.length; i++){
        result += Number(numToString[i])

        if (firstDig !== numToString[i]) {
            isSame = false;
        }
    }

   console.log(isSame);
   console.log(result);

}
sameNumbers(2222222)
sameNumbers(1234)