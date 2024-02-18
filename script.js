const quizDB = [
    {
        question: "Q.1 What is the full form HTML?",
        a: "Hello To My Land",
        b: "Hey Text Markup Languauge",
        c: "HyperText Markup Language",
        d: "Hypertext Markup Language",
        ans: "ans4"
    },

    {
        question: "Q.2 What is the full form of CSS?",
        a: "Cascading Style Sheet",
        b: "Cascading Style Sheep",
        c: "Cartoon Style Sheet",
        d: "Cascading Super Sheet",
        ans: "ans1"
    },

    {
        question: "Q.3 What is the full form of HTTP?",
        a: "Hypertext Transfer Product",
        b: "Hypertext Test Product",
        c: "Hey Transfer Product",
        d: "Hypertext Transfer Protocol",
        ans: "ans4"
    },

    {
        question: "Q.4 What is the full form of JS?",
        a: "JavaScript",
        b: "JavaSuper",
        c: "JustScript",
        d: "JavaScipt",
        ans: "ans1"
    },
];
const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
    const questionList = quizDB[questionCount];

    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}

loadQuestion();

const getCheckedAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }  
    });
    return answer;
}

const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}

submit.addEventListener('click',() => {
    const checkedAnswer = getCheckedAnswer();
    console.log(checkedAnswer); 

    if(checkedAnswer == quizDB[questionCount].ans){
        score++;
    };


    questionCount++;
    deselectAll();

    if(questionCount < quizDB.length){
        loadQuestion();
    }else{
        showScore.innerHTML =`
            <h3> You Scored ${score}/${quizDB.length} </h3>
            <button class="btn" onclick="location.reload()">Play Again </button>
        `;

        showScore.classList.remove('scoreArea');
    }
});