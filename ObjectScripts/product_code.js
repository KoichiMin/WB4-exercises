"use strict"



function parsePartCode(partCode){
    let product = {
        supplierCode: partCode.substring(0,partCode1.indexOf(":")),
        productNumber: partCode.substring(partCode1.indexOf(":") + 1, partCode1.indexOf("-")),
        size: partCode.substring(partCode1.indexOf("-") + 1)
        }
    return product
}

let partCode1 = "XYZ:1234-L";
let part1 = parsePartCode(partCode1);
console.log("Supplier: " + part1.supplierCode +
" Product Number: " + part1.productNumber +
" Size: " + part1.size);