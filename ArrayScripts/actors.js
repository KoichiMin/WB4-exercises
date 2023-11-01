"use strict"

let academyMembers = [
    {
    memID: 101,
    name: "Bob Brown",
    films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },
    {
    memID: 142,
    name: "Sallie Smith",
    films: ["A Good Day", "A Better Day"]
    },
    {
    memID: 187,
    name: "Fred Flanders",
    films: ["Who is Fred?", "Where is Fred?",
    "What is Fred?", "Why Fred?"]
    },
    {
    memID: 203,
    name: "Bobbie Boots",
    films: ["Walking Boots", "Hiking Boots",
    "Cowboy Boots"]
    },
    ];

    function academyMember(members){
        for(let i = 0; i < members.length; i++){
            // console.log(members[i].memID === 187)
            if(members[i].memID === 187){
                return members[i].name
            }

        }
    }


    function findFilmWithA(members){
        
        let memberInMovieStartWithA = []

        for(let i = 0; i< members.length; i++){
            for(let j = 0; j < members[i].films.length; j++){
                if(members[i].films[j][0] === "A"){
                    memberInMovieStartWithA.push(members[i].name)
                    break
                }

            }
        }
        return memberInMovieStartWithA
    }

    // console.log(academyMember(academyMembers))
    console.log(findFilmWithA(academyMembers))