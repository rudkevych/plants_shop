function changeView() {

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