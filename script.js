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
        question1: "what is thing?", // The value of the question properties are "strings"
        possibleA1: ["A","B","C","D"], // The value of possibleA properties are arrays
        correctA1: "D" // The value of correctS properties may need to be boolean???
    },
    {
        question2: "what is thing?",
        possibleA2: ["A","B","C","D"],
        correctA2: "B"
    },
    {
        question3: "what is thing?",
        possibleA3: ["A","B","C","D"],
        correctA3: "A"
    },
    {
        question4: "what is thing?",
        possibleA4: ["A","B","C","D"],
        correctA4: "A"
    },
]


var button = document.getElementById('start');

button.addEventListener('click', start);

// currentQuestion = "";

function start() {
    
    for (var i = 0; i <= quiz.length; i++) {
        currentQuestion = (Object.keys(quiz(question1))); // can't get this for loop to print properties on screen
 
    //   console.log("start now"); 
    //   document.getElementById("questions").innerHTML = quiz; use this to replace content in container
    }
        document.getElementById("content").innerHTML = (currentQuestion);
}   

// This for loop will iterate as many times as designated by the pwrdlength variable
// Password is called and concatenated with the selectedCase string where a golbal math object is then used to select a random character within the specified index string


// document.write(i);




