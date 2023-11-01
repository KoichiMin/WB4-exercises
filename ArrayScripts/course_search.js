"use strict"

let courses = [
    {
    CourseId: "PROG100",
    Title: "Introduction to HTML/CSS/Git",
    Location: "Classroom 7",
    StartDate: "09/08/22",
    Fee: "100.00",
    },
    {
    CourseId: "PROG200",
    Title: "Introduction to JavaScript",
    Location: "Classroom 9",
    StartDate: "11/22/22",
    Fee: "350.00",
    },
    {
    CourseId: "PROG300",
    Title: "Introduction to Java",
    Location: "Classroom 1",
    StartDate: "01/09/23",
    Fee: "50.00",
    },
    {
    CourseId: "PROG400",
    Title: "Introduction to SQL and Databases",
    Location: "Classroom 7",
    StartDate: "03/16/23",
    Fee: "50.00",},
    {
    CourseId: "PROJ500",
    Title: "Introduction to Angular",
    Location: "Classroom 1",
    StartDate: "04/25/23",
    Fee: "50.00",
    }
    ];

    function findCourseStartDate(courses){
        let startDate = null;
        for(let i =0; i < courses.length; i++){
            // console.log( courses[i].CourseId ,courses[i].CourseId == "PROG200")
            if(courses[i].CourseId === "PROG200"){
                // console.log("it went in", courses[i].StartDate)
                startDate = courses[i].StartDate
            }
        }
        return startDate
    }

    function findTitle(courses){
        for (let i = 0; i < courses.length;i++){
            if(courses[i].CourseId === "PROJ500"){
                return courses[i].Title
            }
        }
    }

    function findCoursesUnderFifty(courses){
        let titleClasses = []
        for(let i = 0; i < courses.length;i++){
            if(Number(courses[i].Fee) <= 50.00){
                titleClasses.push(courses[i].Title)
            }
        }
        return titleClasses 
    }

    function classRoomOne(courses){
        let titleClasses = []
        for(let i = 0; i < courses.length; i++){
            if(courses[i].Location === "Classroom 1"){
                titleClasses.push(courses[i].Title)
            }
        }
        return titleClasses;
    }


    // console.log(findCourseStartDate(courses));
    // console.log(findTitle(courses));
    // console.log(findCoursesUnderFifty(courses))
    console.log(classRoomOne(courses))
