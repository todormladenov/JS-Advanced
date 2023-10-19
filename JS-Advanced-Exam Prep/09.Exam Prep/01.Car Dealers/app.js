window.addEventListener("load", solve);

function solve() {
  let makeInputElement = document.getElementById('make');
  let modelInputElement = document.getElementById('model');
  let yearInputElement = document.getElementById('year');
  let fuelInputElement = document.getElementById('fuel');
  let originalCostElement = document.getElementById('original-cost');
  let sellingPriceElement = document.getElementById('selling-price');
  let profitElement = document.getElementById('profit');

  let publishBtnElement = document.getElementById('publish');
  let tbodyElement = document.getElementById('table-body');
  let carsListElement = document.getElementById('cars-list');

  publishBtnElement.addEventListener('click', onPublish);

  function onPublish(e) {
    e.preventDefault();

    if (makeInputElement.value === '' ||
      modelInputElement.value === '' ||
      yearInputElement.value === '' ||
      fuelInputElement.value === '' ||
      originalCostElement.value === '' ||
      sellingPriceElement.value === '' ||
      sellingPriceElement.value <= originalCostElement.value) {
      return
    }

    let make = makeInputElement.value;
    let model = modelInputElement.value;
    let year = yearInputElement.value;
    let fuel = fuelInputElement.value;
    let originalCost = originalCostElement.value;
    let sellingPrice = sellingPriceElement.value;

    let trRowElement = elementCreator('tr', null, 'row', tbodyElement);
    elementCreator('td', make, null, trRowElement);
    elementCreator('td', model, null, trRowElement);
    elementCreator('td', year, null, trRowElement);
    elementCreator('td', fuel, null, trRowElement);
    elementCreator('td', originalCost, null, trRowElement);
    elementCreator('td', sellingPrice, null, trRowElement);

    let tdElementForBtn = elementCreator('td', null, null, trRowElement);

    let editBtnElement = elementCreator('button', 'Edit', 'action-btn edit', tdElementForBtn);
    let sellBtnElement = elementCreator('button', 'Sell', 'action-btn sell', tdElementForBtn);
    clearInputs();

    editBtnElement.addEventListener('click', () => {
      makeInputElement.value = make;
      modelInputElement.value = model;
      yearInputElement.value = year;
      fuelInputElement.value = fuel;
      originalCostElement.value = originalCost;
      sellingPriceElement.value = sellingPrice;

      trRowElement.remove();
    });

    sellBtnElement.addEventListener('click', () => {
      trRowElement.remove();

      let profit = Number(sellingPrice) - Number(originalCost);
      let liElement = elementCreator('li', null, 'each-list', carsListElement);
      elementCreator('span', `${make} ${model}`, null, liElement);
      elementCreator('span', year, null, liElement);
      elementCreator('span', profit, null, liElement);

      profitElement.textContent = (Number(profitElement.textContent) + profit).toFixed(2);
    });
  }

  function elementCreator(type, text, classStyle, parent) {
    let element = document.createElement(type);

    if (text) {
      element.textContent = text;
    }

    if (classStyle) {
      element.setAttribute('class', classStyle);
    }

    if (parent) {
      parent.appendChild(element);
    }

    return element
  }

  function clearInputs() {
    makeInputElement.value = '';
    modelInputElement.value = '';
    yearInputElement.value = '';
    fuelInputElement.value = '';
    originalCostElement.value = '';
    sellingPriceElement.value = '';
  }

}
