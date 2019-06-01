class Plant {
    constructor(productName, newName) {
        this.productName = productName;
        this.newName = newName;
    }
}

let xxx = new Plant('xxxName', 'newXxx');
let yyy = new Plant('yyyName', 'newYyy');

let plants = [xxx, yyy];

let tmp = function tmp() {

    let buttonDiv = this.parentNode;
    let divText = buttonDiv.firstChild;
    for (let i = 0; i < plants.length ; i++) {
        if (plants[i].productName === buttonDiv.id) {
            divText.innerHTML  = plants[i].newName;
            break;
        }
    }
};

for (let i = 0; i < plants.length; i++) {
    createPlantCard(plants[i]);
}

function createPlantCard(plant) {
    let cardsWrapper = document.getElementById('cardsWrapper');
    let divForProduct = document.createElement('div');

    let text = document.createElement('p');
    text.innerHTML = plant.productName;
    text.id = 'divText';
    divForProduct.appendChild(text);

    divForProduct.className = 'card';
    divForProduct.id = plant.productName;
    cardsWrapper.appendChild(divForProduct);

    let button = document.createElement('button');
    button.onclick = tmp;
    divForProduct.appendChild(button);
}




