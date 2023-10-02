function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   let tableElements = document.querySelectorAll('.container tbody tr');
   let searchBtn = document.getElementById('searchField');

   function onClick() {
      let searchText = searchBtn.value;
      let tableElementsArr = Array.from(tableElements);

      tableElementsArr.forEach(element => {
         
         let row = element.querySelectorAll('td');

         for (let el of row) {

            if (el.textContent.includes(searchText)) {
               element.classList.add('select');
               break;
            } else {
               element.classList.remove('select')
            }

         }
      });

   }
}