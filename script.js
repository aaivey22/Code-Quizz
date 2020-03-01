/*
* Initial pg "Start Quiz" with description
    click eListener for start button
    60 sec timer function starts
* 5 questions
    will be in For loop
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
* Go back button fires quiz function from beginning
*/


var button = document.getElementById('start');

button.addEventListener('click', start);

function start() {
console.log("start now");
}