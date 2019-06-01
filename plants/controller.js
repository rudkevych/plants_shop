let plants = [xxx, yyy];

let tmp = function tmp() {
    let buttonColor = this.getAttribute('class'); // получаем класс кнопки - это цвет green/red
    let buttonDiv = this.parentNode; // достаем див в котором лежит кнопка
    let divImage = buttonDiv.firstChild; // достаем p из div`а

    let imagesByColor = productImages.get(buttonColor); // из Map достаем другую Map по ключу(цвет = green/red)
    divImage.src = imagesByColor.get(buttonDiv.id); // в p присваиваем картинку которая соответсвует продукту (buttonDiv.id)
};

for (let i = 0; i < plants.length; i++) {
    createPlantCard(plants[i]);
}

function createPlantCard(plant) {
    let cardsWrapper = document.getElementById('cardsWrapper');
    let divForProduct = document.createElement('div');

    let plantImage = document.createElement('img');
    plantImage.src = plant.productImage;
    plantImage.id = 'divImage';
    divForProduct.appendChild(plantImage);

    divForProduct.className = 'card';
    divForProduct.id = plant.productName;
    cardsWrapper.appendChild(divForProduct);

    let greenButton = document.createElement('button');
    greenButton.onclick = tmp;
    greenButton.className = 'green';
    divForProduct.appendChild(greenButton);

    let redButton = document.createElement('button');
    redButton.onclick = tmp;
    redButton.className = 'red';
    divForProduct.appendChild(redButton);
}