// create variables to connect to html
var startBtn = document.querySelector("start-button");
var quizContainer = document.querySelector("quiz-questions");
var quizResults = document.querySelector("quiz-results");

// get start button to initiate quiz
startBtn.addEventListener("click", quizContainer);

// create quiz
function buildQuiz()
// function showResults()

// quiz questions and answers 
var quizQuestion = [
  {
    question: "What is my name?",
    answers: {
      A: "Katie",
      B: "Sally",
      C: "June",
      D: "Jenny"
    },
    correctAnswer: "A"
    },
  {
    question: "My age is?",
    answers: {
      A: "11",
      B: "24",
      C: "38",
      D: "28"
    },
    correctAnswer: "D"
  },
  {
    question: "What is my favorite color?",
    answers: {
      A: "Pink",
      B: "Yellow",
      C: "Green",
      D: "Orange"
    },
    correctAnswer: "B"
  },
  {
    question: "What is my favorite food?",
    answers: {
      A: "Pizza",
      B: "Burger",
      C: "Noodles",
      D: "Pasta"
    },
    correctAnswer: "A"
    }
]
console.log(quizQuestion);


// build quiz
function buildQuiz() {
  //variable to store HTML answer
  var output = [],

    quizQuestion.forEach: (
      (currentQuestion, questionNum) => {
    
      //variable to store possible answers
      var answer = [];

      for (letter in currentQuestion.answer) {

        answer.push(
          ` <label>
          <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answer[letter]}
        </label>`
        );
      }
    
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>`
      );
    }
  
  quizContainer.innerHTML = output.join("")
}
