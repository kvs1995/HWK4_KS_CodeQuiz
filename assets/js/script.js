
var playBtn = document.getElementById('play');
// set timer element
var timerEl = document.getElementById('countdown');

timerEl.textContent = "Play To Start Timer!"

//need function to display end screen after quiz is over
var endScreen = document.getElementsByClassName('info-description');
// var endScreenMessage = "ooga booga"



playBtn.addEventListener("click",function() {
    //swtich the content in the card

    //there is a replace Child funciton in javascript -- read about ti

    //remove the Code Quiz title, descripiton, and play button
    playBtn.parentElement.parentElement.remove();
    


    //TIMER 
    var timeLeft = 60;

    //setInterval method to call fundtion to be executed every time it is run
    var timeInterval = setInterval(function () {

        timerEl.textContent = "Timer: " + timeLeft;
        if (timeLeft === 0) {
            clearInterval(timeInterval)

            //update the text content to Times Up! 
            timerEl.textContent = "Time's Up!"

            //need to call a function that displays the finishing score and the play again/view highscore button
            function endScreen() {

                var timesUpMessage = document.createElement("p");
                timesUpMessage.textContent = "Ooga Booga"
                document.body.children[1].children[0].setAttribute("style","text-align:center")
                document.body.children[1].children[0].appendChild(timesUpMessage)
                
            }
            endScreen();
        
        }
        timeLeft--;
    },100);
})

//need function for when a button is selected for it to go to the next one. need a for loop
