"use strict"

let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100];


function getAverage(score){
    let i = 0;
    let totalScore = 0;

    while(i <= score.length - 1){
        totalScore += score[i] 
        // console.log(totalScore)
        i++    
    }

    // console.log(totalScore)
    return (totalScore/score.length).toFixed(2)
    
}

console.log(getAverage(yourScores))
console.log(getAverage(myScores))

