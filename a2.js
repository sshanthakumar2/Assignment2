/*********************************************************************************
* WEB700 – Assignment 2
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Name: Sampavi Shanthakumar 
* Student ID: 147633234 
* Date: 7th June 2024
*
********************************************************************************/ 

//Importing the collegeData Module
var collegeData = require("./modules/collegeData");

//Initializing the collegeData Module by calling the initialize function
collegeData.initialize()
.then(() => { 
    //Retrieving all students
    return collegeData.getAllStudents(); 
})
.then((students) => {
    console.log(`Successfully retrieved ${students.length} students`);
    //Retrieving all courses
    return collegeData.getCourses();
})
.then((courses) => {
    console.log(`Successfully retrieved ${courses.length} courses`);
    //Retriving all TAs
    return collegeData.getTAs();
})
.then((TAs) => {
    console.log(`Successfully retrieved ${TAs.length} TAs`);
})
//Catching any error occurs
.catch((error) => {
    console.error("An error occured ", error);
});
