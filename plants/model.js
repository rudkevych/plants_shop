class Plant {
    constructor(productName, productImage) {
        this.productName = productName;
        this.productImage = productImage;
    }
}

let haworthia = new Plant('haworthia', 'images/haworthia_green.jpg');
let philodendron = new Plant('philodendron', 'images/philodendron_green.jpg');
let echeveria = new Plant('echeveria', 'images/echeveria_green.jpg');
let peperomia = new Plant('peperomia', 'images/peperomia_green.jpg');
let haworthiaZebra = new Plant('haworthiaZebra', 'images/haworthiaZebra_green.jpg');
let pilea = new Plant('pilea', 'images/pilea_green.jpg');
let snake = new Plant('snake', 'images/snake_green.jpg');
let succulentTrio = new Plant('succulentTrio', 'images/succulentTrio_green.jpg');


let productImages = new Map();
productImages.set('green', new Map([
    ['haworthia', 'images/haworthia_green.jpg'],
    ['philodendron', 'images/philodendron_green.jpg'],
    ['echeveria', 'images/echeveria_green.jpg'],
    ['peperomia', 'images/peperomia_green.jpg'],
    ['haworthiaZebra', 'images/haworthiaZebra_green.jpg'],
    ['pilea', 'images/pilea_green.jpg'],
    ['snake', 'images/snake_green.jpg'],
    ['succulentTrio', 'images/succulentTrio_green.jpg']
]));
productImages.set('red', new Map([
    ['haworthia', 'images/haworthia_red.jpg'],
    ['philodendron', 'images/philodendron_red.jpg'],
    ['echeveria', 'images/echeveria_red.jpg'],
    ['peperomia', 'images/peperomia_red.jpg'],
    ['haworthiaZebra', 'images/haworthiaZebra_red.jpg'],
    ['pilea', 'images/pilea_red.jpg'],
    ['snake', 'images/snake_red.jpg'],
    ['succulentTrio', 'images/succulentTrio_red.jpg']
]));
productImages.set('white', new Map([
    ['haworthia', 'images/haworthia_white.jpg'],
    ['philodendron', 'images/philodendron_white.jpg'],
    ['echeveria', 'images/echeveria_white.jpg'],
    ['peperomia', 'images/peperomia_white.jpg'],
    ['haworthiaZebra', 'images/haworthiaZebra_white.jpg'],
    ['pilea', 'images/pilea_white.jpg'],
    ['snake', 'images/snake_white.jpg'],
    ['succulentTrio', 'images/succulentTrio_white.jpg']
]));


/*
сделать комиты


+ добавить цвет - белый -
+ добавить белую кнопку
+ переименовать переменные
+ переименовать картинки
+ вынести стили в css

 */