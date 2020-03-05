/*
* Initial pg "Start Quiz" with description
    click eListener for start button
    60 sec timer function starts
* 5 questions
    replace content of element to display questions/answers
    will be 2 For loops that do not run simultaneously
    click eventListener for correct answer button
    click eventListener for incorrect answer buttons
    60 sec timer with while loop
    hidden element that appears to notifiy correct/incorrect
    -12 sec for every wrong answer
* Game Over pg at the end of question loop
    IF/Else
        If time is out, fire game over page
        Else continue question loop
* High Score Pg
    prevent default to stop loop
* Go back button fires quiz function from beginning.
    Try using query selectors and make the nested arrays an object
*/
// var list = [
//     {
//         name: '',
//         possible: [],
//         ...
//     },
//     {},
//     {},
//     {},
// ]

// This is an object and the key is "quiz" and it's properties are variables. This key will be used to access its corresponding values.
var quiz = [
    {
        question: "what is thing?", // The value of the question properties are "strings"
        possibleA: ["A","B","C","D"], // The value of possibleA properties are arrays
        correctA: "D" // The value of correctS properties may need to be boolean???
    },
    {
        question: "what is thing?",
        possibleA: ["A","B","C","D"],
        correctA: "B"
    },
    {
        question: "what is thing?",
        possibleA: ["A","B","C","D"],
        correctA: "A"
    },
    {
        question: "what is thing?",
        possibleA: ["A","B","C","D"],
        correctA: "A"
    },
]


var button = document.getElementById('start'); // This is a button variable that accesses the "start" button from the html doc

button.addEventListener('click', start); // The eListener demands that upon click of "start" button, a function named "start" will execute 

currentQuestion = 0; // CurrentQ is set to the first index place of 0
currentAnswer = 0; // CurrentA is set to the first index place of 0

function start() {
    
    for(var i=0; i < quiz.length; i++) {
        // console.log(quiz[currentQuestion].question);
        // currentQuestion++;

        document.getElementById("questionContent").innerHTML = "<p>" + (quiz[currentQuestion].question) + "<p>" + "<p>" + (quiz[currentAnswer].possibleA) + "<p>";
        currentQuestion++;
        // document.getElementById("answerContent").innerHTML =(quiz[currentAnswer].possibleA);
    }

    var correctA = "";
    
    if (correctA === true) {
        msg = "That is correct!";  
    }
    else {
        msg = "Incorrect! -12 seconds!";  
    }

}   


// document.write(i);




