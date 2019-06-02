class Plant {
    constructor(productName, productImage, fullProductName, plantSize, plantPrice) {
        this.productName = productName;
        this.productImage = productImage;
        this.fullProductName = fullProductName;
        this.plantSize = plantSize;
        this.plantPrice = plantPrice;
    }
}

let haworthia = new Plant('haworthia', 'images/haworthia_green.jpg', 'Haworthia Zebra In Mini Grant Planter', 'Medium', '$30');
let philodendron = new Plant('philodendron', 'images/philodendron_green.jpg', 'Philodendron Green In Small Grant Planter', 'Small', '$23');
let echeveria = new Plant('echeveria', 'images/echeveria_green.jpg', 'Echeveria In Mini Dolores Planter', 'Mini', '$38');
let peperomia = new Plant('peperomia', 'images/peperomia_green.jpg', 'Peperomia Marble In Small Dolores Planter', 'Small', '$30');
let haworthiaZebra = new Plant('haworthiaZebra', 'images/haworthiaZebra_green.jpg', 'Haworthia Zebra', 'Small', '$54');
let pilea = new Plant('pilea', 'images/pilea_green.jpg', 'Pileo Calathea Rattlesnake In August Planter', 'Small', '$56');
let snake = new Plant('snake', 'images/snake_green.jpg', 'Snake Plant Zeylanica In Small Dolores Planter', 'Medium', '$30');
let succulentTrio = new Plant('succulentTrio', 'images/succulentTrio_green.jpg', 'Air Plant Trio In Tillandz Stand Planter', 'Mini', '$78');

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

