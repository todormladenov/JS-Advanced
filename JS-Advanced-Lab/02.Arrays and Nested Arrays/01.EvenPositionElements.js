function evenPositionElements(arr){

    let restul = arr.filter((el, i) => i % 2 === 0);
    console.log(restul.join(" "));
}
evenPositionElements(['20', '30', '40', '50', '60'])

