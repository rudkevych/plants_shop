class Plant {
    constructor(name, img, title, size, price, colors, colorsImg) {
        this.name = name;
        this.img = img;
        this.title = title;
        this.size = size;
        this.price = price;
        this.colors = colors;
        this.colorsImg = colorsImg;
    }
}

let hoyaHeart = new Plant('hoyaHeart', 'img/plant_xxx_green.jpg', 'Hoya Heart In Ezra Planter', 'Mini', '$26',
    ['grey', 'indianred', 'seagreen'], ['img/plant_5_2.jpg', 'img/plant_5_3.jpg']);
let philodendron = new Plant('philodendron', 'img/plant_yyy_green.jpg', 'Philodendron Green In Small Grant', 'Small', '$15',
    ['grey', 'indianred', 'seagreen'], ['img/plant_5_2.jpg', 'img/plant_5_3.jpg']);
let haworthia = new Plant('haworthia', 'img/plant_3.jpg', 'Haworthia Zebra In Mini Grant Planter', 'Mini', '$30',
    ['wheat', 'indianred', 'seagreen'], ['img/plant_5_2.jpg', 'img/plant_5_3.jpg']);
let monstera = new Plant('monstera', 'img/plant_4.jpg', 'Monstera In Medium Grant Planter', 'Mini', '$45',
    ['lightblue', 'indianred', 'seagreen'], ['img/plant_5_2.jpg', 'img/plant_5_3.jpg']);
let panda = new Plant('panda', 'img/plant_5.jpg', 'Panda Plant In Ezra Planter', 'Mini', '$76',
    ['wheat', 'indianred', 'seagreen'], ['img/plant_5_2.jpg', 'img/plant_5_3.jpg']);
let calathea = new Plant('calathea', 'img/plant_6.jpg', 'Calathea Rattlesnake In August Planter', 'Mini', '$32',
    ['wheat', 'indianred', 'seagreen'], ['img/plant_5_2.jpg', 'img/plant_5_3.jpg']);
let pilea = new Plant('pilea', 'img/plant_7.jpg', 'Calathea Rattlesnake In August Planter', 'Mini', '$32',
    ['grey', 'indianred', 'seagreen'],['img/plant_5_2.jpg', 'img/plant_5_3.jpg']);
let plantTrio = new Plant('plantTrio', 'img/plant_8.jpg', 'Air Plant Trio In Tillandz Stand Planter', 'Mini', '$87',
    [], []);

let plants = [hoyaHeart, philodendron, haworthia, monstera, panda, calathea, pilea, plantTrio ];

console.log(plants);


function createPlantCard(plant) {
    let cardsWrapper = document.getElementById('cardsWrapper');
    let div = document.createElement('div');
    div.className = 'card';
    div.id = plant.name;
    cardsWrapper.appendChild(div);

    let img = document.createElement('img');
    img.className = 'plantPhoto';
    img.src = plant.img;
    div.appendChild(img);

    let title = document.createElement('h4');
    title.innerHTML = plant.title;
    title.className = 'plantTitle';
    div.appendChild(title);

    let size = document.createElement('h5');
    size.innerHTML = plant.size;
    size.className = 'plantSize';
    div.appendChild(size);

    let price = document.createElement('h6');
    price.innerHTML = plant.price;
    price.className = 'plantPrice';
    div.appendChild(price);

    //создание одинковых цветов для всех карточек
    let whiteButton = document.createElement('button');
    whiteButton.className = 'whiteButton';
    whiteButton.onclick = findDivId(this);
    // whiteButton.onclick = changeToWhite;
    // whiteButton.addEventListener('click', changeToWhite);
    div.appendChild(whiteButton);

    let redButton = document.createElement('button');
    redButton.className = 'redButton';
    // redButton.onclick = changeToRed;
    div.appendChild(redButton);

    let greenButton = document.createElement('button');
    greenButton.className = 'greenButton';
    // greenButton.onclick = changeToGreen;
    div.appendChild(greenButton);

    let buyButton = document.createElement('button');
    buyButton.className = 'buyButton';
    buyButton.innerHTML = '+';
    // addButton.onclick;
    div.appendChild(buyButton);
}


createPlantCard(panda);
// createPlantCard(hoyaHeart);
// createPlantCard(philodendron);
// createPlantCard(haworthia);
// createPlantCard(monstera);
// createPlantCard(calathea);
// createPlantCard(pilea);
// createPlantCard(plantTrio);



function switchToList() {

    let cards = document.getElementsByClassName('card');
    for (i = 0; i < cards.length; i++) {
        cards[i].classList.toggle("cardList");
    }
    // console.log(cards);

    let imgs = document.getElementsByClassName('plantPhoto');
    for (i = 0; i < imgs.length; i++) {
        imgs[i].classList.toggle("plantPhotoList");
    }


    let titles = document.getElementsByClassName('plantTitle');
    for (i = 0; i < titles.length; i++) {
        titles[i].classList.toggle("plantTitleList");
    }


    let sizes = document.getElementsByClassName('plantSize');
    for (i = 0; i < sizes.length; i++) {
        sizes[i].classList.toggle("plantSizeList");
    }


    let prices = document.getElementsByClassName('plantPrice');
    for (i = 0; i < prices.length; i++) {
        prices[i].classList.toggle("plantPriceList");
    }

    let whiteButtons = document.getElementsByClassName('whiteButton');
    for (i = 0; i < whiteButtons.length; i++) {
        whiteButtons[i].classList.toggle("whiteButtonList");
    }

    let redButtons = document.getElementsByClassName('redButton');
    for (i = 0; i < redButtons.length; i++) {
        redButtons[i].classList.toggle("redButtonList");
    }

    let greenButtons = document.getElementsByClassName('greenButton');
    for (i = 0; i < greenButtons.length; i++) {
        greenButtons[i].classList.toggle("greenButtonList");
    }

    let buyButtons = document.getElementsByClassName('buyButton');
    for (i = 0; i < greenButtons.length; i++) {
        buyButtons[i].classList.toggle("buyButtonList");
    }

}


let imgs = document.getElementsByClassName('plantPhoto');


// function changeToWhite (plants) {
//     console.log(elem.parentNode.id);
//
//     // console.log(plants);
//
//     // for(i=0; i<plants.length; i++) {
//     //     console.log(plants.length);
//     // }
//
//
//     // let firstImg = plants.imgs[1];
//     // console.log(firstImg);
//     // let firstImg = plants.img[0];
//     // console.log(firstImg);
//     // console.log(firstImg);
//     // firstImg.src = panda.img;
//     // for(i=0; i<plants.length; i++) {
//     //     firstImg.scr = plants[i].img[0]
//     // }
//
// }

// function changeToRed (plants) {
//     let secondImg = plants.colorsImg[1];
//     // console.log(firstImg);
//     // firstImg.src = panda.colorsImg[0];
//     // for(i=0; i<plants.length; i++) {
//     //     secondImg.scr = plants[i].colorsImg[1];
//     // }
//
// }

// function changeToGreen (plants) {
//     let firstImg = imgs[0];
//     console.log(firstImg);
//     firstImg.src = panda.colorsImg[1];
//     // for(i=0; i<plants.length; i++) {
//     //     thirdImg.scr = plants[i].colorsImg[2]
//     // }
// }

function findDivId(id) {
    console.log( id);
}




