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
        correct: "36",
        image: "https://img.buzzfeed.com/buzzfeed-static/static/2015-01/24/22/tmp/webdr01/c6ff9b9f76a5a6f694a12c678c8b9307-12.jpg?downsize=715:*&output-format=auto&output-quality=auto"
    },
    {
        question: "Who was the first person to get sorted into a Hogwarts house?",
        answers: ["Harry Potter", "Hannah Abbott", "Draco Malfoy", "Hermione Granger"],
        correct: "Hermione Granger",
        image: "https://img.buzzfeed.com/buzzfeed-static/static/2015-01/24/22/tmp/webdr09/10455211089a6ebf3a10bfcbd9a07f86-12.jpg?downsize=715:*&output-format=auto&output-quality=auto"
    },
    {
        question: "What Bertie Bott’s Every Flavour Beans did Dumbledore have the most unfortunate encounter with when he was younger?",
        answers:["Vomit-flavored", "Bogy-flavored", "Earwax-flavored", "Dirt-flavored"],
        correct: "Vomit-flavored",
        image: "https://img.buzzfeed.com/buzzfeed-static/static/2015-01/24/22/tmp/webdr01/407188dc91ab5cdb36e1d00b8915b3bb-5.jpg?downsize=715:*&output-format=auto&output-quality=auto"
    },
    {
        question: "In Transfiguration class, what object do the students have to change their animals into?",
        answers: ["Fruit bowls", "Water goblets", "Ice pitcher", "Tea cups"],
        correct: "Water goblets",
        image: "https://img.buzzfeed.com/buzzfeed-static/static/2015-01/24/23/tmp/webdr10/8799e32829ae38efeec1fe0fad9f2c98-26.png?downsize=715:*&output-format=auto&output-quality=auto"
    },
    {
        question: "Who does Hermione take a hair from for the Polyjuice Potion, which accidentally turned out to be a cat hair?",
        answers: ["Pansy Parkinson", "Millicent Bulstrode", "Daphne Greengrass", "Tracey Davis"],
        correct: "Millicent Bulstrode",
        image: "https://img.buzzfeed.com/buzzfeed-static/static/2015-01/24/23/tmp/webdr11/1a10fdde484d9b054a168af5e07140a9-3.png?downsize=715:*&output-format=auto&output-quality=auto"
    },
    {
        question: "What is Gilderoy Lockhart’s favorite color?",
        answers: ["Lavender", "Cerulean", "Lilac", "Periwinkle"],
        correct: "Lilac",
        image: "https://img.buzzfeed.com/buzzfeed-static/static/2015-01/24/23/tmp/webdr05/anigif_7725aab34502a24b9ed91ca88c7de259-28.gif?downsize=715:*&output-format=auto&output-quality=auto"
    },
    {
        question: "When was the first time Harry heard about Sirius Black?",
        answers: ["In Diagon Alley", "On the Knight Bus", "In the Leaky Cauldron", "On the TV in the Dursley house"],
        correct: "On the Knight Bus",
        image: "https://i.pinimg.com/originals/4c/a0/2d/4ca02d4bdf7e6adab39d407041a5bdfe.gif"
    },
    {
        question: "During Harry’s first night back at Hogwarts, he and his dorm-mates eat something which allows them to imitate animals. Which animal does Seamus imitate?",
        answers: ["Monkey", "Elephant", "Lion", "Bird"],
        correct: "Monkey",
        image: "https://img.buzzfeed.com/buzzfeed-static/static/2015-01/24/23/tmp/webdr09/anigif_cd03fd5ebba011165bca25c6005708b8-19.gif?downsize=715:*&output-format=auto&output-quality=auto"
    },
    {
        question: "What time do Harry and Hermione travel back to in order to save Buckbeak and Sirius?",
        answers: ["6:30pm", "7:00pm", "7:30pm", "8:00pm"],
        correct: "7:30pm",
        image: "https://img.buzzfeed.com/buzzfeed-static/static/2015-01/24/23/tmp/webdr04/651a81a24b2661254467327768cc144e-15.jpg?downsize=715:*&output-format=auto&output-quality=auto"
    },
    {
        question: "In what order do the champions pick their dragons?",
        answers: ["Krum, Cedric, Fleur, Harry", "Fleur, Cedric, Krum, Harry", "Krum, Fleur, Cedric, Harry", "Fleur, Krum, Cedric, Harry"],
        correct: "Fleur, Krum, Cedric, Harry",
        image: "https://img.buzzfeed.com/buzzfeed-static/static/2015-01/24/23/tmp/webdr10/anigif_280f1a8ca7e3cb57770f3857a6437cbe-4.gif?downsize=715:*&output-format=auto&output-quality=auto"
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

function timeout(){
    unAnswered++

    
    contentBuild();

    $(".gameDiv").append($("<h3 class='text-center'> You ran out of time!</h3>"));
    $(".gameDiv").append($("<h3>The correct answer is: "+ questionsData[counter].correct + "</h3>"));
    displayImage();

    setTimeout(pause, 2000);
};

function showCorrect(){
    correctNum++;
    contentBuild();

    $(".gameDiv").append($("<h3 class='text-center'>Correct! The answer is: "+ questionsData[counter].correct +"</h3>"));
    displayImage();

    setTimeout(pause, 2000);
};

function showIncorrect(){
    incorrectNum++;
    contentBuild();

    $(".gameDiv").append($("<h3 class='text-center'>Incorrect! The answer is: "+ questionsData[counter].correct +"</h3>"));
    displayImage();

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

function displayImage(){
    $(".gameDiv").append($("<img src = " + questionsData[counter].image + ">"));
};

$("body").on("click", "#reset", function(){
    
    correctNum = 0;
    incorrectNum = 0;
    unAnswered = 0;
    counter = 0;
    timerStart = 30;
    countDown();
    showQuestion();
});