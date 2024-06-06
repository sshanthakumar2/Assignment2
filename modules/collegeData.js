//Defining a class called Data
class Data{
    constructor(students, courses){
        this.students = students;
        this.courses = courses;
    }
}

//Initializing variable named dataCollection
var dataCollection = null;

//Importing the file system module
var fs = require('fs');

//Declaring a function to initialize data by reading student and course data from JSON files
function initialize(){
    return new Promise(function(resolve, reject){
        fs.readFile('./data/students.json', 'utf8', (err, dataFromStudents) => {
            if(err){
                reject("unable to read students.json");
                return;
            }

            let studentDataFromFile;

            try{
                studentDataFromFile = JSON.parse(dataFromStudents);
            }catch(parseErr){
                reject("unable to parse students.json");
                return;
            }
            
            fs.readFile('./data/courses.json', 'utf8', (err, dataFromCourses) => {
                if(err){
                    reject("unable to read courses.json");
                    return;
                }
                
                let courseDataFromFile;
    
                try{
                    courseDataFromFile = JSON.parse(dataFromCourses);
                }catch(parseErr){
                    reject("unable to parse courses.json");
                    return;
                }
                //Creating a new object of the Data class
                dataCollection = new Data(studentDataFromFile, courseDataFromFile);
                resolve();
            });
        });
        
    });
    
}

//Declaring a function to retrive all students
function getAllStudents(){
    return new Promise(function(resolve, reject){
        if(dataCollection.students.length > 0){
            resolve(dataCollection.students);
        }else{
            reject("no results returned");
        }
    });
}

//Declaring a function to retrive TAs
function getTAs(){
    return new Promise(function(resolve, reject){
        var TAs = dataCollection.students.filter(function(student){
            return student.TA === true;
        });
        if(TAs.length > 0){
            resolve(TAs);
        }else{
            reject("no results returned");
        }
    });
}

//Declaring a function to retrive all courses
function getCourses(){
    return new Promise(function(resolve, reject){
        if(dataCollection.courses.length > 0){
            resolve(dataCollection.courses);
        }else{
            reject("no results returned");
        }
    });
}

//Exporting functions to be used by other modules
module.exports = {initialize, getAllStudents, getTAs, getCourses};

