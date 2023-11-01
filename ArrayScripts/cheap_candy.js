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

function findCheapCandy(candyList){
    let listCandy = []
    for(let i = 0; i < candyList.length; i++){
        if(Number(candyList[i].price) < 4.00 ){
            listCandy.push(candyList[i].product)
        }
    }
    return listCandy
}

function findMandM(candyList){
    let listCandy = []
    for(let i = 0; i < candyList.length; i++){
        let productName = candyList[i].product
        if(productName.includes("M&M")){
            listCandy.push(candyList[i].product)
        }
    }
    return listCandy
}



// console.log(findCheapCandy(products));
console.log(findMandM(products));