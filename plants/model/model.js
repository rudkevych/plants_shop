class Plant {
    constructor(productImage, productDescription, plantSize, plantPrice, plantsInStock) {
        this.productImage = productImage;
        this.productDescription = productDescription;
        this.plantSize = plantSize;
        this.plantPrice = plantPrice;
        this.plantsInStock = plantsInStock;
    }
}

// change items in stock
let productMap = new Map([
    ['haworthia', new Plant('images/haworthia_green.jpg', 'Haworthia Zebra In Mini Grant Planter', 'Medium', 1, '12 items in stock')],
    ['philodendron', new Plant('images/philodendron_green.jpg', 'Philodendron Green In Small Grant Planter', 'Small', 23, '32 items in stock')],
    ['echeveria', new Plant('images/echeveria_green.jpg', 'Echeveria In Mini Dolores Planter', 'Mini', 38, '47 items in stock')],
    ['peperomia', new Plant('images/peperomia_green.jpg', 'Peperomia Marble In Small Dolores Planter', 'Small', 26, '45 items in stock')],
    ['haworthiaZebra', new Plant('images/haworthiaZebra_green.jpg', 'Haworthia Zebra', 'Small', 54, '29 items in stock')],
    ['pilea', new Plant('images/pilea_green.jpg', 'Pileo Calathea Rattlesnake In August Planter', 'Small', 56, '11 items in stock')],
    ['snake', new Plant('images/snake_green.jpg', 'Snake Plant Zeylanica In Small Dolores Planter', 'Medium', 10, '12 items in stock')],
    ['succulentTrio', new Plant('images/succulentTrio_green.jpg', 'Air Plant Trio In Tillandz Stand Planter', 'Mini', 78, '3 items in stock')]
]);

let productImages = new Map(); // TODO: write func to get rid of code duplication  param - color
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

