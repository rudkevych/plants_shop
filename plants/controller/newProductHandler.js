let input;
let dataGreenURL;
let dataRedURL;
let dataWhiteURL;

function printInfoAboutPhotoAdding() {
    let div = document.getElementById('imgText');
    let p = document.createElement('p');
    div.appendChild(p);
    let fileName = input.files[0].name;
    p.innerHTML = `File ${fileName} is chosen`;
}

let getGreenImageData = function (event) {
    input = event.target;
    let reader = new FileReader();
    reader.onload = function () {
        dataGreenURL = reader.result;
    };

    reader.readAsDataURL(input.files[0]);
    printInfoAboutPhotoAdding();
};

let getRedImageData = function (event) {
    input = event.target;
    let reader = new FileReader();
    reader.onload = function () {
        dataRedURL = reader.result;
    };

    reader.readAsDataURL(input.files[0]);
    printInfoAboutPhotoAdding();
};

let getWhiteImageData = function (event) {
    input = event.target;
    let reader = new FileReader();
    reader.onload = function () {
        dataWhiteURL = reader.result;
    };

    reader.readAsDataURL(input.files[0]);
    printInfoAboutPhotoAdding();
};


function addNewProduct() {
    let greenMap = productImages.get('green');
    let redMap = productImages.get('red');
    let whiteMap = productImages.get('white');

    let newProductName = document.getElementById('newProductName');
    let newProductNameValue = newProductName.value;

    greenMap.set(newProductNameValue, dataGreenURL);
    redMap.set(newProductNameValue, dataRedURL);
    whiteMap.set(newProductNameValue, dataWhiteURL);

    let newDescription = document.getElementById('productDescription');
    let newDescriptionValue = newDescription.value;

    let newProductSize = document.getElementById('newProductSize');
    let newProductSizeValue = newProductSize.value;

    let newProductPrice = document.getElementById('newProductPrice');
    let newProductPriceValue = newProductPrice.value;

    let newProduct = new Plant(newProductNameValue, dataGreenURL, newDescriptionValue, newProductSizeValue, newProductPriceValue);
    createPlantCard(newProduct);
}