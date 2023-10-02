function editElement(elementToEdit, oldString, newString) {

    while (elementToEdit.textContent.includes(oldString)) {
        elementToEdit.textContent = elementToEdit.textContent.replace(oldString, newString);
    }


}