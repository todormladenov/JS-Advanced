function create(words) {
   let contentElement = document.getElementById('content');

   words.forEach(word => {
      let p = document.createElement('p');
      let div = document.createElement('div');

      p.textContent = word;
      p.style.display = 'none';
      
      div.appendChild(p);
      contentElement.appendChild(div);

      div.addEventListener('click', (e) => {
         p.style.display = 'block'
      })

   });
}