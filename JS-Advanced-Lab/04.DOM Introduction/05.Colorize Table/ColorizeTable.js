function colorize() {

    // let elementsToColor = document.querySelectorAll('tr:nth-of-type(2n)');
    // elementsToColor.forEach( el => {
    //     el.style.backgroundColor = 'Teal'
    // })

    let elementsToColor = document.getElementsByTagName('tr');

    let elementsToColorArr = Array.from(elementsToColor)
    
    elementsToColorArr.forEach((element, i) => {
        if (i % 2 !== 0) {
            element.style.backgroundColor = 'Teal'
        }
    });
}