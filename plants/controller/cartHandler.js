// получаю все названия цветов из Local Storage

let cartMap = new Map();
for (let i = 0; i < localStorage.length; i++) {
    cartMap.set(localStorage.key(i), productMap.get(i)); // TODO: replace image with count for each product
}

// let productsInCart = [];
// for (let i = 0; i < localStorage.length; ++i) {
//     productsInCart.push(localStorage.getItem(localStorage.value(i)));
// }
// console.log(productsInCart);
//
// let objectsInCart = [];
// // пройтись по массиву и найти в маппе обьекты, потом эти обьекты вывести на экран
// for (let i = 0; i <productsInCart.length; i++) {
//     console.log(productMap.get(i));
// }
// console.log(objectsInCart);
