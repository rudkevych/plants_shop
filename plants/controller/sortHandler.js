function sortPlantsByPrice() {
    let plantsSortedByPrice = new Map([...productMap.entries()].sort((a, b) =>
        a[1].plantPrice - b[1].plantPrice));
    console.log(plantsSortedByPrice);

    let cardsWrapper = document.getElementById('cardsWrapper');

    cardsWrapper.innerHTML = ' ';
    plantsSortedByPrice.forEach(function(value, key, map) {
        createPlantCard(key, value);
    });
}

function sortPlantsByInStock() {
    plants.sort(myInStockSortFunc);
    console.log(plants);

    let cardsWrapper =document.getElementById('cardsWrapper');
    cardsWrapper.innerHTML = ' ';

    for (let i = 0; i < plants.length; i++) {
        createPlantCard(plants[i]);
    }
}

function myInStockSortFunc(a, b) {
    if (parseFloat(a.plantsInStock) > parseFloat(b.plantsInStock)) return 1;
    if (parseFloat(a.plantsInStock) < parseFloat(b.plantsInStock)) return -1;
}