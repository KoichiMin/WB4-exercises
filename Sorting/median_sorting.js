"use strict"

let students = [
    {name: "Zephaniah", scores: [100, 96, 99, 92]},
    {name: "Pursalane", scores: [92, 89, 96, 100, 94]},
    {name: "Siddalee", scores: [86, 72, 92]},
    {name: "Ian", scores: [98, 84, 89, 100, 100, 76]},
    {name: "Elisha", scores: [89, 100]},
    {name: "Ezra", scores: [100, 99, 100, 87]}
    ];

    function sortedArrayScores(){
        for(let studentScores of students){
            studentScores.scores.sort((a, b) => a - b)
        }
        
    }

    function getAverage(students){
        for(let i = 0; i < students.length; i++){
        let totalScore = 0;
        let average = 0;
        for(let j = 0; j < students[i].scores.length; j++){
            totalScore += students[i].scores[j]
        }
        average = totalScore / students[i].scores.length
        // console.log(students[i], average)
        students[i].averageGrade = average.toFixed(2)
    }
}


    function getMedian(students){
        for(let studentScores of students){
            if(studentScores.scores.length  % 2 == 0){
                let ceilingNumber = studentScores.scores.length /2
                let floorNumber = (studentScores.scores.length / 2) - 1
                let median = (studentScores.scores[ceilingNumber ] + studentScores.scores[floorNumber])/2
                // console.log(studentScores.scores, median)
                studentScores.median = median
            }
            else{
                let median = studentScores.scores[(studentScores.scores.length - 1) / 2]
                studentScores.median = median
                // console.log(studentScores.scores, median)
            }
        }
    }

    function highestLowestScore(students){
        for(let studentScores of students){
            studentScores.highestScore = studentScores.scores[studentScores.scores.length - 1]
            studentScores.lowestScore = studentScores.scores[0]
        }
    }

    sortedArrayScores(students)
    // getAverage(students)
    getMedian(students)
    highestLowestScore(students)
    console.log(students)