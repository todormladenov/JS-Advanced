function extract(content) {

    let regex = /\(([^)]+)\)/gm;
    let contentElement = document.getElementById(content);

    let matchedText = [...contentElement.textContent.matchAll(regex)];
    let result = [];

    for (let el of matchedText) {
        result.push(el[1])
    }
    

    return result.join('; ');
}