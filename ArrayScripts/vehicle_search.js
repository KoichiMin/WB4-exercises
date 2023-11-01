"use strict"

let vehicles = [
    {
    color: "Silver",
    type: "Minivan",
    registrationState: "CA",
    licenseNo: "ABC-101",
    registrationExpires: new Date("3-10-2024"),
    capacity: 7
    },
    {
    color: "Red",
    type: "Pickup Truck",
    registrationState: "TX",
    licenseNo: "A1D-2NC",
    registrationExpires: new Date("11-31-2023"),
    capacity: 3
    },
    {
    color: "White",
    type: "Pickup Truck",
    registrationState: "TX",
    licenseNo: "A22-X00",
    registrationExpires: new Date("12-31-2023"),
    capacity: 6
    },
    {
    color: "Red",
    type: "Car",
    registrationState: "CA",
    licenseNo: "ABC-222",
    registrationExpires: new Date("12-10-2022"),
    capacity: 5
    },{
        color: "Black",
        type: "SUV",
        registrationState: "CA",
        licenseNo: "EEE-222",
        registrationExpires: new Date("12-10-2021"),
        capacity: 7
        },
        {
        color: "Red",
        type: "SUV",
        registrationState: "TX",
        licenseNo: "ZZ2-101",
        registrationExpires: new Date("12-30-2022"),
        capacity: 5
        },
        {
        color: "White",
        type: "Pickup Truck",
        registrationState: "TX",
        licenseNo: "CAC-7YT",
        registrationExpires: new Date("1-31-2023"),
        capacity: 5
        },
        {
        color: "White",
        type: "Pickup Truck",
        registrationState: "CA",
        licenseNo: "123-ABC",
        registrationExpires: new Date("3-31-2024"),
        capacity: 5
        }
        ];

        function findVehicleRed(cars){
            for( let i = 0; i < cars.length ; i++){
                if(cars[i].color === "Red"){
                    return cars[i].type
                }
            }
        }

        function findExpiredRegistrations(cars){
            const today = new Date();
            let arrayOfExpiredRegistrations = []
            for(let i = 0; i < cars.length; i++){
                const dateOfRegistration = cars[i].registrationExpires

                if(today.getFullYear() < dateOfRegistration.getFullYear()){
                    continue
                }
                else if(today.getFullYear() == dateOfRegistration.getFullYear()){
                    if(today.getMonth() < dateOfRegistration.getMonth){
                        continue
                    } 
                    else if(today.getMonth() == dateOfRegistration.getMonth){
                        if(today.getDate() < dateOfRegistration.getDate()){
                            continue
                        }
                        else {
                            arrayOfExpiredRegistrations.push(cars[i].licenseNo)
                        }
                    } else{
                        arrayOfExpiredRegistrations.push(cars[i].licenseNo)
                }
                }

                else{
                    arrayOfExpiredRegistrations.push(cars[i].licenseNo)
                }
                // if(today.getMonth() <= dateOfRegistration.getMonth){
                //     if(today.getDate() < )
                // }else{
                //     arrayOfExpiredRegistrations.push(cars[i].type)
                // }
            }
            console.log(today)
            return arrayOfExpiredRegistrations
        }


        // console.log(findVehicleRed(vehicles))
        console.log(findExpiredRegistrations(vehicles))