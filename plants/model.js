class Plant {
    constructor(productName, productImage) {
        this.productName = productName;
        this.productImage = productImage;
    }
}

let haworthia = new Plant('haworthia', 'images/haworthia_green.jpg');
let philodendron = new Plant('philodendron', 'images/philodendron_green.jpg');

let productImages = new Map();
productImages.set('green', new Map([['haworthia', 'images/haworthia_green.jpg'], ['philodendron', 'images/philodendron_green.jpg']]));
productImages.set('red', new Map([['haworthia', 'images/haworthia_red.jpg'], ['philodendron', 'images/philodendron_red.jpg']]));
productImages.set('white', new Map([['haworthia', 'images/haworthia_white.jpg'], ['philodendron', 'images/philodendron_white.jpg']]));



/*
сделать комиты


+ добавить цвет - белый -
+ добавить белую кнопку
+ переименовать переменные
+ переименовать картинки
+ вынести стили в css

 */