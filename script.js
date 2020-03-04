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
var quiz = [
    {
        question1: "what is thing?",
        possibleA1: ["A","B","C"],
        correctA1: "D"
    },
    {
        question2: "what is thing?",
        possibleA2: ["A","B","C"],
        correctA2: "D"
    },
    {
        question3: "what is thing?",
        possibleA3: ["A","B","C"],
        correctA3: "D"
    },
    {
        question4: "what is thing?",
        possibleA4: ["A","B","C"],
        correctA3: "D"
    },
]


var button = document.getElementById('start');

button.addEventListener('click', start);


function start() {
    
    for (var i = 0; i <= quiz.length; i++) {
      document.querySelector("quiz").textContent = quiz; 
      console.log("start now"); 
    //   document.getElementById("questions").innerHTML = quiz; use this to replace content in container
    }
    
}   

// This for loop will iterate as many times as designated by the pwrdlength variable
// Password is called and concatenated with the selectedCase string where a golbal math object is then used to select a random character within the specified index string


// document.write(i);




