const questions = [ 
    {
        question: 'which of the following is a Markup Langauge?',
        answers: [
            {
                text:"HTML",correct: true
            },
            {
                text:"CSS",correct:false
            },
            {
                text:"Javascript",correct: false
            },
            {
                text:"PHP",correct: false
            },

        ]
    }, {
        question: 'JavaScript is an _ _ _ _ language?',
        answers: [
            {
                text:"object-oriented",correct: true
            },
            {
                text:"Object-Based",correct:false
            },
            {
                text:"Procedural",correct: false
            },
            {
                text:"None of the above",correct: false
            },
        ]
    },
    {
        question: 'upon encountering empty statements, what does the JavaScript Interpreter do?',
        answers: [
            {
                text:"Throws an error",correct: false
            },
            {
                text:"Ignores the statemnets",correct:true
            },
            {
                text:"Gives a warning",correct: false
            },
            {
                text:"None of the above",correct: false
            },
        ]
    },
    {
        question: 'Which of the following methods can be used to display data in some from using Javascript?',
        answers: [
            {
                text:"document.write()",correct: false
            },
            {
                text:"console.log()",correct:false
            },
            {
                text:"window.alert()",correct: false
            },
            {
                text:"All of the above",correct: true
            },
        ]
    }
];

const questionQuiz = document.getElementById('questionBox');
console.log('questionQuiz');
console.log(questionQuiz.textContent)
const option_a = document.getElementById('textOption_a');
const option_b = document.getElementById('textOption_b');
const option_c = document.getElementById('textOption_c');
const option_d = document.getElementById('textOption_d');
console.log(option_a.textContent);
console.log(option_b.textContent);
console.log(option_c.textContent);
console.log(option_d.textContent);

const button = document.getElementById('submit');

let currentQuestion = 0;
let score = 0;

console.log(questions[currentQuestion].question);
console.log(questions[currentQuestion].answers[0].text);
console.log(questions[currentQuestion].answers[1].text);
console.log(questions[currentQuestion].answers[2].text);
console.log(questions[currentQuestion].answers[3].text);

questionQuiz.textContent = questions[currentQuestion].question;
option_a.textContent = questions[currentQuestion].answers[0].text;
option_b.textContent = questions[currentQuestion].answers[1].text;
option_c.textContent = questions[currentQuestion].answers[2].text;
option_d.textContent = questions[currentQuestion].answers[3].text;
const answerElement = document.querySelectorAll('.answer');

console.log("answerElement",answerElement);
submit.addEventListener("click", () => {
  const answerQuiz = document.querySelector('input[type="radio"]:checked');
   console.log(answerQuiz);
  // console.log(answerQuiz.nextElementSibling.textContent);
   if(answerQuiz === null)
   {
    alert("Please select an answer");
   }else{
    if(answerQuiz.nextElementSibling.ATTRIBUTE_NODE.textContent === questions[currentQuestion].answer)
    {
        score++;
    }
    answerQuiz.checked = false;
    currentQuestion++;
    if(currentQuestion < questions.length)
    {
        questionQuiz.textContent = questions[currentQuestion].question;
option_a.textContent = questions[currentQuestion].answers[0].text;
option_b.textContent = questions[currentQuestion].answers[1].text;
option_c.textContent = questions[currentQuestion].answers[2].text;
option_d.textContent = questions[currentQuestion].answers[3].text;
answerQuiz.checked = false;
    }
    else{
        alert("Your score is" + score + " out of " + questions.length);
        location.reload();
    }
   }
});





