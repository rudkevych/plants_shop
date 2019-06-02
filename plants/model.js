class Plant {
    constructor(productName, productImage) {
        this.productName = productName;
        this.productImage = productImage;
    }
}

let xxx = new Plant('xxxName', 'images/plant_xxx_green.jpg');
let yyy = new Plant('yyyName', 'images/plant_yyy_green.jpg');

let productImages = new Map();
productImages.set('green', new Map([['xxxName', 'images/plant_xxx_green.jpg'], ['yyyName', 'images/plant_yyy_green.jpg']]));
productImages.set('red', new Map([['xxxName', 'images/plant_xxx_red.jpg'], ['yyyName', 'images/plant_yyy_red.jpg']]));
productImages.set('white', new Map([['xxxName', 'images/haworthia_white.jpg'], ['yyyName', 'images/philodendron_white.jpg']]));



/*
сделать комиты


 + добавить цвет - белый -
добавить белую кнопку
переименовать переменные
переименовать картинки
 + вынести стили в css

 */