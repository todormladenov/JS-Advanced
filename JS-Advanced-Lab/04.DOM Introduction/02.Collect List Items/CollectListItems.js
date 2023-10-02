function extractText() {
   let elementsToGet = document.getElementById('items');
   let result = document.getElementById('result');

   result.value = elementsToGet.textContent;
   
}