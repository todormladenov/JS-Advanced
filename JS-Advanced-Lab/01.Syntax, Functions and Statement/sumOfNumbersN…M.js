function sumOfNumbersNM (numN, numM){
 
    let sum = 0;
    numN = Number(numN)
    numM = Number(numM)

    for (let i = numN; i <= numM; i++) {
        sum += i
    }

    return sum

}

sumOfNumbersNM('1', '5');