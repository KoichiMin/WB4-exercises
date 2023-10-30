"use strict"

let person = {
    firstName : "bob",
    address: "22 time rd",
    city: "New York city",
    state: "New York",
    zip: 10901
}

function printContact(info){
    console.log(info.firstName);
    console.log(info.address)
    console.log(info.city, info.state,  info.zip)
}

printContact(person);
