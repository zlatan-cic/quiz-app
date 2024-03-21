// import "./style.css";

const quizData = [
  {
    question:
      "What protocol is commonly used to secure communication over the Internet?",
    a: "HTTP",
    b: "FTP",
    c: "SSH",
    d: "HTTPS",
    correct: "d",
  },
  {
    question: "What is the most used programming language in 2023?",
    a: "JavaScript",
    b: "Python",
    c: "Java",
    d: "C++",
    correct: "a", // JavaScript
  },
  {
    question: "What does HTML stand for?",
    a: "Hyper Trainer Marking Language",
    b: "Hyper Text Markup Language",
    c: "Hyper Texts Marks Language",
    d: "Hyperlinking Text Mark Language",
    correct: "b",
  },
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What year was Python released?",
    a: "1989",
    b: "1991",
    c: "2000",
    d: "1995",
    correct: "b",
  },
  {
    question: "Who created the Linux operating system?",
    a: "Bill Gates",
    b: "Steve Jobs",
    c: "Linus Torvalds",
    d: "Mark Zuckerberg",
    correct: "c",
  },
  {
    question: "Which company developed Java?",
    a: "Apple",
    b: "Microsoft",
    c: "Sun Microsystems",
    d: "Amazon",
    correct: "c",
  },
  {
    question: "Which of the following is a JavaScript framework?",
    a: "Django",
    b: "Flutter",
    c: "React",
    d: "Laravel",
    correct: "c",
  },
];

const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const quizWrapper = document.querySelector(".wrapper");

const answersEls = document.querySelectorAll(".answer");
const submitBtn = document.getElementById("btn");

let currentQuize = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuize];
  questionEl.textContent = currentQuizData.question;
  a_text.textContent = currentQuizData.a;
  b_text.textContent = currentQuizData.b;
  c_text.textContent = currentQuizData.c;
  d_text.textContent = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;

  answersEls.forEach((answerEl) => {
    // console.log(answer.checked);
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

function deselectAnswers() {
  answersEls.forEach((answerEl) => {
    // console.log(answer.checked);
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  // Check to se answer
  const answer = getSelected();

  console.log(answer);

  if (answer) {
    if (answer === quizData[currentQuize].correct) {
      score++;
    }
    if (answer) {
      currentQuize++;
      if (currentQuize < quizData.length) {
        loadQuiz();
      } else {
        // To do show results
        // quiz.innerHTML = `
        //   <h2>You answer corretly at ${score}/${quizData.length} questions
        //   </h2>
        //   <button onClick="location.reload()">Reload</button>
        // `

        document.querySelector(".modal").style.display = "flex"; 
        document.querySelector(".wrapper").style.display = "none"; 

        document.querySelector(
          ".title-m"
        ).textContent = `You answered correctly at ${score}/${quizData.length} questions.`;
        document
          .querySelector(".modal .btn")
          .addEventListener("click", () => location.reload());
      }
    }
  }
});

console.log(quizWrapper);
