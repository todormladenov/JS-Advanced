function addItem() {
    let inputElement = document.getElementById('newItemText');
    let itemsElement = document.getElementById('items');
    
    let newLiElement = document.createElement('li');
    
    newLiElement.textContent = inputElement.value;
    inputElement.value = '';

    itemsElement.appendChild(newLiElement)
}