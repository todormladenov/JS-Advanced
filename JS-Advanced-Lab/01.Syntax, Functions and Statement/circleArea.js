function circleArea(input) {

    let result = 0;
    let typeOfInput = typeof(input)

    if (typeOfInput === "number") {
        result = Math.PI * Math.pow(Number(input), 2);
        console.log(result.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeOfInput}.`);
    }
}

circleArea(5)