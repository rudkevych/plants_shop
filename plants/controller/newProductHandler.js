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
    let fileName = input.files[0].name;
    p.innerHTML = `File ${fileName} is chosen`;
};

function addNewProduct() {
    let greenMap = productImages.get('green');
    let newProductName = document.getElementById('newProductName');
    let newProductNameValue = newProductName.value;
    greenMap.set(newProductNameValue, dataURL);

    let newDescription = document.getElementById('productDescription');
    let newDescriptionValue = newDescription.value;

    let newProductSize = document.getElementById('newProductSize');
    let newProductSizeValue = newProductSize.value;

    let newProductPrice = document.getElementById('newProductPrice');
    let newProductPriceValue = newProductPrice.value;


    let newProduct = new Plant(newProductNameValue, dataURL, newDescriptionValue, newProductSizeValue, newProductPriceValue);
    createPlantCard(newProduct);
}