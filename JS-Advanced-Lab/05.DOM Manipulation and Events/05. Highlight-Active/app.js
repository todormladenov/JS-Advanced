function focused() {
    let inputElements = document.querySelectorAll('div input');

    let inputElementsArr = Array.from(inputElements);

    inputElementsArr.forEach(element => {
        element.addEventListener('focus', (e) => {
            let divElement = e.currentTarget.parentNode;

            divElement.classList.add('focused');

        })
    });

    inputElementsArr.forEach(element => {
        element.addEventListener('blur', (e) => {
            let divElement = e.currentTarget.parentNode;

            divElement.classList.remove('focused');
        })
    });
}