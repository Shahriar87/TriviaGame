var totalCorrect = 0;
var incorrectNum = 0;
var unAnswered = 0;
var counter = 0;
var time;
var timerCounter = 30;

var questionsArray = [
    "How many presents did Dudley originally get on his birthday before screaming at Petunia for more?",
    "Who was the first person to get sorted into a Hogwarts house?",
    "What Bertie Bott’s Every Flavour Beans did Dumbledore have the most unfortunate encounter with when he was younger?",
    "In Transfiguration class, what object do the students have to change their animals into?",
    "Who does Hermione take a hair from for the Polyjuice Potion, which accidentally turned out to be a cat hair?",
    "What is Gilderoy Lockhart’s favorite color?",
    "When was the first time Harry heard about Sirius Black?",
    "During Harry’s first night back at Hogwarts, he and his dorm-mates eat something which allows them to imitate animals. Which animal does Seamus imitate?",
    "What time do Harry and Hermione travel back to in order to save Buckbeak and Sirius?",
    "In what order do the champions pick their dragons?"
];
var answersArray = [
    ["26", "27", "36", "37"],
    ["Harry Potter", "Hannah Abbott", "Draco Malfoy", "Hermione Granger"],
    ["Vomit-flavored", "Bogy-flavored", "Earwax-flavored", "Dirt-flavored"],
    ["Fruit bowls", "Water goblets", "Ice pitcher", "Tea cups"],
    ["Pansy Parkinson", "Millicent Bulstrode", "Daphne Greengrass", "Tracey Davis"],
    ["Lavender", "Cerulean", "Lilac", "Periwinkle"],
    ["In Diagon Alley", "On the Knight Bus", "In the Leaky Cauldron", "On the TV in the Dursley house"],
    ["Monkey", "Elephant", "Lion", "Bird"],
    ["6:30pm", "7:00pm", "7:30pm", "8:00pm"],
    ["Krum, Cedric, Fleur, Harry", "Fleur, Cedric, Krum, Harry", "Krum, Fleur, Cedric, Harry", "Fleur, Krum, Cedric, Harry"],
];
var correctArray = [
    "36",
    "Hermione Granger",
    "Vomit-flavored",
    "Water goblets", 
    "Millicent Bulstrode",
    "Lilac",
    "On the Knight Bus",
    "Monkey",
    "7:30pm",
    "Fleur, Krum, Cedric, Harry"
];



$("#startGame").on("click", function(event) {
    $("#startGame").hide();
    
    timeCount();
    generateHTML();

});

function timeCount() {
    time = setInterval(thirty, 1000);

    function thirty() {
        if (timerCounter === 0) {
            clearInterval(time);
            questionTimeout();
        }
        else if (timerCounter > 0) {
            timerCounter--;
        }
        $(".timer").html(timerCounter);
    }
}

