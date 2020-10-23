const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName("choice-text"));

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [

    {
        question: "Inside which HTML element do you put the javascript file?",
        choice1: "script tag",
        choice2: "javascript tag",
        choice3: "Head tag",
        choice4: "js tag",
        answer: 1
    },
    {
        question: "Inside which HTML element do you put the javascript file?",
        choice1: "script tag",
        choice2: "javascript tag",
        choice3: "Head tag",
        choice4: "js tag",
        answer: 2
    },
    {
        question: "Inside which HTML element do you put the javascript file?",
        choice1: "script tag",
        choice2: "javascript tag",
        choice3: "Head tag",
        choice4: "js tag",
        answer: 3
    },
    {
        question: "Inside which HTML element do you put the javascript file?",
        choice1: "script tag",
        choice2: "javascript tag",
        choice3: "Head tag",
        choice4: "js tag",
        answer: 4
    },
    {
        question: "Inside which HTML element do you put the javascript file?",
        choice1: "script tag",
        choice2: "javascript tag",
        choice3: "Head tag",
        choice4: "js tag",
        answer: 5
    },
    {
        question: "Inside which HTML element do you put the javascript file?",
        choice1: "script tag",
        choice2: "javascript tag",
        choice3: "Head tag",
        choice4: "js tag",
        answer: 6
    },
    {
        question: "Inside which HTML element do you put the javascript file?",
        choice1: "script tag",
        choice2: "javascript tag",
        choice3: "Head tag",
        choice4: "js tag",
        answer: 7
    },
    {
        question: "Inside which HTML element do you put the javascript file?",
        choice1: "script tag",
        choice2: "javascript tag",
        choice3: "Head tag",
        choice4: "js tag",
        answer: 8
    },
    {
        question: "Inside which HTML element do you put the javascript file?",
        choice1: "script tag",
        choice2: "javascript tag",
        choice3: "Head tag",
        choice4: "js tag",
        answer: 9
    },
    {
        question: "Inside which HTML element do you put the javascript file?",
        choice1: "script tag",
        choice2: "javascript tag",
        choice3: "Head tag",
        choice4: "js tag",
        answer: 10
    }

];

//Constants

const CORRECT_BONUS = 1;
const MAX_QUESTION = 10;


startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions);
    getNewQuestion();
};

getNewQuestion = () => {

    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTION) {
        //Go to the end page

        return window.location.assign("/end.html");
    }
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset['nmber'];
        choice.innerText = currentQuestion["choice" + number];
    });

    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if (!acceptingAnswers)
            return;
        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];
        console.log(selectedAnswer);
        getNewQuestion();
    });
});

startGame();