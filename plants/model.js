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