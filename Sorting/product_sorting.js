"use strict"

let products = [
    { product: "Gummy Worms", price: 5.79 },
    { product: "Plain M&Ms", price: 2.89 },
    { product: "Peanut M&Ms", price: 2.89 },
    { product: "Swedish Fish", price: 3.79 },
    { product: "Lollipop", price: 1.29 },
    { product: "Chocolate Bar", price: 1.99 },
    { product: "Sour Patch Kids", price: 2.49 },
    { product: "Jelly Beans", price: 2.19 },
    { product: "Tootsie Roll", price: 0.99 },
    { product: "Cotton Candy", price: 3.49 },
    { product: "Jawbreakers", price: 1.79 },
];

products.sort(function(a, b){
    if (a.product < b.product){
        return -1;
    }
    else if(a.product == b.product){
        return 0;
    }
    else {
        return 1;
    }
})

for(let i = 0; i < products.length; i++){
    console.log(products[i].product);
}

console.log("------------------");

products.sort(function(a, b){
    if (b.price < a.price){
        return -1;
    }
    else if(b.price == a.price){
        return 0;
    }
    else {
        return 1;
    }
})

for(let i = 0; i < products.length; i++){
    console.log(products[i].price);
}