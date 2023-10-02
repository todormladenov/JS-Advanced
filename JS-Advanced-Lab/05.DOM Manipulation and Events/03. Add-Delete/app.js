function addItem() {
    let itemsElement = document.getElementById('items');
    let inputElement = document.getElementById('newItemText');

    let newLiElement = document.createElement('li');
    newLiElement.textContent = inputElement.value;

    itemsElement.appendChild(newLiElement); 
    
    let deleteElement = document.createElement('a');
    deleteElement.href = '#';
    deleteElement.textContent = '[Delete]';
    newLiElement.appendChild(deleteElement);

    deleteElement.addEventListener('click', (e) => {
        e.currentTarget.parentNode.remove();
    })    
}