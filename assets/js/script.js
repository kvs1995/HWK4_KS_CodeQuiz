
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

// var correct = [1,2,0,1,1]






/////////////////////////////////////////////////////////////////////////


timerEl.textContent = "Play To Start Timer!"

//need function to display end screen after quiz is over
var endScreen = document.getElementsByClassName('info-description');
// var endScreenMessage = "ooga booga"



playBtn.addEventListener("click",function() {

    var button1 = document.createElement("button"); 
    var button2 = document.createElement("button"); 
    var button3 = document.createElement("button"); 
    var button4 = document.createElement("button");
    var btnList = [button1, button2, button3, button4]

    for (var i=0; i < btnList.length;i++) {      
        var choice =['a','b','c','d']
        btnList[i].setAttribute("type","button")
        btnList[i].setAttribute("id",choice[i])
        document.body.children[1].children[1].appendChild(btnList[i])
    }

    // button1.setAttribute("type","button"); button2.setAttribute("type","button"); button3.setAttribute("type","button"); button4.setAttribute("type","button")
    // button1.setAttribute("id","a"); button2.setAttribute("id","b"); button3.setAttribute("id","c"); button4.setAttribute("id","d")
    // document.body.children[1].children[1].appendChild(button1); document.body.children[1].children[1].appendChild(button2); document.body.children[1].children[1].appendChild(button3)
    // document.body.children[1].children[1].appendChild(button4)

    var question = document.createElement("p");
    question.textContent = questionsList[0]
    question.setAttribute("class","questions")
    document.body.children[1].children[0].children[1].appendChild(question)

    var a = document.createElement("p")
    var b = document.createElement("p")
    var c = document.createElement("p")
    var d = document.createElement("p")
    a.textContent = answersList[0][0]
    b.textContent = answersList[0][1]
    c.textContent = answersList[0][2]
    d.textContent = answersList[0][3]
    a.setAttribute("class","buttons"); b.setAttribute("class","buttons"); c.setAttribute("class","buttons"); d.setAttribute("class","buttons")
    
    document.body.children[1].children[1].children[0].appendChild(a)
    document.body.children[1].children[1].children[1].appendChild(b)
    document.body.children[1].children[1].children[2].appendChild(c)
    document.body.children[1].children[1].children[3].appendChild(d)

            //need to call a function that displays the finishing score and the play again/view highscore button
    function endScreen() {
        clearInterval(timeInterval)
            question.remove()
            button1.remove()
            button2.remove()
            button3.remove()
            button4.remove()
        var finishedScreen = document.createElement("p");
        finishedScreen.textContent = "Ooga Booga"
        document.body.children[1].children[0].setAttribute("style","text-align:center")
        document.body.children[1].children[0].appendChild(finishedScreen)


            }

    //remove the Code Quiz title, descripiton, and play button
    playBtn.parentElement.parentElement.remove();



    var questionNumber = 0;
var score = 0;

var questionNumber=0;
var buttonListEl = $('.buttons');
var buttons =  $('.b2')
buttonListEl.on('click',function(event){

    // if (questionNumber < questionsLength {
    


    // for(i=0;  i <   1 ;i++) {
        selAnswer = $(event.target)[0].textContent
        if (selAnswer === answersList[questionNumber][4]){
            score++;
    
        }// console.log(questionNumber)
        questionNumber++; 
        console.log("Score:" + score)
  
        console.log("Question Number: " +questionNumber)
        if (questionNumber < questionsList.length) {    
        question.textContent = questionsList[questionNumber]
        a.textContent = answersList[questionNumber][0]
        b.textContent = answersList[questionNumber][1]
        c.textContent = answersList[questionNumber][2]
        d.textContent = answersList[questionNumber][3]

        
        } else {
            var finished = 1
            // console.log(finished)
            // buttons.removeChild()
            timerEl.textContent = "Noice!"
            endScreen();


    }
    // if ($(event.target).innerHTML)
    console.log(questionNumber)
})





    //TIMER 
    var timeLeft = 60;

    //setInterval method to call fundtion to be executed every time it is run
    var timeInterval = setInterval(function () {

        timerEl.textContent = "Timer: " + timeLeft;
        if (timeLeft === 0 && finished!==1) {
            // clearInterval(timeInterval)

            //update the text content to Times Up! 
            timerEl.textContent = "Time's Up!"
            endScreen();}
        
        
        timeLeft--;
    },1000);
})

/////////////////////////////////////////////////////////////////
//need function for when a button is selected for it to go to the next one. need a for loop
// function questions
