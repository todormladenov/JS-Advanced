window.addEventListener("load", solve);

function solve() {
    let gemNameElement = document.getElementById('gem-name');
    let colorElement = document.getElementById('color');
    let caratsElement = document.getElementById('carats');
    let priceElement = document.getElementById('price');
    let typeElement = document.getElementById('type');

    let addBtnElement = document.getElementById('add-btn');

    addBtnElement.addEventListener('click', add);

    function add(e) {
        e.preventDefault();

        if (gemNameElement.value === '' ||
            colorElement.value === '' ||
            caratsElement.value === '' ||
            priceElement.value === '' ||
            typeElement.value === '') {
            return;
        }

        let previewElement = document.getElementById('preview-list');
        let liElement = document.createElement('li');
        liElement.setAttribute('class', 'gem-info');
        previewElement.appendChild(liElement);

        let articleElement = document.createElement('article');
        liElement.appendChild(articleElement);

        let h4Element = document.createElement('h4');
        h4Element.textContent = `${gemNameElement.value}`;
        articleElement.appendChild(h4Element);

        let pColorEl = document.createElement('p');
        pColorEl.textContent = `Color: ${colorElement.value}`;
        articleElement.appendChild(pColorEl);

        let pCaratsEl = document.createElement('p');
        pCaratsEl.textContent = `Carats: ${caratsElement.value}`;
        articleElement.appendChild(pCaratsEl);

        let pPriceEl = document.createElement('p');
        pPriceEl.textContent = `Price: ${priceElement.value}$`;
        articleElement.appendChild(pPriceEl);

        let pTypeEl = document.createElement('p');
        pTypeEl.textContent = `Type: ${typeElement.value}`;
        articleElement.appendChild(pTypeEl);

        let saveBtnElement = document.createElement('button');
        saveBtnElement.textContent = 'Save to Collection';
        saveBtnElement.setAttribute('class', 'save-btn');
        saveBtnElement.addEventListener('click', save);
        liElement.appendChild(saveBtnElement);

        let editBtnElement = document.createElement('button');
        editBtnElement.textContent = 'Edit Information';
        editBtnElement.setAttribute('class', 'edit-btn');
        editBtnElement.addEventListener('click', edit);
        liElement.appendChild(editBtnElement);

        let cancelBtnElement = document.createElement('button');
        cancelBtnElement.textContent = 'Cancel';
        cancelBtnElement.setAttribute('class', 'cancel-btn');
        cancelBtnElement.addEventListener('click', cancel)
        liElement.appendChild(cancelBtnElement);

        let previewName = gemNameElement.value;
        let previewColor = colorElement.value;
        let previewCarats = caratsElement.value;
        let previewPrice = priceElement.value;
        let previewType = typeElement.value;

        gemNameElement.value = '';
        colorElement.value = '';
        caratsElement.value = '';
        priceElement.value = '';
        typeElement.value = '';
        addBtnElement.disabled = true;

        function save() {
            liElement.remove();
            let collectionElement = document.getElementById('collection');

            let collectionLiElement = document.createElement('li');
            collectionElement.appendChild(collectionLiElement);

            let pCollectionEl = document.createElement('p');
            pCollectionEl.setAttribute('class', 'collection-item');
            pCollectionEl.textContent = `${previewName} - Color: ${previewColor}/ Carats: ${previewCarats}/ Price: ${previewPrice}$/ Type: ${previewType}`
            collectionLiElement.appendChild(pCollectionEl);
            addBtnElement.disabled = false;
        }

        function edit() {
            gemNameElement.value = previewName;
            colorElement.value = previewColor;
            caratsElement.value = previewCarats;
            priceElement.value = previewPrice;
            typeElement.value = previewType;

            liElement.remove();

            addBtnElement.disabled = false;
        }

        function cancel() {
            liElement.remove();
            addBtnElement.disabled = false;
        }
    }
}
