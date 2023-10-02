function stringLength(stringOne, stringTwo, stringThree) {

    let sum = stringOne.length + stringTwo.length + stringThree.length;
    let result = sum / 3;

    console.log(sum);
    console.log(Math.floor(result));
}
stringLength('pasta', '5', '22.3')