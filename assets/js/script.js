
var playBtn = document.getElementById('play');
// set timer element
var timerEl = document.getElementById('countdown');

//set element for the b2 class
/////////////////////////////
var questionsList = [
    "What does HTML stand for?" //questions[0]
    ,"Strings must be enclosed in _____."
    ,"Choose the correct HTML element for the largest heading:"
    ,"Which character is used to indicate an end tag?"
    ,"How can you open a link in new tab/browser window?"
]
var answersList = [
    ['Hot Tamale', 'HyperText Markup Language','Hot Mail','How to Make Lasagna','HyperText Markup Language'] //answer[0], answer[0][1]
    ,['parantheses', 'brackets', 'quotations', 'tildes','quotations']
    ,['<h1>','<head>','<h6>','heading','<h1>']
    ,['<','/','*','^','/']
    ,['<a href="url" target="new">','<a href="url" target="_blank">','<a href="url" new>','<a href="url" target="newtab"','<a href="url" target="_blank">']

]

/////////////////////////////////////////////////////////////////////////

timerEl.textContent = "Play To Start Timer!"

//need function to display end screen after quiz is over
var endScreen = document.getElementsByClassName('info-description');
// var endScreenMessage = "ooga booga"



playBtn.addEventListener("click",function() {

    //remove the Code Quiz title, descripiton, and play button
    playBtn.parentElement.parentElement.remove();

    var button1 = document.createElement("button"); 
    var button2 = document.createElement("button"); 
    var button3 = document.createElement("button"); 
    var button4 = document.createElement("button");
    var a = document.createElement("p")
    var b = document.createElement("p")
    var c = document.createElement("p")
    var d = document.createElement("p")
    var btnList = [button1, button2, button3, button4]


    for (var i=0; i < btnList.length;i++) {      
        var choice =['a','b','c','d']
        var varChoicesArray = [a,b,c,d]
        btnList[i].setAttribute("type","button")
        btnList[i].setAttribute("id",choice[i])
        document.body.children[1].children[1].appendChild(btnList[i])
        varChoicesArray[i].textContent = answersList[0][i]
        varChoicesArray[i].setAttribute("class","buttons")
        document.body.children[1].children[1].children[i].appendChild(varChoicesArray[i])
    }


    var question = document.createElement("p");
    question.textContent = questionsList[0]
    question.setAttribute("class","questions")
    document.body.children[1].children[0].children[0].appendChild(question)
    var finishedMess = document.createElement("h3");
    var endingMess = document.createElement("p")

    //need to call a function that displays the finishing score and the play again/view highscore button
    function endScreen() {
        clearInterval(timeInterval)
        timerEl.textContent = ""
        question.remove()
        for (var i=0; i < btnList.length;i++) {    
            btnList[i].remove()}

        document.body.children[1].children[0].setAttribute("style","text-align:center")
        document.body.children[1].children[0].appendChild(finishedMess)
        document.body.children[1].children[0].appendChild(endingMess)

        var scoreMess = document.createElement("p");
        scoreMess.textContent = "Score: " + score
        document.body.children[1].children[1].appendChild(scoreMess)

        var submitForm = document.createElement("input")
        var submitBtn = document.createElement("button");
        submitForm.setAttribute("type","text")
        submitForm.setAttribute("name","initials")
        submitBtn.setAttribute("type","button")
        submitBtn.setAttribute("id","submitBtn")
        submitBtn.innerText = "Submit"
        document.body.children[1].children[2].appendChild(submitForm)
        document.body.children[1].children[2].appendChild(submitBtn)

        var playAgain = document.createElement("button");
        var viewHighScores = document.createElement("button")
        playAgain.innerText = 'Play Again'
        viewHighScores.innerText = 'View Highscores'
        playAgain.setAttribute("type","button")
        viewHighScores.setAttribute("type","button")
        playAgain.setAttribute("id","play-again")
        viewHighScores.setAttribute("id","view-highscore")

        document.body.children[1].children[3].appendChild(playAgain)
        document.body.children[1].children[3].appendChild(viewHighScores)
        
     
        playAgain.addEventListener('click', function() {
            location.reload()
        }) 
        // localStorage.setItem("current")
        }





    var questionNumber = 0;
    var score = 0;
    var questionNumber=0;
    var buttonListEl = $('.buttons');
    // var buttons =  $('.b2')
    var finished = 0

    buttonListEl.on('click',function(event){

        selAnswer = $(event.target)[0].textContent

        if (selAnswer === answersList[questionNumber][4]){
            score++;
        } else {
            timeLeft =timeLeft - 5;
        }

        questionNumber++; 

        if (questionNumber < questionsList.length) {    
            question.textContent = questionsList[questionNumber]
            a.textContent = answersList[questionNumber][0]
            b.textContent = answersList[questionNumber][1]
            c.textContent = answersList[questionNumber][2]
            d.textContent = answersList[questionNumber][3]
        } else {
            finished = 1
            finishedMess.textContent = "Noice!"
            endingMess.textContent = "Way to finish! See below for your score. If you're feeling good about your efforst, submit your score to see if you made it on the high score list."
            endScreen();
    }
    console.log(questionNumber)
})

    //TIMER 
    var timeLeft = 60;

    //setInterval method to call fundtion to be executed every time it is run
    var timeInterval = setInterval(function () {

        timerEl.textContent = "Timer: " + timeLeft;
        if (timeLeft === 0 && finished!==1) {
            finishedMess.textContent = "Times Up!"
            endingMess.textContent = "Whoops, nice try but time is up. Better luck next time! If you're still feeling confident, submit your initials to our high score list and see if you made it in the hall of fame."
            endScreen();}
        
        timeLeft--;
    },1000);


})

/////////////////////////////////////////////////////////////////
//need function for when a button is selected for it to go to the next one. need a for loop
// function questions
