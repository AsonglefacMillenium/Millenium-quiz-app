const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));

let currentQuestions = {};
let currentAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [

]