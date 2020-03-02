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

var quiz = [
    [1, "question1", "option1", "option2", "option3", "option4"], 
    [2, "question2", "option1", "option2", "option3", "option4"],
    [3, "question3", "option1", "option2", "option3", "option4"],
    [4, "question4", "option1", "option2", "option3", "option4"],
    [5, "question5", "option1", "option2", "option3", "option4"]
    ];

// var question1 = ["option1", "option2", "option3", "option4"]
// var question2 = [option1, option2, option3, option4]
// var question3 = [option1, option2, option3, option4]
// var question4 = [option1, option2, option3, option4]
// var question5 = [option1, option2, option3, option4]


var button = document.getElementById('start');

button.addEventListener('click', start);


function start() {
document.getElementById("questions").value = quiz;
   console.log("start now"); 
    
}   
    
    
    // for (var i = 0; questions > 4; i++) { // This for loop will iterate as many times as designated by the pwrdlength variable
    //     // Password is called and concatenated with the selectedCase string where a golbal math object is then used to select a random character within the specified index string
        
    // }





// document.write(i);