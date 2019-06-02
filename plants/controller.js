let plants = [haworthia, philodendron, echeveria, peperomia, haworthiaZebra, pilea, snake, succulentTrio];

let changeColor = function changeColor() {
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

    divForProduct.className = 'card';
    divForProduct.id = plant.productName;
    cardsWrapper.appendChild(divForProduct);

    let plantImage = document.createElement('img');
    plantImage.className = 'plantImage';
    plantImage.src = plant.productImage;
    plantImage.id = 'divImage';
    divForProduct.appendChild(plantImage);

    let fullPlantName = document.createElement('h4');
    fullPlantName.innerHTML = plant.fullProductName;
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

    let greenButton = document.createElement('button');
    greenButton.onclick = changeColor;
    greenButton.className = 'green';
    divForProduct.appendChild(greenButton);

    let redButton = document.createElement('button');
    redButton.onclick = changeColor;
    redButton.className = 'red';
    divForProduct.appendChild(redButton);

    let whiteButton = document.createElement('button');
    whiteButton.onclick = changeColor;
    whiteButton.className = 'white';
    divForProduct.appendChild(whiteButton);

    // добавить кнопку купить
}

// переименовать
function switchToList() {

    let cards = document.getElementsByClassName('card');
    for (i = 0; i < cards.length; i++) {
        cards[i].classList.toggle("cardList");
    }

    let plantImages = document.getElementsByClassName('plantImage');
    for (i = 0; i < plantImages.length; i++) {
        plantImages[i].classList.toggle("plantImageList");
    }

    let fullPlantNames = document.getElementsByClassName('fullPlantName');
    for (i = 0; i < fullPlantNames.length; i++) {
        fullPlantNames[i].classList.toggle("fullPlantNameList");
    }

    let plantSizes = document.getElementsByClassName('plantSize');
    for (i = 0; i < plantSizes.length; i++) {
        plantSizes[i].classList.toggle("plantSizeList");
    }

    let plantPrice = document.getElementsByClassName('plantPrice');
    for (i = 0; i < plantPrice.length; i++) {
        plantPrice[i].classList.toggle("plantPriceList");
    }

    let whiteButtons = document.getElementsByClassName('white');
    for (i = 0; i < whiteButtons.length; i++) {
        whiteButtons[i].classList.toggle("whiteButtonList");
    }

    let redButtons = document.getElementsByClassName('red');
    for (i = 0; i < redButtons.length; i++) {
        redButtons[i].classList.toggle("redButtonList");
    }

    let greenButtons = document.getElementsByClassName('green');
    for (i = 0; i < greenButtons.length; i++) {
        greenButtons[i].classList.toggle("greenButtonList");
    }

    // let buyButtons = document.getElementsByClassName('buyButton');
    // for (i = 0; i < greenButtons.length; i++) {
    //     buyButtons[i].classList.toggle("buyButtonList");
    // }

}

let dataURL;

let getImageData = function (event) {
    let input = event.target;
    let reader = new FileReader();
    reader.onload = function () {
        dataURL = reader.result;
    };

    reader.readAsDataURL(input.files[0]);
    let div = document.getElementById('newProductWrapper');
    let p = document.createElement('p');
    div.appendChild(p);
    let fileName = input.files[0].name; // Название картинки
    p.innerHTML = `File ${fileName} is chosen`;
};

function addNewProduct() {
    let greenMap = productImages.get('green');
    let newProductName = document.getElementById('newProductName');
    let newProductNameValue = newProductName.value;
    greenMap.set(newProductNameValue, dataURL);
    console.log(greenMap);

    let newProduct = new Plant(newProductNameValue, dataURL, 'test description', 'test size', 'test price');
    createPlantCard(newProduct);
}


