function squareOfStars(parameter) {

    if (!parameter) {
        parameter = 5
    }

    for (let i = 0; i < parameter; i++){
        let result = []
        for (let j = 0; j < parameter; j++){
            result.push('*');
        }
        console.log(result.join(" "));
    }

}
squareOfStars(5)