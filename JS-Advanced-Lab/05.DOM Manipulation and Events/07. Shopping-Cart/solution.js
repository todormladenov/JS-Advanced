function solve() {
   
   let btnsElement = document.querySelectorAll('.add-product');
   let checkoutBtnElement = document.querySelector('.checkout');

   let textAreaElement = document.querySelector('textarea');
   
   let btnsElementArr = Array.from(btnsElement);
   let totalPrice = 0;
   let list = [];   
   
   btnsElementArr.forEach(btn => {
      btn.addEventListener('click', (e) => {
         let parentElement = e.currentTarget.parentNode.parentNode;
         let productPriceElement = parentElement.querySelector('.product-line-price');
         let productNameElement = parentElement.querySelector('.product-title');

         if (!list.includes(productNameElement.textContent)) {
            list.push(productNameElement.textContent);
         }

         totalPrice += Number(productPriceElement.textContent);

         textAreaElement.textContent += `Added ${productNameElement.textContent} for ${productPriceElement.textContent} to the cart.\n`
      });
   });

   checkoutBtnElement.addEventListener('click', (e) => {
      textAreaElement.textContent += `You bought ${list.join(', ')} for ${totalPrice.toFixed(2)}.`
      e.currentTarget.setAttribute('disabled', 'true')
      btnsElementArr.forEach(btn => {
         btn.setAttribute('disabled', 'true');
      })
   });
}