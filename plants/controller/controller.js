let plants = [haworthia, philodendron, echeveria, peperomia, haworthiaZebra, pilea, snake, succulentTrio];

let changeColor = function changeColor() {
    let buttonColor = this.getAttribute('class');
    let buttonDiv = this.parentNode;
    let divImage = buttonDiv.firstChild;

    let imagesByColor = productImages.get(buttonColor);
    divImage.src = imagesByColor.get(buttonDiv.id);
};

for (let i = 0; i < plants.length; i++) {
    createPlantCard(plants[i]);
}

function createButton(parentDiv, buttonColor) {
    let newButton = document.createElement('button');
    newButton.onclick = changeColor;
    newButton.className = buttonColor;
    parentDiv.appendChild(newButton);
}

function createPlantCard(plant) {
    let cardsWrapper = document.getElementById('cardsWrapper');
    let divForProduct = document.createElement('div');

    divForProduct.className = 'card';
    divForProduct.id = plant.productName;
    cardsWrapper.appendChild(divForProduct);

    let plantImage = document.createElement('img');
    plantImage.className = 'plantImage';
    plantImage.src = plant.productImage;
    plantImage.id = 'divImage';
    divForProduct.appendChild(plantImage);

    let fullPlantName = document.createElement('h4');
    fullPlantName.innerHTML = plant.productDescription;
    fullPlantName.className = 'fullPlantName';
    divForProduct.appendChild(fullPlantName);

    let plantSize = document.createElement('h5');
    plantSize.innerHTML = plant.plantSize;
    plantSize.className = 'plantSize';
    divForProduct.appendChild(plantSize);

    let plantPrice = document.createElement('h5');
    plantPrice.innerHTML = plant.plantPrice;
    plantPrice.className = 'plantPrice';
    divForProduct.appendChild(plantPrice);

    let quantityInStock = document.createElement('p');
    quantityInStock.innerHTML = plant.plantsInStock;
    quantityInStock.className = 'quantityInStock';
    divForProduct.appendChild(quantityInStock);

    createButton(divForProduct, 'green');
    createButton(divForProduct, 'red');
    createButton(divForProduct, 'white');

    let buyButton = document.createElement('button');
    buyButton.className = 'buyButton';
    buyButton.innerHTML = '+';
    buyButton.onclick = addProductToCard;
    divForProduct.appendChild(buyButton);
}

let cartCounter = 0;

function addProductToCard() {
    let plantNameFromDiv = this.parentNode.id;
    let foundPlant = plants.find(obj => {
        return obj.productName === plantNameFromDiv;
    });
    let plant = JSON.stringify(foundPlant);

    localStorage.setItem(plantNameFromDiv, plant);
    cartCounter++;
    console.log(cartCounter);

    let cartButton = document.getElementById('cartButton');
    cartButton.innerHTML = 'Cart(' + cartCounter + ')';
}

function cleanLocalStorage() {
    localStorage.clear();
}