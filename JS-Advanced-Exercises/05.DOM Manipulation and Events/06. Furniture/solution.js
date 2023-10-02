function solve() {

  let btnElements = document.querySelectorAll('button');
  let textAreaElements = document.querySelectorAll('textarea');

  let generateTextAreaElement = textAreaElements[0];
  let buyTextAreaElement = textAreaElements[1];

  let generateBtnElement = btnElements[0];
  let buyBtnElement = btnElements[1];

  generateBtnElement.addEventListener('click', generate);
  buyBtnElement.addEventListener('click', buy);

  function generate() {
    let tableElement = document.querySelector('.table');
    let input = JSON.parse(generateTextAreaElement.value);

    input.forEach(el => {

      let tbody = document.createElement('tbody');
      let tr = document.createElement('tr');

      tableElement.appendChild(tbody);
      tbody.appendChild(tr);

      let tdImage = document.createElement('td');
      let img = document.createElement('img');
      img.src = el.img;

      tr.appendChild(tdImage);
      tdImage.appendChild(img);

      for (let key of Object.keys(el)) {

        if (key === 'img') {
          continue
        }

        let pElement = document.createElement('p');
        let tdElement = document.createElement('td');

        pElement.textContent = el[key];
        tr.appendChild(tdElement);
        tdElement.appendChild(pElement);
      }

      let tdCheckboxElement = document.createElement('td');
      let checkboxElement = document.createElement('input');
      checkboxElement.type = 'checkbox';

      tdCheckboxElement.appendChild(checkboxElement);
      tr.appendChild(tdCheckboxElement);
    })
  }

  function buy() {
    let checkboxesElements = Array.from(document.querySelectorAll('input[type=checkbox]'));

    let selectedProducts = checkboxesElements.filter(e => e.checked === true);
    let boughtProducts = [];
    let totalPice = 0;
    let averageDecorationFactor = 0;

    selectedProducts.forEach(element => {
      let productElement = element.parentNode.parentNode;

      let productInfo = Array.from(productElement.querySelectorAll('td'));
      productInfo.pop();
      productInfo.shift();

      boughtProducts.push(productInfo[0].textContent);
      totalPice += Number(productInfo[1].textContent);
      averageDecorationFactor += Number(productInfo[2].textContent);
    });

    buyTextAreaElement.value = `Bought furniture: ${boughtProducts.join(', ')}\n`;
    buyTextAreaElement.value += `Total price: ${totalPice.toFixed(2)}\n`;
    buyTextAreaElement.value += `Average decoration factor: ${averageDecorationFactor / selectedProducts.length}`
  }
}