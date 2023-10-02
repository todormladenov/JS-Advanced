function search() {
   let items = document.querySelectorAll('#towns li');
   let input = document.getElementById('searchText').value;

   let itemsArr = Array.from(items);
   let counter = 0;

   itemsArr.forEach(item => {

      if (item.textContent.includes(input)) {
         item.style.fontWeight = 'bold';
         item.style.textDecoration = 'underline';
         return counter++;
      }

      item.style.fontWeight = '';
      item.style.textDecoration = '';
   })
   
   document.getElementById('result').textContent = `${counter} matches found`;
}
