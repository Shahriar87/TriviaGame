var correctNum = 0;
var incorrectNum = 0;
var unAnswered = 0;
var counter = 0;
var time;
var timerStart = 30;

var questionsData = [
    {
        question: "How many presents did Dudley originally get on his birthday before screaming at Petunia for more?",
        answers: ["26", "27", "36", "37"],
        correct: "36"
    },
    {
        question: "Who was the first person to get sorted into a Hogwarts house?",
        answers: ["Harry Potter", "Hannah Abbott", "Draco Malfoy", "Hermione Granger"],
        correct: "Hermione Granger"
    },
    {
        question: "What Bertie Bott’s Every Flavour Beans did Dumbledore have the most unfortunate encounter with when he was younger?",
        answers:["Vomit-flavored", "Bogy-flavored", "Earwax-flavored", "Dirt-flavored"],
        correct: "Vomit-flavored"
    },
    {
        question: "In Transfiguration class, what object do the students have to change their animals into?",
        answers: ["Fruit bowls", "Water goblets", "Ice pitcher", "Tea cups"],
        correct: "Water goblets"
    },
    {
        question: "Who does Hermione take a hair from for the Polyjuice Potion, which accidentally turned out to be a cat hair?",
        answers: ["Pansy Parkinson", "Millicent Bulstrode", "Daphne Greengrass", "Tracey Davis"],
        correct: "Millicent Bulstrode"
    },
    {
        question: "What is Gilderoy Lockhart’s favorite color?",
        answers: ["Lavender", "Cerulean", "Lilac", "Periwinkle"],
        correct: "Lilac"
    },
    {
        question: "When was the first time Harry heard about Sirius Black?",
        answers: ["In Diagon Alley", "On the Knight Bus", "In the Leaky Cauldron", "On the TV in the Dursley house"],
        correct: "On the Knight Bus"
    },
    {
        question: "During Harry’s first night back at Hogwarts, he and his dorm-mates eat something which allows them to imitate animals. Which animal does Seamus imitate?",
        answers: ["Monkey", "Elephant", "Lion", "Bird"],
        correct: "Monkey"
    },
    {
        question: "What time do Harry and Hermione travel back to in order to save Buckbeak and Sirius?",
        answers: ["6:30pm", "7:00pm", "7:30pm", "8:00pm"],
        correct: "7:30pm"
    },
    {
        question: "In what order do the champions pick their dragons?",
        answers: ["Krum, Cedric, Fleur, Harry", "Fleur, Cedric, Krum, Harry", "Krum, Fleur, Cedric, Harry", "Fleur, Krum, Cedric, Harry"],
        correct: "Fleur, Krum, Cedric, Harry"
    }   
];

var Q = ["A.","B.","C.","D."]



$("#startGame").on("click", function(event) {
    $("#startGame").hide();
    
    countDown();
    showQuestion();

});

function countDown() {
    time = setInterval(thirty, 1000);

    function thirty() {
        if (timerStart === 0) {
            clearInterval(time);
            timeout();
        }
        else if (timerStart > 0) {
            timerStart--;
        }
        $(".timer").html(timerStart);
    }
};

// var gameContent = "<h2>Time Remaining: <span class='timer'>" + timerStart + "</span></h2>";

function contentBuild(){
    $(".gameDiv").empty();

    $(".gameDiv").append($("<h2 id='timeR'>"));
    $("<h2>").addClass("text-center timer-p");
    $("#timeR").append($("<span class='timer'>"));
    $(".timer").html(timerStart);
};

function showQuestion(){
    console.log(counter);
    contentBuild();

    $(".gameDiv").append($("<h3 class='text-center'>" + questionsData[counter].question + "</h3>"));

    for (var i=0; i < 4; i++){
    $(".gameDiv").append($("<h3 class='answer'>"+Q[i]+" "+ questionsData[counter].answers[i] + "</h3>"));
    }
    console.log(counter);

};

function timeout(){
    unAnswered++

    
    contentBuild();

    $(".gameDiv").append($("<h3 class='text-center'> You ran out of time!</h3>"));
    $(".gameDiv").append($("<h3>The correct answer is: "+ questionsData[counter].correct + "</h3>"));

    setTimeout(pause, 2000);
};

$("body").on("click", ".answer", function(event){

    var userChoice = $(this).text();
    var userAnswer = userChoice.substring(userChoice.indexOf(".")+2);
    console.log(userChoice);
    console.log(questionsData[counter].correct);
    console.log(userAnswer);

    if (userAnswer === questionsData[counter].correct){
        showCorrect();
    } else {
        showIncorrect();
    }
    clearInterval(time)

});


function showCorrect(){
    correctNum++;
    contentBuild();

    $(".gameDiv").append($("<h3 class='text-center'>Correct! The answer is: "+ questionsData[counter].correct +"</h3>"));

    setTimeout(pause, 2000);
};

function showIncorrect(){
    incorrectNum++;
    contentBuild();

    $(".gameDiv").append($("<h3 class='text-center'>Incorrect! The answer is: "+ questionsData[counter].correct +"</h3>"));

    setTimeout(pause, 2000);
};

function pause(){
    if (counter < 9){
        counter++;
        showQuestion();
        timerStart = 30;
        countDown();
    } else {
        gameOver();
    }
};

function gameOver(){
    contentBuild();

    $(".gameDiv").append($("<h3>Correct Answers: "+ correctNum +"</h3>"));
    $(".gameDiv").append($("<h3>Incorrect Answers: "+ incorrectNum +"</h3>"));
    $(".gameDiv").append($("<h3>Unanswered Answers: "+ unAnswered +"</h3>"));
    $(".gameDiv").append($("<button type='button' class='btn btn-secondary' id='reset'>Start Over?</button>"));

};

$("body").on("click", "#reset", function(){
    
    totalCorrect = 0;
    incorrectNum = 0;
    unAnswered = 0;
    counter = 0;
    time;
    timerCounter = 30;
    countDown();
    showQuestion();
});